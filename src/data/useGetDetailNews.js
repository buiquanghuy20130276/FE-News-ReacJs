import {useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function useGetDetailNews(url) {
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
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
                const result = {
                    title:title,
                    sapo:sapo,
                    content: entryBodyFragment,
                    author: author?author:'Anonymous',
                    dateTime:dateTime,
                    text:title+sapo+textBody,
                };
                setNewsDetail(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [url]);

    return newsDetail;
}

export default useGetDetailNews;