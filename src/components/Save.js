import React, {useState} from "react";
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import '../css/Button.css';


export default (props) => {

    const [cliente, setCliente] = useState("");

    const handleClick = (event) => {
        const element = document.getElementById('cliente');

        if (cliente) {
            props.saveData(cliente);
            element.classList.contains('is-invalid') && element.classList.remove('is-invalid');
        } else {
            !element.classList.contains('is-invalid') && element.classList.add('is-invalid');
        }
        props.loadData();
    }

    const handleChange = (event) => {
        const value = event.target.value.trim() || "";
        setCliente(value);
    }


    return <div className="d-flex flex-column justify-content align-items-center m-3">
        <Form.Group className="m-3 cliente">
            <Form.Label>Cliente</Form.Label>
            <Form.Control
                id="cliente"
                name="cliente"
                type="text"
                placeholder="Cliente"
                onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
                Por favor introduce un nombre.
            </Form.Control.Feedback>
        </Form.Group>
        <Button className="btnSave" variant="danger" onClick={handleClick}>Guardar medidas</Button>
    </div>
}