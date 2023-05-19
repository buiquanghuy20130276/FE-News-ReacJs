import useGetDetailNews from "../../../data/useGetDetailNews";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Comment from "./Component/Comment";
import RelatedNewsBox from "./Component/RelatedNewsBox";
import React, {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUser} from "@fortawesome/free-solid-svg-icons";
import style from './style.css';
import * as url from "url";
import Content from "./Component/Content";
import Audio from "./Component/Audio";
export const loadNewsDetail = async ({params}) => {
    const {link} = params
    const Url = "/api/" + link
    return Url;
}

function DetailNews() {
    const Url = useLoaderData();
    const memoizedUrl = useMemo(() => Url, []);
    const data = useGetDetailNews(memoizedUrl);
    const back = useNavigate();
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
                                    </>
                                ) : (<p>Loading...</p>)
                            }
                        </div>
                        <Comment/>
                    </div>
                </div>
                <div className="sidebar">
                    <button className={style['btn-back']} onClick={()=>back((-1))}>Trở về</button>
                    {/*<div className="banner"><img src={"https://d1j8r0kxyu9tj8.cloudfront.net/files/1582632981Gp4bWNtKphm3XfD.jpg"}/> </div>*/}
                    {data? <Audio text={data.title}/> : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}

export default DetailNews