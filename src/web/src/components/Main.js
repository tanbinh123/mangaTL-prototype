import Inputdata from "./input/Inputdata";
import { Welcomemsg } from "./info/Welcomemsg";

const Main = function(props){
    
    return (
        <div>
            <Welcomemsg />
            <Inputdata />
        </div>
    );
}

export default Main;