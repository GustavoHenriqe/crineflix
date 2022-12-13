import React from "react"
import styled from "styled-components"

function Header() {
    return (
        <HeaderStyled>
            <header>
                <h1>CINEFLEX</h1>
            </header>
        </HeaderStyled>
    )

}

const HeaderStyled = styled.header`
    background-color: #C3CFD9;
    height: 67px;
    color: #E8833A;
    width: 375px;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
`

export default Header