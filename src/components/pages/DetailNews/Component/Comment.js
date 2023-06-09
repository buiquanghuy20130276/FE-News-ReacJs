import { FacebookProvider, Comments } from 'react-facebook';

export default function Comment() {
    return (
        <FacebookProvider appId="985528439562922">
            <Comments width={70} href="https://quanghuy2k2it.web.app/" />
        </FacebookProvider>
    );
}