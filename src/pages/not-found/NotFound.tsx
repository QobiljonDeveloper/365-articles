const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/"; // bosh sahifaga qaytish
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold text-accent mb-6 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-secondary mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-accent text-black px-6 py-3 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
