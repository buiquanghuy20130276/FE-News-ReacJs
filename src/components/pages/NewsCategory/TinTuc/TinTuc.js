import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './TinTuc.module.scss';
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import ItemNews from "../../../layouts/ItemNews/ItemNews";

const tabs = DataSideBar;

function TinTuc() {
    const [title, setTitle] = useState('Tin tức');
    const [type, setType] = useState('tin-tuc-1001');
    const feed = useRssFeed(type);


    return (
        <div className={style['wrapper']}>
            <div className={style['sideBar']}>
                <ul className={style['list-item']}>
                    {tabs.map((tab, index) => (
                        <li
                            className={tab.type === type ? style['item-active'] : style['item']}
                            key={index}
                            onClick={() => {
                                setTitle(tab.title);
                                setType(tab.type);
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                            <span>{tab.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style['content']}>
                <div className={style['breadcrumb']}>
                    <ol>
                        <li>Tin Tức</li>
                        {title === 'Tin tức' ? '' : (
                            <li className={style['breadcrumb-active']}><span>/</span> {title === 'Tin tức' ? '' : title}</li>
                        )}
                    </ol>
                </div>

                <ItemNews data={feed}/>
            </div>
        </div>
    )
}

export default TinTuc