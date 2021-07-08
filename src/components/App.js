import {useState, useEffect} from 'react';
import '../css/App.css';
import InputSize from './InputSize';
import Table from './Table';
import Save from './Save';
import firebase from "firebase/app";
import 'firebase/database';

import fireConfig from "../js/fireConfig";

function App() {
    const [datos, setDatos] = useState({
        total: 0,
        lona: 0,
        enrolle: 0,
        caracola: 0,
        vuelo: 0
    });
    const [config, setConfig] = useState({});
    const [history, setHistory] = useState([]);

    const initializeApp = () => {
        if (!firebase.apps.length) {
            try {
                firebase.initializeApp(fireConfig)
            } catch (err) {
                console.error('Firebase initialization error raised', err.stack)
            }
        }
    }

    const loadConfig = () => {
        const val = firebase.database().ref('config');
        val.once('value').then((snapshot) => {
            setConfig(snapshot.toJSON());
        });
    }

    const saveData = (cliente) => {
        const datosCopy = {...datos};
        let ok = datosCopy && !Object.values(datosCopy).some(x => x <= 0);
        if (ok && cliente) {
            datosCopy.cliente = cliente;
            const val = firebase.database().ref('history');
            val.push(datosCopy);
        }
    }

    const removeData = (id) => {
        if (id) {
            const val = firebase.database().ref('history').child(id);
            console.log(id)
            console.log(val.key);
            val.remove().then(() => loadData());
        }
    }

    const loadData = () => {
        const val = firebase.database().ref('history');
        val.once('value').then((snapshot) => {
            let arrayResult = [];
            let result = snapshot.toJSON();
            result && Object.keys(result).forEach(key => {
                let obj = result[key];
                obj['id'] = key;
                arrayResult.push(obj);
            });
            setHistory(arrayResult);
        });
    }


    useEffect(() => {
        initializeApp();
        loadConfig();
        loadData();

    }, []);


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
        let zero = {
            total: 0,
            lona: 0,
            enrolle: 0,
            caracola: 0,
            vuelo: 0
        }

        let result = {...config[toldo][name]};
        Object.keys(result).forEach((key) => {
            if (valueIn > 0) {
                result[key] = +result[key] + valueIn;
            } else {
                result = zero;
            }
        });
        return result;
    }

    return (

        <div className="App">

            <InputSize setDatos={setDatos} data={datos} runData={runData} config={config}/>

            <Table className="table" dynamic={false} total={datos.total} lona={datos.lona}
                   enrolle={datos.enrolle}
                   caracola={datos.caracola} vuelo={datos.vuelo}/>

            <Save saveData={saveData} loadData={loadData}/>
            <Table className="table" dynamic={true} data={history} removeData={removeData}/>

        </div>


    );
}

export default App;
