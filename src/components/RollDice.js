import React ,{useState}from 'react'
import styled from 'styled-components'

const Container = styled.div` 

.counter{
        width: 1280px;
        height: 151px;
        margin: 0 auto;
        margin-top: 64px;
        display: flex;     
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


const RollDice = () => {
    const [currentDice,setCurrentDice] = useState(1);
    const generateRandomNumber=()=>{ return Math.floor((Math.random() * 6) + 1); }
      
  return (
     <Container>
      <div className='display'>
                <div className='dice_div'>
                    <div className='dice_img' onClick={(pre)=>setCurrentDice(generateRandomNumber())} >
                        <img  src={`/images/dice${currentDice}.png`}/>
                    </div>
                    <div className='dice_head'>Click on Dice to roll</div>
                </div>
                <div className='reset_div'>
                    <button className='reset' > Reset Score</button>
                    <button className='show' >Show Rules</button>
                </div>
            </div>
    </Container> 
  )
}

export default RollDice
