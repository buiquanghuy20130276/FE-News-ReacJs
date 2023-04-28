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
                        const items = result.rss.channel[0].item.map(item => ({
                            title: item.title[0],
                            link: item.link[0],
                            description: item.description[0],
                            pubDate: item.pubDate[0],
                            guid: item.guid[0]
                        }));
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