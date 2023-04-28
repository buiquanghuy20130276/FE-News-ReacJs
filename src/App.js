import React from 'react';
import Header from "./components/pages/Header/Header";
import style from './App.module.scss'
import TinTuc from "./components/pages/NewsCategory/TinTuc/TinTuc";
import {MDBContainer} from "mdb-react-ui-kit";

function App() {

    return (
        <MDBContainer fluid>
            <Header/>
            <div className={style['wrapper']}>
                <TinTuc/>
            </div>
        </MDBContainer>

    );
}

export default App;

