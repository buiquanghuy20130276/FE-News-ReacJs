import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

function Post(props) {
    const {content} =props;
    return (
        <div>{content}</div>
    );
}
export default Post