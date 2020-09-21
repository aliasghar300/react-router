import React from "react";
import {NavLink} from "react-router-dom";



const Header = () => {
    return (
        <div>
            <ul>
                <li> <NavLink activeClassName="active" exact to="/"> Home </NavLink> </li>
                <li> <NavLink activeClassName="active" to="/about"> About </NavLink> </li>
                <li> <NavLink activeClassName="active" to="/contact"> Contact </NavLink> </li>
            </ul>
        </div>
    )

}
export default Header