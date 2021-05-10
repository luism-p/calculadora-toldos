import React, {useState} from "react";
import './View.css';

const View = (props) => {

    return(
    <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Total</th>
            <th scope="col">Lona</th>
            <th scope="col">Enrolle</th>
            <th scope="col">Vuelo</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>{props.total}</td>
            <td>{props.lona}</td>
            <td>{props.enrolle}</td>
            <td>{props.vuelo}</td>
        </tr>
        </tbody>
    </table>
);
}
export default View;