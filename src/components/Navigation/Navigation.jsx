import React from 'react';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';

import logo from './assets/logo.png';
import styles from './Navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    const navStyle = {
        color: "white"
      };
      const navLinks = ["Home","Tv Show","Movies","New & Popular","My List"];
      const navLinksImplementation = navLinks.map((item)=>
            <Link style={navStyle} to={item}>
                <li href={item}>{item}</li>
            </Link>
                );
    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    {navLinksImplementation}
                    

                    {/* {navStyle.map(item => (
                        <li className={styles.navigationItem} key={item}>
                            <a href="/">{item}</a>
                        </li>

                        // <>
                        //     <Link style={navStyle} to="/home">
                        //         <li className="topListItem"> HOME</li>
                        //     </Link>

                        //     <Link style={navStyle} to="/tv shows">
                        //         <li className="topListItem"> TV Shows</li>
                        //     </Link>

                        //     <Link to="/movies" style={navStyle}>
                        //         <li className="topListItem"> Movies</li>
                        //     </Link>

                        //     <Link to="/newandpopular" style={navStyle}>
                        //         <li className="topListItem" >New & Popular</li>
                        //     </Link>

                        //     <Link to="/my list" style={navStyle}>
                        //         <li className="topListItem" >My List</li>
                        //     </Link>
                            
                        // </>
                        
                    ))} */}
                </ul>
            </div>
            <SecondaryNavigation />
        </div>
    );
};

export default Navigation;