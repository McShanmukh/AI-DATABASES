import React from "react";

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";


const Search_Bar = () => {
return (
  <div className="col-lg-8">
            <Nav navbar justified>
             <NavItem> 
             <form method='POST' action='/search'>
	           <input type='text' placeholder='Search Here...' name='search'/>
	           <button>Submit</button>
	           </form>   
             </NavItem>
           </Nav>
            </div>
)
}

export default Search_Bar;