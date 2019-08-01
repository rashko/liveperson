import React from 'react';
import styled from 'styled-components';
import {observer} from "mobx-react"

const Button = styled.button`
  background: #F26D32;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F26D32;
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: #F26D32;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid  #A6A6A6;
  background: #fff;
  font-family: "Source Sans Pro", sans-serif;
  flex: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
  transition: 0.3s;
  &::placeholder {
    color: #A6A6A6;
  }
  &:hover {
    background: #F9F9F9;
    border-color: #808080;
  }
  &:focus {
    background: #FFFFFF;
    border-color: #F26D32;
    outline: none;
  }
`;

const Row = styled.div`
    display: flex;
    padding: 8px 0;
    position: relative;
    align-items: center;
`;

const Label = styled.label`
    width: 100px;
    text-align: right;
    margin-right: 13px;
    text-transform: capitalize;
`;


const Form = styled.form`
    padding: 10px;  
`;

const App = observer(props => {
    const {store} = props;
    const handelFormInput = (e) => {
        store.payment.updateFormInput(e.target.name, e.target.value)
    };
    return (
        <div className="App">
            <header>
                <Form>
                    <Row>
                        <Label>first name</Label>
                        <Input name={'firstName'} value={store.payment.firstName} onChange={handelFormInput}/>
                    </Row>
                    <Row>
                        <Label>last name</Label>
                        <Input name={'lastName'} value={store.payment.lastName}
                               onChange={handelFormInput}/>
                    </Row>
                    <Button onClick={store.payment.submitForm}>Send</Button>
                </Form>
            </header>
        </div>
    );


});

export default App;
