import style from './style.css'
import useGetDetailNews from "../../../data/useGetDetailNews";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Post from "./Component/Post";
import Comment from "./Component/Comment";
import RelatedNewsBox from "./Component/RelatedNewsBox";
import React from "react";

export const loadNewsDetail = async ({params}) => {
    const {link} = params
    const Url = "/api/" + link
    console.log(Url)
    return Url;
}

function DetailNews() {
    const Url = useLoaderData();
    const data = useGetDetailNews(Url);
    return (
        <div className="container">
            <div className="d-flex flex-column mb-3">
                <Post/>
                <RelatedNewsBox/>
                <Comment/>
            </div>
        </div>
    )
}

export default DetailNews