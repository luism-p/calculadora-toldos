import React, {useState} from "react";

const View = (props) => {

    return(
    <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">aux</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>{props.aux}</td>
        </tr>
        </tbody>
    </table>
);
}
export default View;