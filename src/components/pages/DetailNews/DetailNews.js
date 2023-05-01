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
    console.log(Url)
    return Url;
}

function DetailNews() {
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
            </div>
        </div>
    )
}

export default DetailNews