import React, {useState} from 'react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss'
import HeaderData from "./HeaderData";
import {Link} from "react-router-dom";

export default function Header() {
    const [active, setActive] = useState('');
    return (
        <div className={style['wrapper']}>
            <div className={style['logo']}>
                <img src="https://static.mediacdn.vn/danviet/web_images/danviet-logo.png"
                     alt=""/>
                <form action="#" className={style['search']}>
                    <input className={style['input-search']} type="text" placeholder={'Tìm kiếm bảng tin...'}/>
                    <button className={style['btn-search']}>Tìm kiếm</button>
                </form>
            </div>
            <div className={style['navBar']}>
                <ul className={style['list-item']}>{HeaderData.map((data, index) => (
                    <Link to={data.path} className={data.path===active ? style['item-active']:style['item']} onClick={()=>setActive(data.path)
                    }>
                        <li key={index}>
                            {data.name}
                        </li>
                    </Link>
                ))}
                </ul>
            </div>
        </div>
    );
}