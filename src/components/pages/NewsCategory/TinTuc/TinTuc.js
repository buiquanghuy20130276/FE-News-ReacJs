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
                    <li className={tab.type === type ?style['item-active']:style['item']} key={index} onClick={() => setType(tab.type)}>
                        <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        <span>{tab.title}</span>
                    </li>
                ))}

                </ul>
            </div>
            <div className={style['content']}>
                <div>

                    <ul>
                        {feed.map(post => (
                            <li key={post.title}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TinTuc