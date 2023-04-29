import React from 'react';
import Header from "./components/pages/Header/Header";
import style from './App.module.scss'
import {MDBContainer} from "mdb-react-ui-kit";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <MDBContainer fluid>
            <Header/>
            <div className={style['wrapper']}>
                <Outlet></Outlet>
            </div>
        </MDBContainer>

    );
}

export default App;

