import { useRouter } from 'next/router';
const PostSlug = () => {
 const router = useRouter();
 const { slug } = router.query; 
 return (
<div>
<h1>Post: {slug}</h1>
<p>Este é o conteúdo do post para o slug: {slug}</p>
</div>
 );
};
export default PostSlug;