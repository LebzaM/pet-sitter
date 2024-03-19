import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GiJumpingDog } from "react-icons/gi";
import { FaBars } from 'react-icons/fa';
import { FaSearch, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false)
  const [sellerData, setSellerData] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const checkSession = () => {
      const stored = localStorage.getItem('isLoggedIn');
      const userDataFromStorage = localStorage.getItem('userData');
      if (userDataFromStorage) {
        setUserData(JSON.parse(userDataFromStorage));
      }
      if (stored) {
        setIsLoggedIn(true);
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    const checksellerSession = () => {
      const storedSeller = localStorage.getItem('sellerLoggedIn');
      const userSellerFromStorage = localStorage.getItem('sellerData');
      if (userSellerFromStorage) {
        setSellerData(JSON.parse(userSellerFromStorage));
      }
      if (storedSeller) {
        setIsSellerLoggedIn(true);
      }
    };
  
    checksellerSession();
  }, []);
  
  const checksellerSession = () => {
    const storedSeller = localStorage.getItem('sellerLoggedIn');
    const userSellerFromStorage = localStorage.getItem('sellerData');
    if (userSellerFromStorage) {
      setSellerData(JSON.parse(userSellerFromStorage));
    }
    if (storedSeller) {
      setIsSellerLoggedIn(true);
    }
  };
  
  useEffect(() => {
    checksellerSession();
  }, []);
  


  const handleSellerLogout = () => {
    localStorage.localStorage.getItem('sellerLoggedIn');
    localStorage.getItem('sellerData');
    // Remove all items from local storage when logging out
    localStorage.clear();
    navigate('/');
    setIsLoggedIn(false);
    navigate(0)
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');
    // Remove all items from local storage when logging out
    localStorage.clear();
    navigate('/');
    setIsLoggedIn(false);
    navigate(0)
  };
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center h-14 border-b px-2 md:px-20 space-x-6 mb-5 text-black bg-gray-100 font-gaya">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4">
          <Link to="/"><GiJumpingDog className="text-5xl mt-3" /></Link>
        </h1>
        
        <div className="flex gap-2 md:hidden">
          <button className="px-4 py-2 rounded-full" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        {/* Sidebar for mobile */}
        <div className={`fixed inset-0 bg-white z-50 overflow-y-auto transition-all ease-in-out duration-300 md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end pt-6 pr-6">
            <button className="text-2xl" onClick={toggleSidebar}>
              &times;
            </button>
          </div>
          <nav className="mt-10">
            <ul className="text-lg">
              {/* <li className="py-3 px-6 border-b"> 
                <Link to="/">Login</Link>
              </li> */}
              <li className="py-3 px-6 border-b">
                <Link to="/">Login as Pet Sitter</Link>
              </li>
              
              {/* Add more menu items as needed */}
            </ul>
          </nav>
        </div>
        
        {/* Regular menu items for desktop */}
        <div className="hidden md:flex gap-2">
      {userData || sellerData ? (
        <>
          {userData ? (
            <button className="flex gap-1 px-2 py-2 font-norm">
              <p>Hi, {userData.data.name}</p>
            </button>
          ) : (
            <button className="flex gap-1 px-2 py-2 font-norm">
              <p>Hi, {userData.data.name}</p>
            </button>
          )}
          
          
          {sellerData? (
            <button className="bg-blue-500 px-4 py-2 rounded-full font-norm text-white font-bold" onClick={handleSellerLogout}>
            Logout Seller
            
          </button>

          ):(
            <button className="bg-blue-500 px-4 py-2 rounded-full font-norm text-white font-bold" onClick={handleLogout}>
            Logout Owner
          </button>
          )}
          
        </>
      ) : (
        <>
          {/* <button className="bg-blue-500 px-4 py-2 rounded-full font-gaya text-white ">
            <Link to="/login">Login</Link>
          </button> */}
          {isSellerLoggedIn ? (
            <button className="bg-blue-500 px-4 py-2 rounded-full font-gaya text-white ">
              <Link to="/sellerdashboard">Seller Dashboard</Link>
            </button>
          ) : (
            <button className="bg-blue-500 px-4 py-2 rounded-full font-gaya text-white font-bold">
              <Link to="/sellerlogin">Login as Pet Sitter</Link>
            </button>
          )}
        </>
      )}
    </div>

        
      </div>
    </header>
  );
};


export default NavBar;