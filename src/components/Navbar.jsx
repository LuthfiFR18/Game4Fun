import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../style/Navbar.css';
import image from "../assets/Game4Fun.png";
import search from "../assets/search_icon.png";
import DropdownGames from "./DropdownGames";

const Header = () => {
    const navigate = useNavigate();
    const [openDbBtn, setOpenDbBtn] = useState(false);

    return (
        <div className="navbar">
            <img src={image} alt="logoapp" />
            
            <nav>
                <ul className="navbar-menu">
                    <li><a href="#" id="homeNav" onClick={()=> navigate('/')}>Home</a></li>
                    <li><a href="#" id="news"  onClick={()=> navigate('/wikinews')}>Wiki News</a></li>
                    <li><a href="#" id="games" onClick={() => setOpenDbBtn((prev) => !prev)}>Games</a></li>
                    <li><a href="#" id="contactNav">Contact</a></li>
                </ul>
            </nav>

            
            {openDbBtn && <DropdownGames/>}

            <div className="navbar-right">
                <img src={search} className="logo" alt="search-icon" />
                <div className="dot"></div>
                
                <button className="btn" onClick={()=> navigate('/login')}>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
