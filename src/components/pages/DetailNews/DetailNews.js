import useGetDetailNews from "../../../data/useGetDetailNews";
import {useLoaderData, useNavigate} from "react-router-dom";
import Comment from "./Component/Comment";
import React, {useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUser} from "@fortawesome/free-solid-svg-icons";
import style from './Detail.module.scss';
import Content from "./Component/Content";
import TextToSpeech from "./Component/TextToSpeech";

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
    const newUrl = Url.replace("/api/", "");
    return (
        <div className={style["wrapper"]}>
            <div className={style["wrapmain"]}>
                <div className={style["main-contain"]}>
                    <div className={style["detail-main"]}>
                        <div className={style["entry-body"]}>
                            {data ?
                                (
                                    <>
                                        <h2 className={style["title"]}>{(data.title)}</h2>
                                        <div className={style["line-datetime"]}>
                                            <div>
                                                <span><FontAwesomeIcon icon={faUser}/>{data.author}</span>
                                                <span data-role={style["publishdate"]}><FontAwesomeIcon
                                                    icon={faClock}/>{data.dateTime}</span>
                                            </div>
                                            <div className={style["btn-sizep"]}>
                                                <span className={style["size-default"]}>Aa</span>
                                                <span className={style["size-plus"]}>Aa+</span>
                                            </div>
                                        </div>
                                        <div className={style["sapo"]}>{data.sapo}</div>
                                        <Content content={data.content}/>
                                    </>
                                ) : (<p>Loading...</p>)
                            }
                        </div>
                    </div>

                </div>
                <div className={style["sidebar"]}>
                    <div className={style["text-to-speech"]}>
                        <button className={style['btn-back']} onClick={() => back((-1))}>Trở về</button>
                        {data ? <TextToSpeech text={data.text}/> : (<p>Loading...</p>)}</div>
                    <div className={style["comment-fb"]}>
                        <Comment data={newUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailNews