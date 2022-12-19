import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom"

import styled from "styled-components"


function Session() {
    const { idSession } = useParams({})
    const [list_Sessions, setFilms_list] = useState([])

    useEffect(() => {
        const requestAPI = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idSession}/showtimes`)
        requestAPI.then(response => setFilms_list(response))
        requestAPI.catch(error => alert(error))

    }, [])

    if (list_Sessions == 0) {
        return (
            <div>Carregando...</div>
        )
    }

    return (
        <>
            <StyledSection>
                <h2>Selecione o horário</h2>
                <div className="sessions-class">
                    {list_Sessions.data.days.map(elem => {
                        return <StyleButtonsAndSession key={elem.id}>
                            <div>{elem.weekday} - {elem.date}</div>
                            <div className="buttons">{elem.showtimes.map(buto => {
                                return (
                                    <Link key={buto.id} to={"/seats/" + buto.id}>
                                        <button>
                                            {buto.name}
                                        </button>
                                    </Link>
                                )
                            })}</div>
                        </StyleButtonsAndSession>
                    })}
                </div>
            </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
    margin-top: 67px;
    width: 375px;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
        margin-top: 55px;
        margin-bottom: 55px;
        font-weight: 400;
        font-size: 24px;
    }

    .sessions-class{
        margin-left: 23px;
    }

`

const StyleButtonsAndSession = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
    color: #293845;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    button {
        background-color: #E8833A;
        width: 83px;
        height: 43px;
        border: none;
        cursor: pointer;
        margin-top: 23px;
        border-radius: 3px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        transition: all 0.2s;

        &:hover {
            width: 120px;
        }
    };

    .buttons{
        display: flex;
        gap: 8px;
    }

    
`

export default Session