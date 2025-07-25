import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
 const location = useLocation();


 useEffect(() => {
   console.error(
     "404 Error: User attempted to access non-existent route:",
     location.pathname
   );
 }, [location.pathname]);


 return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
     <div className="text-center mb-8">
       <h1 className="text-4xl font-bold mb-4">404</h1>
       <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
       <a href="/" className="text-blue-500 hover:text-blue-700 underline">
         Return to Home
       </a>
     </div>
    
     {/* GitHub Contribution Snake */}
     <div className="w-full max-w-2xl">
       <img
         src="https://raw.githubusercontent.com/smit4k/smit.codes/output/github-contribution-grid-snake.svg"
         alt="GitHub Contribution Snake"
         className="w-full h-auto"
         style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
       />
     </div>
    
     <p className="mt-6 text-sm text-gray-500">
       Check out my GitHub contributions while you're here!
     </p>
   </div>
 );
};


export default NotFound;