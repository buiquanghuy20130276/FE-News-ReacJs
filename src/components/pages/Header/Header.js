import React from 'react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss'
import HeaderData from "./HeaderData";

export default function Header() {
    return (
        <div className={style['wrapper']}>
            <div className={style['logo']}>
                <img src="https://static.mediacdn.vn/danviet/web_images/danviet-logo.png"
                                                alt=""/>
                <form action="#" className={style['search']}>
                    <input className={style['input-search']} type="text" placeholder={'Tìm kiếm bảng tin...'}/>
                    <button className={style['btn-search']} >Tìm kiếm</button>
                </form>
            </div>
            <div className={style['navBar']}>
                <ul className={style['list-item']}>{HeaderData.map((data, index) => (
                    <li className={style['item']} key={index}>
                        {data.name}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}