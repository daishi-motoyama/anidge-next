import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'ShopsPage',
};

const ShopsPageLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ShopsPageLayout;