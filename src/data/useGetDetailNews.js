import { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function useGetDetailNews(url) {
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);

                const title = $("div.detail-main .dt-title h2 span.title").text();
                const sapo = $("div.detail-main div.sapo").text();
                const content = $("div.detail-main div.dt-content div.entry-body").html();
                const contentNode = document.createRange().createContextualFragment(content);
                const relateNewsBox = $("div.detail-main div.dt-content div.box-samecat ul.samecat-news").html();
                const relatedNewsBoxNode = document.createRange().createContextualFragment(relateNewsBox);
                const result = {
                    title:title,
                    sapo:sapo,
                    content: contentNode,
                    RelatedNews:relatedNewsBoxNode,
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