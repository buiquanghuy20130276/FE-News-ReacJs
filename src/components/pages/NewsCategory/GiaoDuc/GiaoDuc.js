import React, {useContext, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './GiaoDuc.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";
import DataSideBar from "./data/SideBarData";
import {Link} from "react-router-dom";
import {handleString} from "../../../toolkit/handleString";
import SearchContext from "../../Header/SearchContext";

const tabs = DataSideBar

function GiaoDuc() {
    const [title, setTitle] = useState('Giáo dục')
    const [type, setType] = useState('giao-duc-1196')
    const feed = useRssFeed(type);
    const {searchTerm}=useContext(SearchContext)
    const filteredFeed = feed.filter((post) => {
        const postTitle = post.title.toLowerCase();
        const postDescription = post.description.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (postTitle.includes(searchTermLowerCase) || postDescription.includes(searchTermLowerCase));
    });
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
                <div>
                    <ul className={style['content-list']}>
                        {filteredFeed.map((post, index) => (
                            <Link style={{ color: "#737373" }} key={index} to={`/detail/${handleString(post.link)}`}>
                                <li className={style['content-item']}>
                                    <img className={style['img-content-item']} src={post.imageUrl} alt={post.title} />
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

export default GiaoDuc