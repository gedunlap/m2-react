import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 5;

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
            <Link to="/about" className="navitem"><li>About</li></Link>
            <Link to="/gallery" className="navitem"><li>Gallery</li></Link>
            <Link to="/location" className="navitem"><li>Location</li></Link>
            <Link to="/contact" className="navitem"><li>Contact</li></Link>
        </Ul>
    )
}

export default NavRight