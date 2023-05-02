import { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

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

function useGetDetailNews(url) {
    const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);

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

                setNewsDetail(result);
            })
            .catch(error => {
                console.log(error);
            });
    }, [url]);

    return newsDetail;
}

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