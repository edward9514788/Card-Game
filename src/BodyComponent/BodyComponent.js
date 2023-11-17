import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import PlayerComponent from "./PlayerComponent/PlayerComponent";
import characterData from "../characterData";

function BodyComponent() {

    //let characterData

    return (
    
        <ul className="bodyComponent">

            <li className="listItem1"><PlayerComponent player= {characterData[0]}></PlayerComponent> </li>
            <li className="listItem2"><PlayAreaComponent></PlayAreaComponent></li>
            <li className="listItem3"><PlayerComponent player= {characterData[1]}></PlayerComponent></li>

        </ul>

    );
  }
  
  export default BodyComponent;
  