import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-2 max-w-6xl mx-auto">
        <div className="flex items-center mt-2">
          <img
            src={process.env.PUBLIC_URL + '/imoniLogo.png'}
            alt="logo"
            className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
            onClick={() => navigate("/")}
          />
          <img
            src={process.env.PUBLIC_URL + '/imoniBizName.png'}
            alt="company name"
            className="w-32 h-10 cursor-pointer sm:w-40 sm:h-14 md:w-48 md:h-16 lg:w-56 lg:h-18 xl:w-72 xl:h-20 mt--4"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-500"
            onClick={toggleDrawer}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/offers")}
            >
              About Us
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/blog") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/blog")}
            >
              Blog
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/contact") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/contact-page")}
            >
              Contact
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/offers")}
            >
              Properties
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
            {/* New Links for Services and Career */}
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/services") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/career") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/career")}
            >
              Career
            </li>
          </ul>
        </div>

        {/* Drawer Navigation - Mobile */}
        {isDrawerOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white opacity-95 z-50">
            <ul className="flex flex-col items-center mt-10">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/") && "text-black"}`}
                onClick={() => {
                  navigate("/");
                  toggleDrawer();
                }}
              >
                Home
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/offers") && "text-black"}`}
                onClick={() => {
                  navigate("/offers");
                  toggleDrawer();
                }}
              >
                About Us
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/blog") && "text-black"}`}
                onClick={() => {
                  navigate("/blog");
                  toggleDrawer();
                }}
              >
                Blog
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/contact") && "text-black"}`}
                onClick={() => {
                  navigate("/contact");
                  toggleDrawer();
                }}
              >
                Contact
              </li>
               {/* New Links for Services and Career */}
               <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/services") && "text-black"}`}
                onClick={() => {
                  navigate("/services");
                  toggleDrawer();
                }}
              >
                Services
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/career") && "text-black"}`}
                onClick={() => {
                  navigate("/career");
                  toggleDrawer();
                }}
              >
                Career
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/offers") && "text-black"}`}
                onClick={() => {
                  navigate("/offers");
                  toggleDrawer();
                }}
              >
                Properties
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black"}`}
                onClick={() => {
                  navigate("/profile");
                  toggleDrawer();
                }}
              >
                {pageState}
              </li>
             
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
