import { memo, Suspense } from "react";

const LoadingScreen = () => {
  return (
    <div className=" bg-primary w-full min-h-screen flex flex-col items-center justify-center  text-foreground px-6">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-accent mb-6"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-2">
        Loading...
      </h2>
      <p className="text-secondary text-center max-w-md">
        Please wait while we load your content. This should only take a few
        seconds.
      </p>
    </div>
  );
};

import AppRouter from "@/pages";

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AppRouter />
    </Suspense>
  );
};

export default memo(App);
