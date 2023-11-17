import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import PlayerComponent from "./PlayerComponent/PlayerComponent";

function BodyComponent() {
    return (
    
        <ul className="bodyComponent">

            <li className="listItem1"><PlayerComponent></PlayerComponent> </li>
            <li className="listItem2"><PlayAreaComponent></PlayAreaComponent></li>
            <li className="listItem3"><PlayerComponent></PlayerComponent></li>

        </ul>

    );
  }
  
  export default BodyComponent;
  