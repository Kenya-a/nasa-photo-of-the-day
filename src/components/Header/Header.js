import React from "react";

import styled from "styled-components";

function Header(){
    return (
        <div className = "header">
            <h1>NASA</h1>
            {/* <Image src ="https://images.unsplasrc/components/Images/spacebar.png" alt = "space"></Image> */}
            <nav>
                <li>Home</li>
                <li>About</li>
                <li>Cool Stuff</li>
                
            </nav>
        </div>
    )
}
export default Header;


//Styled Components

const Image = styled.img`
    width: 175px;
`