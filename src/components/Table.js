import React, {useState} from "react";
import '../css/Table.css';

const Table = (props) => {

    return (
        <div className="d-flex justify-content-center p-5">
            <table className="table text-white">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Total</th>
                    <th scope="col">Lona</th>
                    <th scope="col">Enrolle</th>
                    <th scope="col">Caracola</th>
                    <th scope="col">Vuelo</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.total}</td>
                    <td>{props.lona}</td>
                    <td>{props.enrolle}</td>
                    <td>{props.caracola}</td>
                    <td>{props.vuelo}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;