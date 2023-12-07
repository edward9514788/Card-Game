function ActionCard(props) {
    return (
      <div className="actionCardComponent"> 

        <h1>{props.actionMessage.actionName}</h1>
        <h3>{props.actionMessage.actionDescription}</h3>
        <img src={props.actionMessage.actionImage}></img>

        
        
        
      </div>
    );
  }
  
  export default ActionCard;
  