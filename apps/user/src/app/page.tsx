import { BaseLayout } from "@src/app/_component/layout/BaseLayout";
import { BottomNavigation } from "@src/app/_component/navigation/BottomNavigation";

const Page = () => {
  return (
    <BaseLayout header={<div>page</div>} footer={<BottomNavigation />}>
      <div>page</div>
    </BaseLayout>
  );
};

export default Page;
