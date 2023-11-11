function Player1Component() {
    return (
    
        <div className="">

            <h4> Player 1 Health 100% </h4>

            <img src="Goku.jpg"></img> <br></br>

            <select name="Attack" id="Attack">
                <option value="Attack 1">Attack 1</option>
                <option value="Attack 2">Attack 2</option>
                <option value="Attack 3">Attack 3</option>
            </select>

            <select name="Defend" id="Defend">
                <option value="Defend 1">Defend 1</option>
                <option value="Defend 2">Defend 2</option>
                <option value="Defend 3">Defend 3</option>
            </select>



        </div>

    );
  }
  
  export default Player1Component;