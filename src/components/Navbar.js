import React from 'react'
import { useState } from 'react';
import { 
        NavbarContainer,
        LeftContainer,
        RightContainer,
        NavbarInnerContainer,
        NavbarLinkContainer,
        NavbarExtendedContainer,
        NavbarLink,
        OpenLinksBtn,
        NavbarLinkExtended,
} from '../styles/Navbar.style';



function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/products">Products</NavbarLink>
                    <NavbarLink to="/contact">Contact Us</NavbarLink>
                    <NavbarLink to="/about">About Us</NavbarLink>
                    <OpenLinksBtn onClick={() => {
                          setExtendNavbar((current) => !current);
                        }}
                    >
                        {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksBtn>
                </NavbarLinkContainer>
            </LeftContainer> 
            <RightContainer></RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
        <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about">About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
        )}
    </NavbarContainer> 
  )
}

export default Navbar;