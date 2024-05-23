import { useEffect, useState } from "react";
import appweiteService from "../appwrite/configuration";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appweiteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full h-screen p-8 mt-72 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full p-10 mt-[680px] mb-[680px] lg:mt-56 lg:mb-56">
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
  );
}

export default Home;
