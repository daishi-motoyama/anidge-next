"use client";

import {
  IconHome,
  IconHeartStar,
  IconMenu2,
  IconBrandWechat,
  TablerIconsProps,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box, Stack, Text, UnstyledButton } from "@mantine/core";
import { useHover } from "@mantine/hooks";

type Route = {
  title: string;
  path: string;
  icon: (props: TablerIconsProps) => JSX.Element;
};

const RouteMenu = {
  Home: "HOME",
  Chat: "CHAT",
  Interested: "Interested",
  Menu: "MENU",
} as const;

const ROUTES: {
  [K in (typeof RouteMenu)[keyof typeof RouteMenu]]: Route;
} = {
  [RouteMenu.Home]: {
    icon: IconHome,
    path: "/",
    title: "ホーム",
  },
  [RouteMenu.Chat]: {
    icon: IconBrandWechat,
    title: "チャット",
    path: "/chat",
  },
  [RouteMenu.Interested]: {
    icon: IconHeartStar,
    path: "/interested",
    title: "気になる",
  },
  [RouteMenu.Menu]: {
    icon: IconMenu2,
    path: "/menu",
    title: "メニュー",
  },
};

export const BottomNavigation = () => {
  const pathName = usePathname();

  return (
    <Box
      p="sm"
      display={"grid"}
      style={{
        boxShadow: '0px -8px 8px 0px #00000008',
        display: 'grid',
        justifyContent: 'space-between',
        gridTemplateColumns: `repeat(${Object.values(ROUTES).length}, 20%)`,
      }}
    >
      {Object.values(ROUTES).map((route) => (
        <BottomNavigationItem
          key={`BottomNavigationItem_${route.title}`}
          isCurrentPath={pathName === route.path}
          icon={route.icon}
          path={route.path}
          title={route.title}
        />
      ))}
    </Box>
  );
};

type Props = {
  isCurrentPath: boolean;
} & Route;

const BottomNavigationItem = ({ isCurrentPath, title, path, icon: Icon }: Props) => {
  return (
    <Link style={{ textDecoration: "none" }} passHref href={{ pathname: path }}>
      <UnstyledButton
        w={"100%"}
        display={"grid"}
        style={(theme) => ({
          gap: 2,
          justifyItems: "center",
          color: isCurrentPath ? theme.colors.blue[6] : theme.colors.gray[7],
          cursor: "pointer",
        })}
      >
        <Icon strokeWidth={1} size={20} />
        <Text size={"xs"}>{title}</Text>
      </UnstyledButton>
    </Link>
  );
};
