import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
   
    .counter{
        width: 1280px;
        height: 151px;
        margin: 0 auto;
        margin-top: 64px;
        display: flex;     
    }
    .totalScore{
        width: 135px;
        height: 151px;
        gap: 3px;
        
        .num{
            width: 92px;
            height: 112px;
            margin: 0 auto;
            font-family: Poppins;
            font-size: 100px;
            font-weight: 500;
            line-height: 150px;
            color: black;   
        }
        .head{
            width: 135px;
            height: 36px;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 500;
            line-height: 36px;
            margin-left: 6px;
            margin-top: 5px;
        }
    }
    .numbers{
        width: 552px;
        height: 138px;
        margin: 5px 5px;
        gap: 30px;
        margin-left: 590px;

        .error{
            width: 420px;
            height: 36px;
            margin-left: 230px;
            margin-bottom: 5px;
            color: red;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 400;
            line-height: 36px;
        }
        
        .boxes button{
            width: 72px;
            height: 72px;
            padding: 18px 0px ;
            border: solid 1px;
            border-color: black;
            margin-left: 20px;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            background-color: white;    
        }
        .boxes button.selected {
            background-color: black; 
             color: white; 
            }
        }
        
        .selectHeading{
            width: 182px;
            height: 36px;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 700;
            line-height: 36px;
            color: black;
            margin-top: 40px;
            margin-left: 400px;
        } 
        .display{
        width: 250px;
        height: 449px;
        margin: 0 auto;
        margin-top: 30px;   
        }
    .dice_div{
        width: 250px;
        height: 301px;
        gap: 15px;

        .dice_img{
            width: 250px;
            height: 250px;
            gap: 15px;
            cursor: pointer;      
            }
        .dice_head{
            width: 229px;
            height: 36px;
            font-family: Poppins;
            font-size: 24px;
            font-weight: 500;
            line-height: 36px;
            color: black;
            text-align: center;
            white-space: nowrap;
         }
    }
    .reset_div{
        width: 220px;
        height: 112px;
        gap: 24px;
        margin: 0 auto;
        margin-top: 35px;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        .reset{ 
            cursor: pointer;
            background-color: white;
            border: 1px solid;          
        }
        .show{
            color: white;
            background-color: black;
            cursor: pointer;
        }
    }
    .reset_div button{
        width:220px;
        height: 44px;
        padding: 10px 18px ;
        border-radius: 5px ;
        border: 1px ;
        margin-bottom: 24px;   
    }  
`;

const PlayGame = () => {

    const num_arry = [1, 2, 3, 4, 5, 6];
    const [selectNumber, setSelectNumber] = useState();
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, seterror] = useState("");
    
    const generateRandomNumber = () => { return Math.floor((Math.random() * 6) + 1) }

    const rollDice = () => {
        if(!selectNumber){
            seterror("You have not selected any number.")
            return 
        }
        seterror("")
        const randomnumber = generateRandomNumber();
        setCurrentDice(randomnumber);

        if (selectNumber === randomnumber) {
            if (score >= 0)
                setScore(score + selectNumber)
        }
        else {
            if (score > 0 )
                setScore(prev => prev - 1)
        }
        setSelectNumber(undefined)
    }
        

    return (
        <Container>
            <div className='counter'>
                <div className='totalScore'>
                    <div className='num'>{score}</div>
                    <div className='head'>Total Score</div>
                </div>
                <div className='numbers'>
                    <div className='error'> {error}</div>
                    <div className='boxes'>
                        {num_arry.map((val, i) =>
                            <button className={val === selectNumber ? 'selected' : ''} key={i} onClick={() => setSelectNumber(val)}>
                                {val}
                            </button>)
                        }
                    </div>
                    <div className='selectHeading'>Select Number</div>
                </div>
            </div>
            <div className='display'>
                <div className='dice_div'>
                    <div className='dice_img' onClick={rollDice} >
                        <img src={`/images/dice${currentDice}.png`} />
                    </div>
                    <div className='dice_head'>Click on Dice to roll</div>
                </div>
                <div className='reset_div'>
                    <button className='reset' onClick={()=>setScore(0)}> Reset Score</button>
                    <button className='show' >Show Rules</button>
                </div>
            </div>
        </Container>
    )
}

export default PlayGame
