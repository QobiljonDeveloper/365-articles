import { memo, Suspense } from "react";
import AppRouter from "@/pages";
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
};

export default memo(App);
