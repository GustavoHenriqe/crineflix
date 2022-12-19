import styled from "styled-components"

import axios from "axios"

import { useParams } from "react-router-dom"

function Seats() {
    const { idSeats } = useParams()


    return (
        <>
            <StyledSection>
                <h1>Selecioneo o(s) assento(s)</h1>
            </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
    padding-top: 25px;
    width: 375px;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }
`

export default Seats