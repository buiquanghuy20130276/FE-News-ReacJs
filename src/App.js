import React from 'react';
import {MDBBtn, MDBContainer} from 'mdb-react-ui-kit';
import Header from "./components/pages/Header/Header";
import SideBar from "./components/pages/SideBar/SideBar";
import Content from "./components/pages/Content/Content";
import style from './App.module.css'

function App() {
    return (
        <MDBContainer fluid>
            <Header/>
            <div className={style['wrapper']}>
                <SideBar/>
                <Content/>
            </div>
        </MDBContainer>
    );
}

export default App;
