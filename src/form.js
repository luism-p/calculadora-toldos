import {useState} from "react";
import Button from "@material-ui/core/Button";


const Form = function (setDatos){
    const [data, setData] = useState({name: '', aux: ''});
    const [nodes, setNodes] = useState({name: false, aux: false});
    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
        for (let nodesKey in nodes) {
            nodes[nodesKey] = nodesKey !== event.target.name && event.target.value;
        }
        console.log(nodes);
    }
    const submit = (event) => {
        event.preventDefault();
        setDatos(data)

    }
    return(
        <div>
            <form>
                <label>
                    <input type="text" name="name" onChange={handleChange}
                           disabled={nodes.name}/>
                </label>
                <label>
                    <input type="text" name="aux" onChange={handleChange}
                           disabled={nodes.aux}/>
                </label>
            </form>
            <Button variant="contained" color="secondary" onClick={submit}>
                Change Name
            </Button>
        </div>
    );
}

export default Form;