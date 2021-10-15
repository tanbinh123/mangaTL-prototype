
import "./Inputdata.css";

const Inputdata = function(props){

    function handleInput(event){
        console.log("data: " + event.target.value);
    }

    return (
        <div className="input-main">
            <input type="text" placeholder="Input url image here.." onChange={handleInput}></input>
            {/* <input type="file"/> */}
            <button onClick={props.saveData}>Add</button>
        </div>
    );
}

export default Inputdata;