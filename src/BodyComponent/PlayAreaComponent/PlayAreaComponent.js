function PlayAreaComponent(props) {
    return (
    
        <div className="">

            <h1> {props.attackMessage} </h1>

            <h1> {props.defendMessage} </h1>

        </div>

    );
  }
  
  export default PlayAreaComponent;