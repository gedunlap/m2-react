import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 850px) {
        flex-flow: column nowrap;
        background-color: black;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: white;
        }
    }
`

function NavRight({open}, props) {
    return (
        <Ul open={open}>
            <li>About</li>
            <li>Gallery</li>
            <li>Location</li>
            <li>Contact</li>
        </Ul>
    )
}

export default NavRight