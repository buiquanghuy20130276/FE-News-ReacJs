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
