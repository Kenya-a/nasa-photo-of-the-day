import React from "react";

import styled from "styled-components";

function Header(){
    return (
        <div className = "header">
            <h1>NASA</h1>
            <Image src ="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt = "space"></Image>
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