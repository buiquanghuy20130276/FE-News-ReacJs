<<<<<<< HEAD
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
=======
import style from './DetailNews.module.scss'
import useGetDetailNews from "../../../data/useGetDetailNews";
import useGetNewsAPI from "../../../data/useGetNewsAPI";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import React from "react";

async function getNews(url) {
    const link = await useGetNewsAPI(url)
    const data = await  useGetDetailNews(link)
    return {data}
}

export const loadNewsDetail = async ({params}) => {
    // const dataNews =params.news
    const {link} =params
    const Url="/api/"+link
>>>>>>> origin/BuiQuangHuy
    console.log(Url)
    return Url;
}

function DetailNews() {
<<<<<<< HEAD
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
=======
    // const url = useGetNewsAPI("https://danviet.vn/hlv-park-hang-seo-ra-di-de-lai-bo-mat-tro-trui-cua-u22-viet-nam-20230501070522595.htm")
    // const {data} = getNews(url)
    // console.log( getNews("https://danviet.vn/hlv-park-hang-seo-ra-di-de-lai-bo-mat-tro-trui-cua-u22-viet-nam-20230501070522595.htm"))
    const Url = useLoaderData()
    const data = useGetDetailNews(Url)
    const back = useNavigate();
    return (
        <div className={style['wrapper']}>
            <div className={style['dt-relate']}>tin liên quan</div>
            <div className={style['dt-main']}>
                <button className={style['btn-back']} onClick={()=>back((-1))}>Trở về</button>

                {data ? (
                    <>
                        <h3 className={style['title']}>{(data.title)}</h3>
                        <p content={style['content']}>{data.content.content1}</p>
                        <img className={style['image']} src={data.images[1]} alt=""/>
                        <p content={style['content']}>{data.content.content2}</p>
                        <img className={style['image']} src={data.images[2]} alt=""/>
                        <p content={style['content']}>{data.content.content3}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
>>>>>>> origin/BuiQuangHuy
            </div>
        </div>
    )
}

export default DetailNews