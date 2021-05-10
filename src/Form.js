import React, {useState} from "react";
import Button from "@material-ui/core/Button";


const Form = function (props){
    const [nodes, setNodes] = useState({name: false, aux: false});

    const handleChange = (event) => {
        props.setDatos({...props.data, [event.target.name]: event.target.value});
        for (let nodesKey in nodes) {
            nodes[nodesKey] = nodesKey !== event.target.name && event.target.value;
        }
    }
    return(
        <div>
            <form>
                <input type="text" name="name" onChange={handleChange}
                       disabled={nodes.name}/>
                <input type="text" name="aux" onChange={handleChange}
                       disabled={nodes.aux}/>
            </form>
        </div>
    );
}

export default Form;
