
import { useState } from "react";
import Listdata from "../data-list/Listdata";
import "./Inputdata.css";

const langTo = ["<To>", "Afrikaans", "Arabic", "Belarusian", "Bulgarian",
"Bengali", "Catalan", "Czech", "Welsh",
"Danish", "German", "Greek", "English",
"Esperanto", "Spanish", "Estonian", "Persian",
"Finnish", "French", "Irish", "Galician",
"Gujarati", "Hebrew", "Hindi", "Croatian",
"Haitian", "Hungarian", "Indonesian", "Icelandic",
"Italian", "Georgian", "Kannada",
"Korean", "Lithuanian", "Latvian", "Macedonian",
"Marathi", "Malay", "Maltese", "Dutch",
"Norwegian", "Polish", "Portuguese", "Romanian",
"Russian", "Slovak", "Slovenian", "Albanian",
"Swedish", "Swahili", "Tamil", "Telugu",
"Thai", "Tagalog", "Turkish", "Ukrainian",
"Urdu", "Vietnamese", "Chinese"];

const langFrom = ["<From>", "English", "Japanese (Manga)", "Korean (Manhwa)", "Chinese (Manhua)", "Chinese (Simplified Vertical) (Beta)", "Chinese (Traditional Vertical) (Beta)", "Indonesian"];

const Inputdata = function(props){

    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [stateLangFrom, setLangFrom] = useState("");
    const [stateLangTo, setLangTo] = useState("");

    function handleInputUrl(event){
        setData(event.target.value);
    }

    function handleInputName(event){
        setName(event.target.value);
    }

    function handleClick(event){

        let sData = data;
        let sName = name;
        let sLangFrom = stateLangFrom;
        let sLangTo = stateLangTo;

        props.saveData(sData, sName, sLangFrom, sLangTo);
    }

    function listenSelectTo(event){
        let val = event.target.value;
        console.log(val);
        setLangTo(val);
    }

    function listenSelectFrom(event){
        let val = event.target.value;
        console.log(val);
        setLangFrom(val);
    }

    return (
        <div className="input-main">
            <input type="text" placeholder="Image name/File name.." onChange={handleInputName}></input><br />
            <input type="text" placeholder="Input url image here.." onChange={handleInputUrl}></input><br />

            <div className="input-selectlang">
                <select value={stateLangFrom} onChange={listenSelectFrom}>
                    {
                        langFrom.map(data => {
                            return <option value={data}>{data}</option>
                        })
                    }
                </select>

                <select value={stateLangTo} onChange={listenSelectTo}>
                    {
                        langTo.map(data => {
                            return <option value={data}>{data}</option>
                        })
                    }
                </select>
            </div>
            
            <button onClick={handleClick}>Add</button>

        </div>
    );
}

export default Inputdata;