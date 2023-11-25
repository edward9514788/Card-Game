import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import PlayerComponent from "./PlayerComponent/PlayerComponent";
import characterData from "../characterData";
import { useState } from "react";

function BodyComponent() {

    const [isDisabled, setIsDisabledState] = useState(false)

    function onAttackClickHandler() {

        setIsDisabledState( prevDisabledState => !prevDisabledState)

    }

    return (
    
        <ul className="bodyComponent">

            <li className="listItem1"><PlayerComponent player= {characterData[0]} isDisabled= {isDisabled} attackHandler={onAttackClickHandler}></PlayerComponent> </li>
            <li className="listItem2"><PlayAreaComponent></PlayAreaComponent></li>
            <li className="listItem3"><PlayerComponent player= {characterData[1]} isDisabled= {!isDisabled} attackHandler={onAttackClickHandler}></PlayerComponent></li>

        </ul>

    );
  }
  
  export default BodyComponent;
  