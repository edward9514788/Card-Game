import PlayAreaComponent from "./PlayAreaComponent/PlayAreaComponent";
import Player1Component from "./Player1Component/Player1Component";
import Player2Component from "./Player2Component/Player2Component";

function BodyComponent() {
    return (
    
        <ul className="bodyComponent">

            <li className="listItem1"><Player1Component></Player1Component> </li>
            <li className="listItem2"><PlayAreaComponent></PlayAreaComponent></li>
            <li className="listItem3"><Player2Component></Player2Component></li>

        </ul>

    );
  }
  
  export default BodyComponent;
  