import Inputdata from "./input/Inputdata";
import { Welcomemsg } from "./info/Welcomemsg";
import Listdata from "./data-list/Listdata";
import { useRef, useState } from "react";
import Processdata from "./input/Process";

const Main = function(props){

    // const listdataRef = useRef(null);
    // const scrollToList = listdataRef.current.scrollIntoView();

    const [dataModel, setDataModel] = useState([]);

    function saveData(data, name){
        console.log("added name: " + name);
        console.log("added data: " + data);
        setDataModel(
            dataModel.concat(
                {
                    id: dataModel.length += 1,
                    name: name,
                    url: data
                }
            )
        );

        // scrollToList();

    }
    
    return (
        <div>
            <Welcomemsg />
            <Inputdata saveData={saveData} />
            <Listdata imgData={dataModel} />
            <Processdata />
        </div>
    );
}

export default Main;