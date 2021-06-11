import React, {useState} from "react";
import {Form} from 'react-bootstrap';
import '../css/InputSize.css';


const InputSize = function (props) {

    const [typeToldo, setTypeToldo] = useState("");
    const [isDisableSelect, setDisableSelect] = useState(false);
    const [nodes, setNodes] = useState({
        total: true,
        lona: true,
        enrolle: true,
        caracola: true,
        vuelo: true
    });

    const handleChangeSelect = (event) => {
        const value = event.target.value;
        setTypeToldo(value);
        value && setNodes({
            total: false,
            lona: false,
            enrolle: false,
            caracola: false,
            vuelo: false
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = + event.target.value.trim() || 0;

        let calculo = props.runData(typeToldo, name, value);

        props.setDatos({
            ...props.data,
            total: calculo.total,
            lona: calculo.lona,
            enrolle: calculo.enrolle,
            caracola: calculo.caracola,
            vuelo: calculo.vuelo
        });
        for (let nodesKey in nodes) {
            nodes[nodesKey] = nodesKey !== name && value;
        }

        setDisableSelect(value > 0);
    }

    return (
        <div className="form">
            <Form className="d-flex flex-column justify-content-around align-items-center" >

                        <Form.Group className="m-3 selectToldo">
                            <Form.Label>Tipo de toldo</Form.Label>
                            <Form.Control as="select" name="toldo"
                                          onChange={handleChangeSelect}
                                          disabled={isDisableSelect}
                            >
                                <option key="default" disabled selected>Elige un tipo de toldo</option>
                                {props && props.config && Object.keys(props.config).map(key => <option value={key} key={key}>{props.config[key]['name']}</option>)}
                            </Form.Control>
                        </Form.Group>

                <div className="d-flex">
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
                    </Form.Group></div>
            </Form>
        </div>
    );
}

export default InputSize;
