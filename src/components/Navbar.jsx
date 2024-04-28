import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/config";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CraftContext } from "../Root";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    photo: "",
    uid: "",
  });

  const [theme, setTheme] = useState('light')
  const {render} = useContext(CraftContext)

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile({
          name: user.displayName,
          photo: user.photoURL,
          uid: user.uid,
        });
        setLoading(false);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });
  }, [navigate, render]);


  const handleThemeChange =(e) => {
    
    if (e.target.value == "light") {
      setTheme('synthwave')
      localStorage.setItem("theme", "synthwave");
    }
    if (e.target.value == "synthwave") {
      setTheme('light')
      localStorage.setItem("theme", "light");
    }
    
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if(localTheme){
        setTheme(localTheme)
        document.documentElement.setAttribute('data-theme', localTheme)
    }else{
        setTheme('light')
        document.documentElement.setAttribute('data-theme', 'light')
    }
  },[theme])

  return (
    <>
      <Helmet>
        <title>Artisan Haven</title>
      </Helmet>
      <div >
      <div className="navbar z-20 absolute top-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" data-tooltip-id="Home" data-tooltip-content="Home">Home</NavLink>
                <Tooltip id="Home" />
              </li>
              <li>
                <NavLink to="/all_art" data-tooltip-id="all_art_craft" data-tooltip-content="All Art & craft Items">All Art & craft Items</NavLink>
                <Tooltip id="all_art_craft" />
              </li>
              {profile?.uid && (
                <>
                <li>
                  <NavLink to={`add_art_craft/${profile?.uid}`} data-tooltip-id="add_craft_item" data-tooltip-content="Add Craft Item">
                  Add Craft Item
                  </NavLink>
                  <Tooltip id="add_craft_item" />
                </li>
                <li>
                  <NavLink to={`my_art_craft/${profile?.uid}`} data-tooltip-id="my_art_craft" data-tooltip-content="My Art&Craft List">
                  My Art&Craft List
                  </NavLink>
                  <Tooltip id="my_art_craft" />
                </li>
                </>
              )}
              <li >
                <NavLink to="/contact" data-tooltip-id="contact" data-tooltip-content="Contact me">Contact me </NavLink>
                <Tooltip id="contact" />
              </li>
              <li >
                <NavLink to="/about" data-tooltip-id="about" data-tooltip-content="About">About </NavLink>
                <Tooltip id="about" />
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Artisan Haven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
            <NavLink to="/" data-tooltip-id="Home" data-tooltip-content="Home">Home</NavLink>
                <Tooltip id="Home" />
            </li>
            <li>
              <NavLink to="/all_art" data-tooltip-id="all_art_craft" data-tooltip-content="All Art & craft Items" >All Art & craft Items</NavLink>
              <Tooltip id="all_art_craft" />
            </li>
            {profile?.uid && (
              <>
              <li>
              <NavLink to={`add_art_craft/${profile?.uid}`} data-tooltip-id="add_craft_item" data-tooltip-content="Add Craft Item">
                  Add Craft Item
                  </NavLink>
                  <Tooltip id="add_craft_item" />
              </li>
              <li>
              <NavLink to={`my_art_craft/${profile?.uid}`} data-tooltip-id="my_art_craft" data-tooltip-content="My Art&Craft List">
                  My Art&Craft List
                  </NavLink>
                  <Tooltip id="my_art_craft" />
              </li>
              </>
            )}
            <li>
            <NavLink to="/contact" data-tooltip-id="contact" data-tooltip-content="Contact me">Contact me </NavLink>
                <Tooltip id="contact" />
              </li>
              <li >
              <NavLink to="/about" data-tooltip-id="about" data-tooltip-content="About">About </NavLink>
                <Tooltip id="about" />
              </li>
          </ul>
        </div>
        <div className="navbar-end md:gap-5 gap-1">
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : profile ? (
            <div className="relative group ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={profile?.photo}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm hidden group-hover:block top-8 absolute right-0 bg-base-100 rounded-box w-52"
              >
                <li>
                  <h1>{profile.name}</h1>
                </li>
                <li>
                  <a
                    onClick={() => {
                      signOut(auth).then(() => navigate("/"));
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="mr-5 flex md:gap-10 gap-3">
              <NavLink className="" to="/login">
                Login
              </NavLink>
              <NavLink className="" to="/signup">
                Register
              </NavLink>
            </div>
          )}
          <input type="checkbox" value={theme} checked={theme == 'light'} onChange={handleThemeChange} className="toggle theme-controller"/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
