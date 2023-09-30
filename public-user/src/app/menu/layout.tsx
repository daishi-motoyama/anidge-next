import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'MenuPage',
};

const MenuPageLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default MenuPageLayout;