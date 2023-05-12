import useGetDetailNews from "../../../data/useGetDetailNews";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Post from "./Component/Post";
import Comment from "./Component/Comment";
import RelatedNewsBox from "./Component/RelatedNewsBox";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import style from './style.css';
import * as url from "url";

export const loadNewsDetail = async ({params}) => {
    const {link} = params
    const Url = "/api/" + link
    console.log(Url)
    return Url;
}

function DetailNews() {
    const Url = useLoaderData();
    console.log("url"+Url);
    const data = useGetDetailNews(Url);
    // console.log()
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
                                            <span data-role="publishdate"><FontAwesomeIcon icon={faClock}/>Thứ ba, ngày 02/05/2023 09:04 AM (GMT+7)</span>
                                            <div className="btn-sizep">
                                                <span className="size-default">Aa</span>
                                                <span className="size-plus">Aa+</span>
                                            </div>
                                        </div>
                                        <div className="sapo">{data.sapo}</div>
                                        <Post content={data.content}/>
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