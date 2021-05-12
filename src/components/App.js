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
    const data = {
        cofreGaviota: {
            total: {
                total: 0,
                lona: -17,
                enrolle: -15.5,
                caracola: -16.5,
                vuelo: -16.5
            },
            lona: {
                total: 17,
                lona: 0,
                enrolle: 1.5,
                caracola: 0.5,
                vuelo: 0.5
            }

        }

    }

    const runData =  (toldo, name, value) => {
        let result = data[toldo][name];
        Object.keys(result).forEach((val) =>result[val] = result[val]+value);
        return result;
    }
    console.log(datos);
    return (

        <div className="App">
            <section className="">
                <InputSize setDatos={setDatos} data={datos} runData={runData}/>
            </section>
            <section className="table">
                <Table total={datos.total} lona={datos.lona} enrolle={datos.enrolle}
                       caracola={datos.caracola} vuelo={datos.vuelo}/>
            </section>
        </div>


    );
}

export default App;
