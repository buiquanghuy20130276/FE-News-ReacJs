import {createBrowserRouter} from "react-router-dom";
import TinTuc from "../pages/NewsCategory/TinTuc/TinTuc";
import App from "../../App";
import TheGioi from "../pages/NewsCategory/TheGioi/TheGioi";
import TheThao from "../pages/NewsCategory/TheThao/TheThao";
import NongNghiep from "../pages/NewsCategory/NongNghiep/NongNghiep";
import PhapLuat from "../pages/NewsCategory/PhapLuat/PhapLuat";
import DetailNews, {loadNewsDetail} from "../pages/DetailNews/DetailNews";
import Error from "../pages/Error/Error";

const Router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: 'tin-tuc',
            element: <TinTuc/>,
        },
        {
            path: 'detail/:link',
            element: <DetailNews/>,
            loader:loadNewsDetail,
            // errorElement:<Error/>
        },
        {
            path: 'the-gioi',
            element: <TheGioi/>,
        },
        {
            path: 'the-thao',
            element: <TheThao/>
        },
        {
            path: 'nong-nghiep',
            element: <NongNghiep/>
        },
        {
            path:'phap-luat',
            element: <PhapLuat/>
        },
    ]

}])
export default Router