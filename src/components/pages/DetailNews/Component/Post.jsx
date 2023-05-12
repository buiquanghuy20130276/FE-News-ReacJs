import React, { useEffect, useRef } from 'react';

function Post(props) {
    const { content } = props;
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current && content instanceof Node) {
            contentRef.current.appendChild(content);
        }
    }, [content]);

    return (
        <div className="dt-content" ref={contentRef}></div>
    );
}

export default Post;
