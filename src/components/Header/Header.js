import React from "react";

import styled from "styled-components";

function Header(){
    return (
        <HeaderLogo className = "header">
            <h1> <Image src ="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt = "space"></Image></h1>
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Cool Stuff</li>
                
            </nav>
        </HeaderLogo>
    )
}
export default Header;


//Styled Components

const Image = styled.img`
    width: 250px;

`;

const HeaderLogo = styled.div`
    background-image: url(https://wallpaperaccess.com/full/741658.jpg)
`