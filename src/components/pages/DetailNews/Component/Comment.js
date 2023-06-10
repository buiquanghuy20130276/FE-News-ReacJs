import { FacebookProvider, Comments } from 'react-facebook';

export default function Comment({data}) {
    console.log("/detail/"+data)
    return (
        <FacebookProvider appId="985528439562922">
            <Comments width={70} href={data} />
        </FacebookProvider>
    );
}