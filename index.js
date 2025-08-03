import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Compounding Explained Like You’re 18", category: "Basics" },
    { id: 2, title: "CFA vs. MBA: Which Path to Take?", category: "Career Map" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Finance Grind | Real Finance Insights</title>
        <meta name="description" content="Decoding finance in real-time for students and aspirants." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finance from the Ground Up</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A CFA student decoding markets, careers, and money for students and early aspirants.
          </p>
          <Link href="/blog" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">Category: {blog.category}</p>
              <Link href={`/blog/${blog.id}`} className="text-blue-600 font-medium">Read More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Verticals Quick Links */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Basics for Beginners", "Finance Career Map", "Case Studies", "Tools & Templates", "CFA Journey"].map(category => (
              <Link key={category} href={`/blog?category=${category}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
