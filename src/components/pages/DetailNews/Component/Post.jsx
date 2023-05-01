import React from 'react';

function Post(props) {
    const {content} =props;
    return (
        <div>{content}</div>
    );
}
export default Post