import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './GiaoDuc.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import SearchContext from "../../Header/SearchContext";
import ItemNews from "../../../layouts/ItemNews/ItemNews";

const tabs = DataSideBar

function GiaoDuc() {
    const [title, setTitle] = useState('Giáo dục')
    const [type, setType] = useState('giao-duc-1196')
    const feed = useRssFeed(type);

    return (
        <div className={style['wrapper']}>
            <div className={style['sideBar']}>
                <ul className={style['list-item']}>{tabs.map((tab, index) => (
                    <li className={tab.type === type ? style['item-active'] : style['item']} key={index}
                        onClick={() => {
                            setTitle(tab.title)
                            setType(tab.type)
                        }}>
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        <span>{tab.title}</span>
                    </li>
                ))}

                </ul>
            </div>
            <div className={style['content']}>
                <div className={style['breadcrumb']}>
                    <ol>
                        <li>Giáo dục</li>
                        {title==='Giáo dục'?'':(<li className={style['breadcrumb-active']}><span>/</span> {title==='Giáo dục'?'':title}</li>)}

                    </ol>
                </div>
                <ItemNews data={feed}/>

            </div>
        </div>
    )
}

export default GiaoDuc