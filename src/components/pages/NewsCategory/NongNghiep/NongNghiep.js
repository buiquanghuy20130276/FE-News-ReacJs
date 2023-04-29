import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './NongNghiep.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";

const tabs = DataSideBar

function NongNghiep() {
    const [title, setTitle] = useState('Nông nghiệp')
    const [type, setType] = useState('nong-nghiep-1009')
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
                        <li>Nông nghiệp</li>
                        {title==='Nông nghiệp'?'':(<li className={style['breadcrumb-active']}><span>/</span> {title==='Nông nghiệp'?'':title}</li>)}

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

export default NongNghiep