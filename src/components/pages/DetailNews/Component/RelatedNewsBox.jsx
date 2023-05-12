import React, { useEffect, useRef } from 'react';

function RelatedNewsBox(props) {
    const { content } = props;
    const relatedRef = useRef(null);

    useEffect(() => {
        if (relatedRef.current) {
            relatedRef.current.appendChild(content);
        }
    }, [content]);

    return (
        <div className="box-samecat" ref={relatedRef}></div>
    );
}

export default RelatedNewsBox;
