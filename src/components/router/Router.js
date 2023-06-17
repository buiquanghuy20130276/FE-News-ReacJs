import {createBrowserRouter} from "react-router-dom";
import TinTuc from "../pages/NewsCategory/TinTuc/TinTuc";
import App from "../../App";
import TheGioi from "../pages/NewsCategory/TheGioi/TheGioi";
import TheThao from "../pages/NewsCategory/TheThao/TheThao";
import NongNghiep from "../pages/NewsCategory/NongNghiep/NongNghiep";
import PhapLuat from "../pages/NewsCategory/PhapLuat/PhapLuat";
import DetailNews, {loadNewsDetail} from "../pages/DetailNews/DetailNews";
import TrangChu from "../pages/NewsCategory/TrangChu/TrangChu";
import KinhTe from "../pages/NewsCategory/KinhTe/KinhTe";
import GiaoDuc from "../pages/NewsCategory/GiaoDuc/GiaoDuc";
import DoiSong from "../pages/NewsCategory/DoiSong/DoiSong";
import CongNghe from "../pages/NewsCategory/CongNghe/CongNghe";
import VhGt from "../pages/NewsCategory/VhGt/VhGt";
import ChuyenDongSo from "../pages/NewsCategory/ChuyenDongSo/ChuyenDongSo";

const Router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <TrangChu/>,

        },
        {
            path: 'tin-tuc',
            element: <TinTuc/>,
        },
        {
            path: 'detail/:link',
            element: <DetailNews/>,
            loader:loadNewsDetail,
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
        {
            path:'kinh-te',
            element: <KinhTe/>
        },
        {
            path:'giao-duc',
            element: <GiaoDuc/>
        },{
            path:'doi-song',
            element: <DoiSong/>
        },
        {
            path:'cong-nghe',
            element: <CongNghe/>
        },
        {
            path:'vh-gt',
            element: <VhGt/>
        },
        {
            path:'chuyen-dong-so',
            element: <ChuyenDongSo/>
        },
    ]

}])
export default Router