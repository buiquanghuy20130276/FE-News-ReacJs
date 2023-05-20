import React, {useContext} from "react";
import SearchContext from "../../pages/Header/SearchContext";
import style from "../../pages/NewsCategory/TinTuc/TinTuc.module.scss";
import {Link} from "react-router-dom";
import {handleString} from "../../toolkit/handleString";

function ItemNews ({data}){
    const {searchTerm}=useContext(SearchContext)
    const filteredFeed = data.filter((post) => {
        const postTitle = post.title.toLowerCase();
        const postDescription = post.description.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (postTitle.includes(searchTermLowerCase) || postDescription.includes(searchTermLowerCase));
    });
    return(
        <div>
            <ul className={style['content-list']}>
                {filteredFeed.map((post, index) => (
                    <Link style={{ color: "#737373" }} key={index} to={`/detail/${handleString(post.link)}`}>
                        <li className={style['content-item']}>
                            <img className={style['img-content-item']} src={post.imageUrl} alt={post.title} />
                            <div className={style['block-content-item']}>
                                <h3 className={style['content-item-title']}>{post.title}</h3>
                                <p>{post.description}</p>
                                <p className={style['pub-date']}>{post.pubDate}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
export default ItemNews;