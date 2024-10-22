import React from 'react'

import styled from 'styled-components'


const Container = styled.div`
max-width: 1182px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;

.content button{
    margin-left: 300px;
    width: 220px;
    height: 44px;
    color: white;
    background-color: black;
    padding: 10px 18px 10px 18px;
    gap: 10px;
    border-radius: 5px ;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
}

.content  h1{
    font-weight: 700;
    font-size: 96px;
    line-height: 144px; 
    white-space: nowrap;
}

`;

const StartGame = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src='/images/dices .png' />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
        </Container>
    )
}

export default StartGame


