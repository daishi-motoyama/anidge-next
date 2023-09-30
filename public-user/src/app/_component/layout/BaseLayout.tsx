"use server";

import { ReactElement } from "react";
import { Box, Container } from "@mantine/core";

type Props = {
  footer: ReactElement;
  header: ReactElement;
  children: ReactElement;
};

export const BaseLayout = ({ footer, header, children }: Props) => {
  return (
    <Box bg={"gray.0"}>
      <Container
        p={0}
        size={"xs"}
        style={{
          background: "white",
          display: "grid",
          gridTemplateColumns: "100%",
          gridTemplateRows: (header ? "auto " : "") + "1fr" + (footer ? " auto" : ""),
          height: "100dvh",
        }}
      >
        {header}
        <Box
          style={{
            overflow: "scroll",
          }}
        >
          <Box py={24} px={16}>
            {children}
          </Box>
        </Box>
        {footer}
      </Container>
    </Box>
  );
};
