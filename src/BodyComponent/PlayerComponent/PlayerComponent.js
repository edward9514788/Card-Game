function PlayerComponent(props) {
    return (
    
        <div className="">

            <h4> {props.player.name} Health {props.player.health}% </h4>

            <img src= {props.player.characterImage}></img> <br></br>

            <select name="Attack" id="Attack">
                <option value="Attack 1">{props.player.attacks[0].attackName}</option>
                <option value="Attack 2">{props.player.attacks[1].attackName}</option>
                <option value="Attack 3">{props.player.attacks[2].attackName}</option>
            </select>

            <select name="Defend" id="Defend">
                <option value="Defend 1">{props.player.defends[0].defendName}</option>
                <option value="Defend 2">{props.player.defends[1].defendName}</option>
                <option value="Defend 3">{props.player.defends[2].defendName}</option>
            </select>

            <br/> <br/>

            <button>Play</button>



        </div>

    );
  }
  
  export default PlayerComponent;