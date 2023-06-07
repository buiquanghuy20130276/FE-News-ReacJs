import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Comment from "./Component/Comment";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import style from './style.css';
import Content from "./Component/Content";
import Audio from "./Component/Audio";
import axios from "axios";
import cheerio from "cheerio";

export const loadNewsDetail = async ({ params }) => {
    const { link } = params;
    const Url = "/api/" + link;
    return Url;
};

function DetailNews() {
    const Url = useLoaderData();
    const back = useNavigate();

    const [title, setTitle] = useState("");
    const [sapo, setSapo] = useState("");
    const [content, setContent] = useState(null);
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [dateTime, setdateTime] = useState("");

    useEffect(() => {
        axios
            .get(Url)
            .then(async (response) => {
                const html = response.data;
                const $ = cheerio.load(html);

                $('div.detail-main div.dt-content div.entry-body div.kbwscwl-relatedbox').remove();

                const entryBody = $("div.detail-main div.dt-content div.entry-body");
                const contents = entryBody.contents();
                const range = document.createRange();
                const entryBodyFragment = range.createContextualFragment(contents);

                const title = $("div.detail-main .dt-title h2 span.title").text();
                const sapo = $("div.detail-main div.sapo").text();
                const textBody = $("div.detail-main div.dt-content div.entry-body").text();
                const author = $("div.detail-main div.line-datetime span.anots").text();
                const dateTime = $("div.detail-main div.line-datetime span[data-role='publishdate']").text();

                setTitle(title);
                setSapo(sapo);
                setContent(entryBodyFragment);
                setText(title + sapo + textBody);
                setAuthor(author);
                setdateTime(dateTime);

                const data = {
                    text: "chung ta la chien sy",
                    voice: "hn-quynhanh",
                    id: "2",
                    without_filter: false,
                    speed: 1.0,
                    tts_return_option: 2,
                };
                const res = await fetch(
                    "https://viettelgroup.ai/voice/api/tts/v1/rest/syn",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            token:"XPv3kPR-AfCq68-BWrlyE0BR86aYDzCDomsb-fCrIM0a7BwpkOIMbLbSpP9XPgiR",
                        },
                        body: JSON.stringify(data),
                    }
                );

                const blob = await res.blob();
                document.getElementById("audio").src = URL.createObjectURL(blob);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="wrapper">
            <div className="wrapmain">
                <div className="main-contain">
                    <div className="detail-main">
                        <div className="entry-body">
                            <h2 className="title">{(title)}</h2>
                            <div className="line-datetime">
                                <div>
                                    <span><FontAwesomeIcon icon={faUser}/>{author}</span>
                                    <span data-role="publishdate"><FontAwesomeIcon
                                        icon={faClock}/>{dateTime}</span>
                                </div>
                                <div className="btn-sizep">
                                    <span className="size-default">Aa</span>
                                    <span className="size-plus">Aa+</span>
                                </div>
                            </div>
                            <div className="sapo">{sapo}</div>
                            <Content content={content}/>
                        </div>
                        <Comment/>
                    </div>
                </div>
                <div className="sidebar">
                    <button className={style['btn-back']} onClick={() => back((-1))}>Trở về</button>
                    {/*<div className="banner"><img src={"https://d1j8r0kxyu9tj8.cloudfront.net/files/1582632981Gp4bWNtKphm3XfD.jpg"}/> </div>*/}
                    <Audio text={text}/>
                </div>
            </div>
        </div>
    )
}

export default DetailNews