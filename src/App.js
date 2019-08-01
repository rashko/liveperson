import React from 'react';
import styled from 'styled-components';
import {observer} from "mobx-react"
import {validate} from './payment';
import Header from './components/header';
import Title from './components/title';
import Form from './components/form';



const App = observer(props => {
    
    return (
        <div className="App">
            <Header />
            <Title />
            <Form store={props.store}/>
        </div>
    );


});

export default App;
