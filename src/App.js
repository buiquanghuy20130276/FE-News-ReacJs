import React, {useState} from 'react';
import Header from "./components/pages/Header/Header";
import style from './App.module.scss';
import {MDBContainer} from "mdb-react-ui-kit";
import {Outlet} from "react-router-dom";
import SearchContext from "./components/pages/Header/SearchContext";

function App() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <MDBContainer fluid>
            <SearchContext.Provider value={{searchTerm,setSearchTerm}}>
                <Header/>
                <div className={style['wrapper']}>
                    <Outlet>
                    </Outlet>
                </div>
            </SearchContext.Provider>
        </MDBContainer>
    );
}

export default App;

