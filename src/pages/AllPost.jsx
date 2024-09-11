import { useEffect, useState } from "react";
import appwriteService from "../appwrite/configuration";
import { PostCard, Container } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <Container>
          <div className="flex flex-col lg:flex-row flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2  lg:w-1/4 ">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default AllPost;
