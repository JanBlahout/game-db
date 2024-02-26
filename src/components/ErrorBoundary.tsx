import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError() as Error | undefined;

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-4">Oops! 😮 Something went wrong.</h1>
      <p className="text-lg mb-2">
        We're sorry, but an error occurred while rendering this page.
      </p>
      {error && <p className="text-red-500 mb-2">{error.message}</p>}
      <div className="flex space-x-4">
        <button
          onClick={handleReload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reload Page 🔄
        </button>
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Home Page 🏠
        </Link>
      </div>
    </div>
  );
}
