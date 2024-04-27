
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
    const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 to-blue-500">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <img src="/error.svg" alt="Error" className="w-32 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-800 mb-6">Oops! Something went wrong.</p>
        <button
          onClick={handleGoBack}
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
