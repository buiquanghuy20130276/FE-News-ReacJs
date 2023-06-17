import React, {useContext, useState} from 'react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss'
import HeaderData from "./HeaderData";
import {Link, NavLink} from "react-router-dom";
import SearchContext from "./SearchContext";

export default function Header() {
    const {seachTerm, setSearchTerm} = useContext(SearchContext)
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className={style['wrapper']}>
            <div className={style['logo']}>
                <img src="https://static.mediacdn.vn/danviet/web_images/danviet-logo.png"
                     alt=""/>
                <form action="#" className={style['search']}>
                    <input className={style['input-search']} onChange={(e)=>setSearchTerm(e.target.value)} value={seachTerm} type="text" placeholder={'Tìm kiếm bảng tin...'}/>
                    <button className={style['btn-search']}>Tìm kiếm</button>
                </form>
            </div>
            <div className={style['navBar']}>
                <ul className={style['list-item']}>{HeaderData.map((data, index) => (
                    <NavLink key={index} to={data.path}
                          className={index === activeIndex ? style['item-active'] : style['item']}
                          onClick={ () => setActiveIndex(index)
                          }>
                        <li>
                            {data.name}
                        </li>
                    </NavLink>
                ))}
                </ul>
            </div>
        </div>
    );
}