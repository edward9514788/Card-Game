function ActionCard(props) {
    return (
      <div className="actionCardComponent"> 
        
        <img src="GalickGun.jpg"></img>

        <h3>{props.actionMessage}</h3>
        
        
      </div>
    );
  }
  
  export default ActionCard;
  