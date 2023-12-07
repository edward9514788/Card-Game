import ActionCard from "./ActionCardComponent/ActionCard";

function PlayAreaComponent(props) {
    return (
    
        <div className="playAreaComponent">

            <ActionCard actionMessage= {props.attackMessage}></ActionCard>

            <ActionCard actionMessage= {props.defendMessage}></ActionCard>

    </div>

    );
  }
  
  export default PlayAreaComponent;