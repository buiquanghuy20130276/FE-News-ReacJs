import { useState, useEffect } from "react";

function useGetNewsAPI(url) {
    const [apiUrl, setApiUrl] = useState(null);

    useEffect(() => {
        function getLastPathSegment(url) {
            // Loại bỏ kí tự / cuối cùng nếu có
            url = url.replace(/\/$/, "");

            // Tách đường dẫn thành mảng
            var segments = url.split("/");

            // Lấy phần tử cuối cùng trong mảng
            var lastSegment = segments.pop();

            // Thêm chuỗi "/api/" vào trước phần tử cuối cùng
            lastSegment = "/api/" + lastSegment;

            return lastSegment;
        }

        if (url) {
            const api = getLastPathSegment(url);
            setApiUrl(api);
        }
    }, [url]);

    return apiUrl;
}

export default useGetNewsAPI;
// import { useState, useEffect } from "react";
//
// async function getLastPathSegment(url) {
//     // Loại bỏ kí tự / cuối cùng nếu có
//     url = url.replace(/\/$/, "");
//
//     // Tách đường dẫn thành mảng
//     var segments = url.split("/");
//
//     // Lấy phần tử cuối cùng trong mảng
//     var lastSegment = segments.pop();
//
//     // Thêm chuỗi "/api/" vào trước phần tử cuối cùng
//     lastSegment = "/api/" + lastSegment;
//
//     // Lấy dữ liệu từ API bằng cách sử dụng fetch hoặc axios
//     const response = await fetch(lastSegment);
//     const data = await response.json();
//
//     return data.url;
// }
//
// function useGetNewsAPI(url) {
//     const [apiUrl, setApiUrl] = useState(null);
//
//     useEffect(() => {
//         async function getApiUrl() {
//             try {
//                 if (url) {
//                     const api = await getLastPathSegment(url);
//                     setApiUrl(api);
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//
//         getApiUrl();
//     }, [url]);
//
//     return apiUrl;
// }
//
// export default useGetNewsAPI;