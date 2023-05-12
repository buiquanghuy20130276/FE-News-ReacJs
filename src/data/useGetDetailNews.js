import { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

<<<<<<< HEAD
=======
function splitTextIntoChunks(result, numChunks = 3) {
    const words = result.split(' ');
    const chunkSize = Math.ceil(words.length / numChunks);
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
        const chunk = words.slice(i, i + chunkSize).join(' ');
        chunks.push(chunk);
    }
    const obj = {
        content1: chunks[0],
        content2: chunks[1],
        content3: chunks[2]
    };
    return obj;
}

>>>>>>> origin/BuiQuangHuy
function useGetDetailNews(url) {
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
<<<<<<< HEAD
                $('div.detail-main div.dt-content div.entry-body div.kbwscwl-relatedbox').remove();
                const entryBody = $("div.detail-main div.dt-content div.entry-body");
                const contents = entryBody.contents();
                const entryBodyContent = contents.slice(0, contents.index(entryBody));
                const range = document.createRange();
                const entryBodyFragment = range.createContextualFragment(entryBodyContent);

                const title = $("div.detail-main .dt-title h2 span.title").text();

                const sapo = $("div.detail-main div.sapo").length>0 ? $("div.detail-main div.sapo").text() : "";
                // const relateNewsBox = $("div.detail-main div.dt-content div.box-samecat ul.samecat-news").html();
                // const relatedNewsBoxNode = document.createRange().createContextualFragment(relateNewsBox);
                const result = {
                    title:title,
                    sapo:sapo,
                    content: entryBodyFragment,
                    // relatedNews:relatedNewsBoxNode,
                };
=======

                const newsTitle = $('span.title').first().text().replace(/\s+/g, ' ').trim();

                let content = $('.dt-content').text().replace(/\s+/g, ' ').trim();
                const sentences = content.split(/[.?!]/);
                const filteredSentences = sentences.filter(sentence => !sentence.includes('Ảnh: '));
                content = filteredSentences.join('. ');

                const image = $('meta[property="og:image"]').attr('content');

                const result = {
                    title: newsTitle,
                    content: splitTextIntoChunks(content, 3),
                    image: image
                };

                const images = [];
                $('.dt-content').find('img').each((index, element) => {
                    const src = $(element).attr('src');
                    images.push(src);
                });

                result.images = images.slice(0, 4);

>>>>>>> origin/BuiQuangHuy
                setNewsDetail(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [url]);

    return newsDetail;
}

<<<<<<< HEAD
export default useGetDetailNews;
=======
export default useGetDetailNews;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import cheerio from 'cheerio';
//
// function useGetDetailNews(url) {
//     const [newsDetail, setNewsDetail] = useState(null);
//
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get(url);
//                 const html = response.data;
//                 const $ = cheerio.load(html);
//                 const newsTitle = $('span.title').first().text().replace(/\s+/g, ' ').trim();
//                 let content = $('.dt-content').text().replace(/\s+/g, ' ').trim();
//                 const sentences = content.split(/[.?!]/);
//                 const filteredSentences = sentences.filter(sentence => !sentence.includes('Ảnh: '));
//                 content = filteredSentences.join('. ');
//                 const image = $('meta[property="og:image"]').attr('content');
//                 const result = {
//                     title: newsTitle ,
//                     content: splitTextIntoChunks(content, 3),
//                     image: image
//                 };
//                 const images = [];
//                 $('.dt-content').find('img').each((index, element) => {
//                     const src = $(element).attr('src');
//                     images.push(src);
//                 });
//                 const limitedImages = images.slice(0, 4);
//                 result.images = limitedImages;
//                 setNewsDetail(result);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         fetchData();
//     }, [url]);
//
//     function splitTextIntoChunks(result, numChunks = 3) {
//         const words = result.split(' ');
//         const chunkSize = Math.ceil(words.length / numChunks);
//         const chunks = [];
//         for (let i = 0; i < words.length; i += chunkSize) {
//             const chunk = words.slice(i, i + chunkSize).join(' ');
//             chunks.push(chunk);
//         }
//         const obj = {
//             content1: chunks[0],
//             content2: chunks[1],
//             content3: chunks[2]
//         };
//         return obj;
//     }
//
//     return newsDetail;
// }
//
// export default useGetDetailNews;
>>>>>>> origin/BuiQuangHuy
