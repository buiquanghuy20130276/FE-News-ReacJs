import React, { useEffect, useRef } from 'react';

function Content(props) {
    const { content } = props;
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current && content instanceof Node) {
            const contentElement = contentRef.current;
            while(contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            contentRef.current.appendChild(content);
        }
    }, [content]);

    return (
        <div className="dt-content" ref={contentRef}></div>
    );
}

export default Content;
