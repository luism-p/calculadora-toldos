import {Button} from 'react-bootstrap';
import '../css/Button.css';


export default (props) =>{

    const handleClick = (event) => {
        alert("Aún no tiene funcionalidad");
    }


    return <div className="d-flex flex-column justify-content-around align-items-center m-3">
        <Button className="btnSave" variant="danger" onClick={handleClick}>Guardar medidas</Button>
    </div>
}