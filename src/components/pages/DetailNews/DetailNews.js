import useGetDetailNews from "../../../data/useGetDetailNews";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Content from "./Component/Content";
import Comment from "./Component/Comment";
import RelatedNewsBox from "./Component/RelatedNewsBox";
import React, {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUser} from "@fortawesome/free-solid-svg-icons";
import style from './style.css';
import * as url from "url";

async function getNews(url) {
    const link = await useGetNewsAPI(url)
    const data = await  useGetDetailNews(link)
    return {data}
}
export const loadNewsDetail = async ({params}) => {
    const {link} = params
    const Url = "/api/" + link
    console.log(Url)
    return Url;
}

function DetailNews() {
    const Url = useLoaderData();
    const memoizedUrl = useMemo(() => Url, []);
    const data = useGetDetailNews(memoizedUrl);
    return (
        <div className="wrapper">
            <div className="wrapmain">
                <div className="main-contain">
                    <div className="detail-main">
                        <div className="entry-body">
                            {data ?
                                (
                                    <>
                                        <h2 className="title">{(data.title)}</h2>
                                        <div className="line-datetime">
                                            <div>
                                                <span><FontAwesomeIcon icon={faUser} />{data.author}</span>
                                                <span data-role="publishdate"><FontAwesomeIcon icon={faClock}/>{data.dateTime}</span>
                                            </div>
                                            <div className="btn-sizep">
                                                <span className="size-default">Aa</span>
                                                <span className="size-plus">Aa+</span>
                                            </div>
                                        </div>
                                        <div className="sapo">{data.sapo}</div>
                                        <Content content={data.content}/>
                                        {/*<RelatedNewsBox relateNews = {data.relatedNews}/>*/}
                                        <Comment/>
                                    </>
                                ) : (<p>Loading...</p>)
                            }
                        </div>
                    </div>
                </div>
                <div className="sidebar"></div>
            </div>
        </div>
    )
}

export default DetailNews