import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {
  const categories = ["All", "Basics for Beginners", "Finance Career Map", "Case Studies", "Tools & Templates", "CFA Journey"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogs = [
    { id: 1, title: "Compounding Explained Like You’re 18", category: "Basics for Beginners" },
    { id: 2, title: "CFA vs. MBA: Which Path to Take?", category: "Finance Career Map" },
    { id: 3, title: "Zerodha IPO Decoded", category: "Case Studies" },
    // Add more dummy posts or fetch from a CMS later
  ];

  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog | Finance Grind</title>
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Finance Insights</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">Category: {blog.category}</p>
              <Link href={`/blog/${blog.id}`} className="text-blue-600 font-medium">Read More →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
