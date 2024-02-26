// import { NavLink } from "react-router-dom";
import { useState } from "react";
import './style.css'

const Navbar = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive)
    };


    const closeMobileMenu = () => {
        setMobileMenuActive(false)
    }

    const menuItems = [
        {mid: 1, label: 'Home', link: '#home'},
        {mid: 2, label: 'Services', link: '#services'},
        {mid: 3, label: 'About', link: '#about'},
        {mid: 4, label: 'Contact', link: '#contact'},
    ]

    return (
        <div className={` ${mobileMenuActive ? 'psc-mobile-nav-open' : ''}`}>
            <nav>
                <ul>
                    {
                        menuItems.map((menuList) => (
                                <li key={menuList.mid}><a onClick={closeMobileMenu} href={menuList.link}>{menuList.label}</a></li>
                            )
                        )
                    }
                </ul>
            </nav>

            <div onClick={toggleMobileMenu} className="psc-menu-toggle">
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;