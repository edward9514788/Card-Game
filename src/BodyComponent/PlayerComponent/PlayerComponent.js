function PlayerComponent(props) {
    return (
    
        <div className="playerComponent">

            <h4> {props.player.name} Health {props.player.health}% </h4>

            <img src= {props.player.characterImage}></img> <br></br>

            <select disabled= {props.isDisabled} className="Attack" name="Attack" id="Attack" onChange= {props.liftHandler}>
                <option value= ""> Select an Attack </option>
                <option value= "0">{props.player.attacks[0].actionName}</option>
                <option value= "1">{props.player.attacks[1].actionName}</option>
                <option value= "2">{props.player.attacks[2].actionName}</option>
            </select>

            <select disabled= {props.isDisabled} className="Defend" name="Defend" id="Defend" onChange= {props.liftHandler}>
                <option value= ""> Select a Defense </option>
                <option value= "0">{props.player.defends[0].actionName}</option>
                <option value= "1">{props.player.defends[1].actionName}</option>
                <option value= "2">{props.player.defends[2].actionName}</option>
            </select>

            <br/> <br/>

            <button onClick= {props.attackHandler} disabled= {props.isDisabled}>Play</button>



        </div>

    );
  }
  
  export default PlayerComponent;