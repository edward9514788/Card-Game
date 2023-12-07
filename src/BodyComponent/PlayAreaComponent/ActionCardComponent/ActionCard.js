function ActionCard(props) {
    return (
      <div className="actionCardComponent"> 

        <h1>{props.actionMessage.actionName}</h1>
        <h3>{props.actionMessage.actionDescription}</h3>
        <img style= {{width: "200px", height: "200px"}} src={props.actionMessage.actionImage}></img>

        
        
        
      </div>
    );
  }
  
  export default ActionCard;
  