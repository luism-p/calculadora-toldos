import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import '../css/InputSize.css';


const InputSize = function (props) {
    const [nodes, setNodes] = useState({total: false, lona: false, enrolle: false, caracola: false, vuelo: false});

    const handleChange = (event) => {
        props.setDatos({...props.data, [event.target.name]: event.target.value.trim() || 0});
        for (let nodesKey in nodes) {
            nodes[nodesKey] = nodesKey !== event.target.name && event.target.value.trim();
        }
    }
    return (
        <div className="form">
            <Form className="d-flex">
                        <Form.Group className="m-3">
                            <Form.Label>Total</Form.Label>
                            <Form.Control
                                name="total"
                                type="number"
                                placeholder="Total"
                                onChange={handleChange}
                                disabled={nodes.total}
                            />
                        </Form.Group>
                        <Form.Group className="m-3">
                            <Form.Label>Lona</Form.Label>
                            <Form.Control
                                name="lona"
                                type="number"
                                placeholder="Lona"
                                onChange={handleChange}
                                disabled={nodes.lona}
                            />
                        </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Enrolle</Form.Label>
                    <Form.Control
                        name="enrolle"
                        type="number"
                        placeholder="Enrolle"
                        onChange={handleChange}
                        disabled={nodes.enrolle}
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Caracola</Form.Label>
                    <Form.Control
                        name="caracola"
                        type="number"
                        placeholder="Caracola"
                        onChange={handleChange}
                        disabled={nodes.caracola}
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Vuelo</Form.Label>
                    <Form.Control
                        name="vuelo"
                        type="number"
                        placeholder="Vuelo"
                        onChange={handleChange}
                        disabled={nodes.vuelo}
                    />
                </Form.Group>
            </Form>
        </div>
    );
}

export default InputSize;
