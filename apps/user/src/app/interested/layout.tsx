import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'QrScanPage',
};

const QrScanPageLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default QrScanPageLayout;