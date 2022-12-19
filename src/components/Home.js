import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

function Home(props) {
    const [films_list, setFilms_list] = useState([])

    useEffect(() => {
        const request_api_films = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        request_api_films.then(
            request => {
                setFilms_list(request.data)
            }
        )
        request_api_films.catch(
            err => console.log(err.message)
        )
    }, [])

    return (
        <>
            <StyledSection>
                <h2>Selecione o filme</h2>
                <div className="films-home">
                    {films_list.map(e => {
                        return (
                            <StyleButton onClick={props.sessionButton} key={e.id}>
                                <Link to={"/session/" + e.id}>
                                    <img id={e.id} src={e.posterURL}></img>
                                </Link>
                            </StyleButton>
                        )
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
    align-items: center;
    font-weight: 400;
    font-size: 24px;

    h2 {
        margin-top: 55px;
        margin-bottom: 55px;
    }

    .films-home{
        margin-left: 33px;
        margin-right: 33px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 11px;
        gap: 15px;
    }
`

const StyleButton = styled.button`
    width: 145px;
    height: 209px;
    cursor: pointer;
    border: none;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.6s;
    border-radius: 3px;

    &:hover {
        background-color: #E8833A;
        width: 147px;
        box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.1);
    }

    img{
        width: 129px;
        height: 193px;
    }
`

export default Home