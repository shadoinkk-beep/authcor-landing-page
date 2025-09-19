import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import blogPosts from "./blogPosts.json";
import { ArrowLeft, ArrowRight } from "lucide-react";




import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,  // stagger timing between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState(blogPosts);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">All blog posts</h1>
<motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // triggers every time visible
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <BlogCard {...post} />
        </motion.div>
      ))}
    </motion.div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div> */}

      {/* Pagination (static for now) */}
      <div className="flex justify-between items-center gap-3 mt-10">
        <button className="px-3 py-1 text-gray-600 hover:text-gray-800 flex items-center gap-1"> <ArrowLeft/>  Previous</button>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded bg-blue-500 text-white">1</span>
          <span className="px-3 py-1 hover:bg-gray-100 cursor-pointer">2</span>
          <span className="px-3 py-1 hover:bg-gray-100 cursor-pointer">3</span>
          <span className="px-3 py-1">...</span>
          <span className="px-3 py-1 hover:bg-gray-100 cursor-pointer">10</span>
        </div>
        <button className="px-3 py-1 text-gray-600 hover:text-gray-800 flex items-center gap-1">Next  <ArrowRight/> </button>
      </div>
    </div>
  );
};

export default BlogList;
