import ActionCard from "./ActionCardComponent/ActionCard";

function PlayAreaComponent(props) {
    return (
    
        <div className="">

            {/*<h1> {props.attackMessage} </h1>

            <h1> {props.defendMessage} </h1>*/}

            <ActionCard actionMessage= {props.attackMessage}></ActionCard>

            <ActionCard actionMessage= {props.defendMessage}></ActionCard>

    </div>

    );
  }
  
  export default PlayAreaComponent;