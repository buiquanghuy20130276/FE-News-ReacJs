import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './TheGioi.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import {Link} from "react-router-dom";
import {handleString} from "../../../toolkit/handleString";

const tabs = DataSideBar

function TheGioi() {
    const [title, setTitle] = useState('Thế giới')
    const [type, setType] = useState('the-gioi-1007')
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
                        <li>Thế giới</li>
                        {title==='Thế giới'?'':(<li className={style['breadcrumb-active']}><span>/</span> {title==='Thế giới'?'':title}</li>)}

                    </ol>
                </div>
                <div>
                    <ul className={style['content-list']}>
                        {feed.map((post, index) => (
                            <Link style={{color: "#737373"}} key={index} to={`/detail/${handleString(post.link)}`}>
                                <li className={style['content-item']}>
                                    <img className={style['img-content-item']} src={post.imageUrl} alt={post.title}/>
                                    <div className={style['block-content-item']}>
                                        <h3 className={style['content-item-title']}>{post.title}</h3>
                                        <p>{post.description}</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TheGioi