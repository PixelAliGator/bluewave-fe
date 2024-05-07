import React, { useState, useEffect, useRef } from "react";
import {
  RenderState,
  updateRenderState,
} from "../../observables/appObservables";
import { logout } from "../lib/authApi";

interface NavbarInterface {
  isAuth: Boolean;
}

const Navbar = ({ isAuth }: NavbarInterface) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownMenuRef = useRef(null);

  useEffect(() => {
    const adjustDropdownPosition = () => {
      if (dropdownMenuRef.current) {
        const dropdownMenu = dropdownMenuRef.current; //@ts-ignore
        const dropdownRect = dropdownMenu.getBoundingClientRect();
        const overflowRight = dropdownRect.right - window.innerWidth;
        if (overflowRight > 0) {
          // @ts-ignore
          dropdownMenu.style.right = `${overflowRight + 10}px`; // Adjust to prevent overflow
        } else {
          // @ts-ignore
          dropdownMenu.style.right = "0px"; // Reset if within bounds
        }
      }
    };

    if (dropdownOpen) {
      adjustDropdownPosition();
    }
  }, [dropdownOpen]); // Dependency array includes dropdownOpen to trigger effect on open/close
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
            
      <div className="navbar-brand">
                
        <a
          className="navbar-item logo"
          onClick={() => updateRenderState(RenderState.HOME)}
        >
                    BlueWave         
        </a>
                
        <a
          className="navbar-item"
          onClick={() => updateRenderState(RenderState.DASHBOARD)}
        >
          Dashboard
        </a>
                
        <a
          className="navbar-item"
          onClick={() => updateRenderState(RenderState.EXPLORE)}
        >
          Explore
        </a>
                
        <a
          className="navbar-item"
          onClick={() => updateRenderState(RenderState.ACTIVITIES)}
        >
          Add Activity
        </a>
                
        <a
          className="navbar-item"
          onClick={() => updateRenderState(RenderState.GOALS)}
        >
          Add Goal
        </a>
              
      </div>
            
      {isAuth ? (
        <div className="navbar-right">
                    
          <div className="navbar-item" onClick={toggleDropdown}>
                        
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="profile-pic"
            />
                        
            {dropdownOpen && (
              <div className="dropdown-menu" ref={dropdownMenuRef}>
                                
                <a
                  className="dropdown-item"
                  onClick={() => updateRenderState(RenderState.USER_DASHBOARD)}
                >
                  Profile
                </a>
                                
                <a className="dropdown-item" onClick={() => logout()}>
                  Log Out
                </a>
                              
              </div>
            )}
                      
          </div>
                  
        </div>
      ) : (
        <div className="navbar-right">
                    
          <a
            className="navbar-item"
            onClick={() => updateRenderState(RenderState.LOGIN)}
          >
            Login
          </a>
                    
          <a
            className="navbar-item"
            onClick={() => updateRenderState(RenderState.REGISTER)}
          >
            Register
          </a>
                  
        </div>
      )}
          
    </nav>
  );
};

export default Navbar;
