import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import PlayerComponent from "./PlayerComponent/PlayerComponent";
import characterData from "../characterData";
import { useState } from "react";

function BodyComponent() {

    const [isDisabled, setIsDisabledState] = useState(false)

    const [attackMessage, setAttackMessage] = useState("")
    const [defendMessage, setDefendMessage] = useState("")

    function onAttackClickHandler() {

        setIsDisabledState( prevDisabledState => !prevDisabledState)

        setAttackMessage("")
        setDefendMessage("")

        document.getElementsByClassName("Attack")[0].selectedIndex = 0
        document.getElementsByClassName("Defend")[0].selectedIndex = 0

        document.getElementsByClassName("Attack")[1].selectedIndex = 0
        document.getElementsByClassName("Defend")[1].selectedIndex = 0

    }

    function liftUpDataHandler(e) {
        
        (e.target.name === "Attack")? setAttackMessage(e.target.value + "") : setDefendMessage(e.target.value + "")
        
    }

    return (
    
        <div>

            <ul className="bodyComponent">

                <li className="listItem1"><PlayerComponent
                    player= {characterData[0]}
                    isDisabled= {isDisabled}
                    attackHandler={onAttackClickHandler}
                    liftHandler= {liftUpDataHandler}></PlayerComponent> </li>

                <li className="listItem2"><PlayAreaComponent attackMessage={attackMessage} defendMessage={defendMessage}></PlayAreaComponent></li>

                <li className="listItem3"><PlayerComponent
                player= {characterData[1]}
                isDisabled= {!isDisabled}
                attackHandler={onAttackClickHandler}
                liftHandler= {liftUpDataHandler}></PlayerComponent></li>

                
            </ul>
            

        </div>
        

    );
  }
  
  export default BodyComponent;
  