import "./Listdata.css";

const Listdata = function(props){

    return (
        <div className="list-img">
            <ul>
                {
                    props.imgData.map(data => {
                        return <li key={data.id}>
                            <img src={data.url} alt={"img-" + data.id}></img>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Listdata;