import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './TheThao.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";

const tabs = DataSideBar

function TheThao() {
    const [title, setTitle] = useState('Thể thao')
    const [type, setType] = useState('the-thao-1035')
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
                        <li>Thể thao</li>
                        {title==='Thể thao'?'':(<li className={style['breadcrumb-active']}><span>/</span> {title==='Thể thao'?'':title}</li>)}

                    </ol>
                </div>
                <div>
                    <ul className={style['content-list']}>
                        {feed.map(post => (
                            <li className={style['content-item']} key={post.title}>
                                <img className={style['img-content-item']} src={post.imageUrl} alt={post.title}/>
                                <div className={style['block-content-item']}>
                                    <h3 className={style['content-item-title']}>{post.title}</h3>
                                    <p>{post.description}</p>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TheThao