import { useEffect, useState } from "react";
import appweiteService from "../appwrite/configuration";
import { Container, PostCard } from "../components";
import { ArrowRight, Bot, Feather, Zap } from 'lucide-react'

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
      <div className="w-full h-screen text-center mb-16">
        <div>
        <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">AI-Powered Blog Generation</h2>
          <p className="text-xl text-slate-300 mb-8">Create engaging content effortlessly with Verbatiam</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors">
            <a href="/login">
            Signup Now
            </a>
            <ArrowRight className="ml-2" />
          </button>
        </section>

        <section id="features" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 p-6 rounded-lg">
            <Bot className="text-blue-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Writing</h3>
            <p className="text-slate-300">Generate high-quality blog posts with advanced AI technology</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <Feather className="text-blue-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customizable Content</h3>
            <p className="text-slate-300">Tailor the AI output to match your brand voice and style</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <Zap className="text-blue-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Creation</h3>
            <p className="text-slate-300">Generate multiple blog posts in minutes, not hours</p>
          </div>
        </section>
      </main>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full  ">
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
