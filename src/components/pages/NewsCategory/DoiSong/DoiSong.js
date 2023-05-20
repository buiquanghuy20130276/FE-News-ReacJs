import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './DoiSong.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import SearchContext from "../../Header/SearchContext";
import ItemNews from "../../../layouts/ItemNews/ItemNews";

const tabs = DataSideBar

function DoiSong() {
    const [title, setTitle] = useState('Đời sống')
    const [type, setType] = useState('doi-song-1190')
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
                        <li>Kinh tế</li>
                        {title==='Đời sống'?'':(<li className={style['breadcrumb-active']}><span>/</span> {title==='Đời sống'?'':title}</li>)}

                    </ol>
                </div>
                <ItemNews data={feed}/>

            </div>
        </div>
    )
}

export default DoiSong