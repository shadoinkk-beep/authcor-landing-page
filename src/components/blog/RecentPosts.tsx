import React from "react";
import { motion } from "framer-motion";
import posts from "./recentPosts.json";
import DarkVeil from "../DarkVeil";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const RecentPosts: React.FC = () => {
  const [mainPost, ...sidePosts] = posts;

  return (
    <section className="text-white py-12 relative">
      <div className="absolute top-0 left-0 bottom-0 min-h-screen w-screen -z-10">
        <DarkVeil hueShift={242} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-36 z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl mb-8 text-white z-20">Recent blog posts</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main post */}
          <motion.div
            className="grid grid-flow-row overflow-hidden bg-black text-white h-96 cursor-pointer"
            variants={itemVariants}
          >
            {/* Image (top half) */}
            <img
              src={mainPost.image}
              alt={mainPost.title}
              className="w-full object-cover h-56"
            />

            {/* Text (bottom half) */}
            <div className="p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <p className="text-sm text-[#FF0004] mb-1 flex justify-between">
                <div>
                  <span className="text-[#FF0004] font">{mainPost.author}</span> • {mainPost.date}
                </div>
                <span className="text-white">
                  <ArrowUpRight />
                </span>
              </p>
              <h3 className="text-xl font-semibold mb-2">{mainPost.title}</h3>
              <p className="text-sm text-gray-200">{mainPost.excerpt}</p>
            </div>
          </motion.div>

          {/* Side posts */}
          <motion.div
            className="flex flex-col flex-wrap gap-6 h-96 content-between justify-between cursor-pointer"
            variants={containerVariants}
          >
            {sidePosts.map((post) => (
              <motion.div
                key={post.id}
                className="overflow-hidden text-white flex h-44"
                variants={itemVariants}
              >
                {/* Image */}
                <div className="w-1/2 h-full relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="w-1/2 px-4 flex flex-col justify-start">
                  <p className="text-xs text-[#FF0004] flex justify-between">
                    <div>
                      <span className="text-[#FF0004]">{post.author}</span> • {post.date}
                    </div>
                    <span className="text-white">
                      <ArrowUpRight />
                    </span>
                  </p>
                  <h4 className="text-base font-semibold mt-1">{post.title}</h4>
                  <p className="text-xs text-gray-200 mt-1">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default RecentPosts;
