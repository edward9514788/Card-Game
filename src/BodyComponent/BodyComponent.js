import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import PlayerComponent from "./PlayerComponent/PlayerComponent";
import characterData from "../characterData";
import { useState } from "react";

function BodyComponent() {

    const player1Data = characterData[0]
    const player2Data = characterData[1]
    
    let playerData

    const [isDisabled, setIsDisabledState] = useState(false)

    const [attackMessage, setAttackMessage] = useState({})

    const [defendMessage, setDefendMessage] = useState({})

    function onAttackClickHandler() {

        setIsDisabledState( prevDisabledState => !prevDisabledState)

        setAttackMessage({})
        setDefendMessage({})

        document.getElementsByClassName("Attack")[0].selectedIndex = 0
        document.getElementsByClassName("Defend")[0].selectedIndex = 0

        document.getElementsByClassName("Attack")[1].selectedIndex = 0
        document.getElementsByClassName("Defend")[1].selectedIndex = 0

    }

    function liftUpDataHandler(e) {
        
        if(!isDisabled){
            playerData = player1Data
        }
        else{
            playerData = player2Data
        }

        (e.target.name === "Attack")? setAttackMessage(playerData.attacks[+e.target.value]) : setDefendMessage(playerData.defends[+e.target.value])

        
    }

    return (
    

            <div className="bodyComponent">

                <PlayerComponent
                    player= {player1Data}
                    isDisabled= {isDisabled}
                    attackHandler={onAttackClickHandler}
                    liftHandler= {liftUpDataHandler}></PlayerComponent>

                <PlayAreaComponent attackMessage={attackMessage} defendMessage={defendMessage}></PlayAreaComponent>

                <PlayerComponent
                player= {player2Data}
                isDisabled= {!isDisabled}
                attackHandler={onAttackClickHandler}
                liftHandler= {liftUpDataHandler}></PlayerComponent>

                
            </div>
            

        

    );
  }
  
  export default BodyComponent;
  