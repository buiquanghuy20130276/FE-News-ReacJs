import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../pages/Header/SearchContext";
import style from "../ItemNews/ItemListSmall.module.scss";
import { Link } from "react-router-dom";
import { handleString } from "../../toolkit/handleString";

function ItemNews({ data }) {
    const { searchTerm } = useContext(SearchContext);
    const [article, setArticle] = useState([]);

    useEffect(() => {
        const articlesStorage = localStorage.getItem("article");
        if (articlesStorage) {
            setArticle(JSON.parse(articlesStorage));
        }
    }, []);


    const filteredFeed = data.filter((post) => {
        const postTitle = post.title.toLowerCase();
        const postDescription = post.description.toLowerCase();
        const searchTermLowerCase = searchTerm.toLowerCase();
        return (
            postTitle.includes(searchTermLowerCase) ||
            postDescription.includes(searchTermLowerCase)
        );
    });
    const listKT = filteredFeed.slice(0,6);

    const handleArticleClick = (post) => {
        if (!isPostRead(post)) {
            const updatedArticles = [...article, post];
            setArticle(updatedArticles);
            localStorage.setItem(
                "article",
                JSON.stringify(updatedArticles)
            );
        }
    };
    const isPostRead = (post) => {
        return article.some((readPost) => readPost.title === post.title);
    };

    return (
        <div>
            <ul className={style["content-list"]}>
                {listKT.map((post, index) => (
                    <Link
                        style={{ color: isPostRead(post) ? "#996699" : "#555555" }}
                        item={post}
                        key={index}
                        to={`/detail/${handleString(post.link)}`}
                        onClick={() => handleArticleClick(post)}
                    >
                        <li className={style["content-item"]}>
                            <img
                                className={style["img-content-item"]}
                                src={post.imageUrl}
                                alt={post.title}
                            />
                            <div className={style["block-content-item"]}>
                                <h3 className={style["content-item-title"]}>{post.title}</h3>
                                {/* <p>{post.description}</p> */}
                                <p className={style["pub-date"]}>{post.pubDate}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ItemNews;
