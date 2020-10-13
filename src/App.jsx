import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import MainMenu from './components/Organisms/MainMenu';
import JudProcesses from './components/Pages/JudProcesses';
import AddProcess from './components/Pages/AddProcess';
import Criminals from './components/Pages/Criminals';
import AddCriminal from './components/Pages/AddCriminal';

const App = () => (
    <Router>
        <MainMenu />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/proceso' exact component={JudProcesses} />
            <Route path='/proceso/nuevo' component={AddProcess} />
            <Route path='/criminal' exact component={Criminals} />
            <Route path='/criminal/nuevo' component={AddCriminal} />
        </Switch>
    </Router>
)
export default App;
