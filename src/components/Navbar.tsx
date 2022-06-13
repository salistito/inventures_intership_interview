import React from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <NavbarContainer>
        <LeftContainer>
            <div className="burguer">
                <BurguerButton/>
            </div>
            <h2>Mi pastillero</h2>
        </LeftContainer>
        <RightContainer>
            <IconContainer><FaSearch /></IconContainer>
            <IconContainer><FaShoppingCart /></IconContainer>
        </RightContainer>
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    padding: .5rem;
    background-color: #0277BD;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    h2{
        top: calc(50% - 29px/2 + 1px);
        font-weight: 500;
        font-size: 19px;
        /* identical to box height */
        letter-spacing: 0.15px;
        color: #FFFFFF;
    }
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
`;

const IconContainer = styled.div`
    margin: 15px 10px 15px 20px;  
`;
