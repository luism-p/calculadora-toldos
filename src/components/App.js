import {useState} from 'react';
import '../css/App.css';
import InputSize from './InputSize';
import Table from './Table';
import Button from './Button';


function App() {
    const [datos, setDatos] = useState({
        total: 0,
        lona: 0,
        enrolle: 0,
        caracola: 0,
        vuelo: 0,
        toldos: ["cofreGaviota", "cofreBat"]
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
        },
        cofreBat: {
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

    const runData = (toldo, name, valueIn) => {
        console.log("runData");
        console.log(toldo);
        console.log(name);
        console.log(valueIn);
        let result = data[toldo][name];
        Object.keys(result).forEach((key) => result[key] = valueIn > 0 ? result[key] + valueIn : 0);
        return result;
    }
    console.log(datos);
    return (

        <div className="App">

            <InputSize setDatos={setDatos} data={datos} runData={runData}/>

            <Table className="table" total={datos.total} lona={datos.lona} enrolle={datos.enrolle}
                   caracola={datos.caracola} vuelo={datos.vuelo}/>

            <Button/>

        </div>


    );
}

export default App;
