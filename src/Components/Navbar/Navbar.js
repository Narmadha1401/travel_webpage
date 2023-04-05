import React from "react";
import './navbar.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import DensityMediumTwoToneIcon from '@mui/icons-material/DensityMediumTwoTone';
const Navbar = ()=>
{
    return(
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><TravelExploreIcon className="icon"/>   Travel.</h1>
                    </a>
                </div>

                <div className="navBar">
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contacts</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div  className="closeNavbar">
                        <ClearTwoToneIcon className="icon"/>
                    </div>
                </div>
                <div  className="toggleNavbar">
                    <DensityMediumTwoToneIcon className="icon"/>
                    
                </div>
            </header>
        </section>
    )
}
export default Navbar;