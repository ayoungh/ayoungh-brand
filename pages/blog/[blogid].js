import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { blogid } = router.query;

  return <p>Post: {blogid}</p>;
};

export default Post;
