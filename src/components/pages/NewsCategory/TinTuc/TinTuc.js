import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import style from './TinTuc.module.scss'
import {useRssFeed} from "../../../../data/useRssFeed";


const tabs = [
    {
        title: 'Kính đa tròng',
        type: 'kinh-da-trong-1059'
    },
    {
        title: 'Chính trị',
        type: 'chinh-tri-1002'
    },
    {
        title: 'Xã hội',
        type: 'xa-hoi-1003'
    },
    {
        title: 'Phóng sự',
        type: 'phong-su-ghi-chep-1182'
    },
]

function TinTuc() {
    const [title, setTitle] = useState('')
    const [type, setType] = useState('tin-tuc-1001')
    const feed = useRssFeed(type);
    return (
        <div className={style['wrapper']}>
            <div className={style['sideBar']}>
                <ul className={style['list-item']}>{tabs.map((tab, index) => (
                    <li className={tab.type === type ? style['item-active'] : style['item']} key={index}
                        onClick={() => setType(tab.type)}>
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        <span>{tab.title}</span>
                    </li>
                ))}

                </ul>
            </div>
            <div className={style['content']}>
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

export default TinTuc