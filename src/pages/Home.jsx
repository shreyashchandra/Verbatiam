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
      <div className="w-full h-screen p-8 mt-72 text-center">
        <Container>
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

        {/* <section id="pricing" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="bg-slate-800 p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-4xl font-bold mb-4">$29<span className="text-xl text-slate-300">/month</span></p>
            <ul className="text-left mb-6">
              <li className="mb-2">✓ Unlimited AI-generated posts</li>
              <li className="mb-2">✓ Advanced customization options</li>
              <li className="mb-2">✓ Priority support</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
              Choose Plan
            </button>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-300 mb-8">Have questions? We're here to help!</p>
          <a href="mailto:info@verbatiam.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            info@verbatiam.com
          </a>
        </section> */}
      </main>
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
