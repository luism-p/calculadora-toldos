import {useState} from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import Form from './form';


function App() {
    const [datos, setDatos] = useState({
        name: 'Luis'
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hola {datos.name}
                </p>
                <Form setDatos/>

            </header>
        </div>
    );
}

export default App;
