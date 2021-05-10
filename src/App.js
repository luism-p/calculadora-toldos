import {useState} from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import View from './View';


function App() {
    const [datos, setDatos] = useState({
        name: 'Luis',
        aux: ''
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Form setDatos={setDatos} data={datos}/>
                <View name={datos.name} aux={datos.aux} />
            </header>
        </div>
    );
}

export default App;
