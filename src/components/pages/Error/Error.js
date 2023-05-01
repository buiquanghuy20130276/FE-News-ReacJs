import {useRouteError} from "react-router-dom";

function Error(){
    const error= useRouteError();
    return(
        <div>Error: {error.error}</div>
    )
}
export default Error