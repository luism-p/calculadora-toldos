import {useState} from 'react';
import '../css/App.css';
import InputSize from './InputSize';
import Table from './Table';


function App() {
    const [datos, setDatos] = useState({
        total: 0,
        lona: 0,
        enrolle: 0,
        caracola: 0,
        vuelo: 0
    });

    return (

        <div className="App">
            <section className="">
                <InputSize setDatos={setDatos} data={datos}/>
            </section>
            <section className="table">
                <Table total={datos.total} lona={datos.lona} enrolle={datos.enrolle}
                       caracola={datos.caracola} vuelo={datos.vuelo}/>
            </section>
        </div>


    );
}

export default App;
