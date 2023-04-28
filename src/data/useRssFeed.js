import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';

export const useRssFeed = (type) => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const url = `/api/rss/${type}.rss`;
        axios.get(url)
            .then(response => {
                const xml = response.data;
                parseString(xml, (err, result) => {
                    if (err) {
                        console.error(err);
                    } else {
                        const items = result.rss.channel[0].item.map(item => {
                            const description = item.description[0];
                            const imageUrlRegex = /<img.*?src="(.*?)"/;
                            const imageUrlMatch = description.match(imageUrlRegex);
                            const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
                            const cleanedDescription = description.replace(/<\/?(a|img)[^>]*>/g, '');

                            return {
                                title: item.title[0],
                                link: item.link[0],
                                description: cleanedDescription,
                                pubDate: item.pubDate[0],
                                guid: item.guid[0],
                                imageUrl: imageUrl
                            }
                        });
                        setFeed(items);
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });
    }, [type]);

    return feed;
};