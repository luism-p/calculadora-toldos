import {useState} from 'react';
import './App.css';
import Cal from './Cal';
import View from './View';


function App() {
    const [datos, setDatos] = useState({
        total: '',
        lona: '',
        enrolle:'',
        vuelo: ''
    });

    return (
        <div className="App">
            <section className="">
                <Cal setDatos={setDatos} data={datos}/>
            </section>
            <section className="table">
                <View total={datos.total} lona={datos.lona} enrolle={datos.enrolle} vuelo={datos.vuelo}/>
            </section>
        </div>

    );
}

export default App;
