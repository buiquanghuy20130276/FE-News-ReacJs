import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import './Header.module.css'

import HeaderData from "./HeaderData";

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'><img alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7" height="39"
                                              src="https://cdnweb.dantri.com.vn/dist/static-logo.1-0-1.742f36bc45f3443d0e59.svg"
                                              width="132"/></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        {HeaderData.map((header, index) =>{
                            console.log(header.dropdown)
                            if(header.dropdown){
                                return(
                                    <MDBNavbarItem>

                                        <MDBDropdown>
                                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                                {header.name}
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>Action</MDBDropdownItem>
                                                <MDBDropdownItem link>Another action</MDBDropdownItem>
                                                <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>

                                    </MDBNavbarItem>
                                )
                            }else{
                                return (<MDBNavbarItem>
                                    <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                                        {header.name}
                                    </MDBNavbarLink>
                                </MDBNavbarItem>)
                            }
                        })}
                    </MDBNavbarNav>
                    <form className='d-flex input-wrapper w-75'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search'/>
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}