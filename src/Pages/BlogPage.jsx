import React, { useState } from "react";
import FirstBlogImg from '../assets/reactBlog.png';
import SecondBlogImg from '../assets/backendImge.png';
import { motion } from "framer-motion";

function BlogPage() {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <div className="m-6 md:m-20">

      {/* HEADER */}
      <nav className="bg-white text-2xl text-black text-center font-bold font-mono mb-10 p-3 rounded-4xl">
        Blogs
      </nav>

      {/* CARDS */}
      <div className="flex flex-wrap gap-10">

        {/* BLOG 1 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="card bg-base-100 max-h-96 w-96 shadow-xl cursor-pointer overflow-hidden group"
        >
          <figure className="relative overflow-hidden">
            <img 
              src={FirstBlogImg} 
              className="group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              From Components to System Thinking in React
            </h2>
            <p>
              Moving beyond UI into scalable frontend architecture.
            </p>

            <div className="card-actions justify-end">
              <button 
                onClick={() => setActiveBlog("react")}
                className="btn btn-primary rounded-full"
              >
                Read Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* BLOG 2 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="card bg-base-100 max-h-96 w-96 shadow-xl cursor-pointer overflow-hidden group"
        >
          <figure className="relative overflow-hidden">
            <img 
              src="/Bun.webp" 
              className="group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Designing Backend Systems Beyond CRUD
            </h2>
            <p>
              From APIs to scalable systems thinking.
            </p>

            <div className="card-actions justify-end">
              <button 
                onClick={() => setActiveBlog("backend")}
                className="btn btn-primary rounded-full"
              >
                Read Now
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* MODAL */}
      {activeBlog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900 text-white max-w-3xl w-full p-8 rounded-2xl shadow-2xl border border-slate-700 overflow-y-auto max-h-[90vh]"
          >

            {/* CLOSE */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={() => setActiveBlog(null)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* BLOG 1 CONTENT */}
            {activeBlog === "react" && (
              <div className="space-y-6 text-gray-300 leading-relaxed">

                <h2 className="text-3xl font-bold text-emerald-400">
                  From Components to System Thinking in React
                </h2>

                <p>
                  When developers first encounter React, the focus is almost always on components. The idea feels intuitive—break the UI into smaller reusable pieces and compose them together. At a small scale, this works perfectly. However, as applications grow, this mental model begins to show limitations. The challenge is no longer just building components, but managing how those components interact, share state, and scale as a system.
                </p>

                <p>
                  Initially, my approach was straightforward: build UI fast, keep logic inside components, and move on. This worked for small projects, but as complexity increased, issues began to surface. State became harder to track, components started depending on each other in unpredictable ways, and performance problems appeared due to unnecessary re-renders.
                </p>

                <p>
                  This is where the shift began—from component-level thinking to system-level thinking. Instead of asking “How do I build this component?”, the question became “How does data flow across the application?”.
                </p>

                <p>
                  Understanding state management was the first step. Lifting state up, centralizing it, and deciding what should remain local versus global became critical decisions. This introduced patterns such as controlled components, context usage, and separation between UI state and server state.
                </p>

                <p>
                  Another major realization was the importance of predictability. A scalable system must behave consistently. That means avoiding side effects scattered across components and instead managing them in a structured way. Whether through hooks, middleware patterns, or clean separation of concerns, predictability becomes the backbone of maintainable systems.
                </p>

                <p>
                  Performance optimization further reinforced system thinking. Memoization, lazy loading, and avoiding unnecessary renders are not just optimizations—they are architectural decisions. Each decision affects how the system behaves under load.
                </p>

                <p>
                  Eventually, React stopped being “just a frontend library” and became a system design problem. Decisions around component structure, state distribution, and data flow began to resemble backend architecture thinking.
                </p>

                <p>
                  The key takeaway is simple: scalable frontend systems are not built by writing better components, but by designing better flows. Once that shift happens, React becomes a tool for building systems—not just interfaces.
                </p>

              </div>
            )}

            {/* BLOG 2 CONTENT */}
            {activeBlog === "backend" && (
              <div className="space-y-6 text-gray-300 leading-relaxed">

                <h2 className="text-3xl font-bold text-emerald-400">
                  Designing Backend Systems Beyond CRUD
                </h2>

                <p>
                  Most developers begin backend development by building CRUD APIs. Create, Read, Update, Delete—these operations form the foundation of nearly every application. However, real-world systems quickly outgrow this simplistic model.
                </p>

                <p>
                  The moment concurrency enters the picture, complexity increases. Multiple users accessing and modifying data simultaneously introduces challenges such as race conditions, data inconsistency, and system reliability.
                </p>

                <p>
                  Initially, backend development felt like connecting routes to database queries. But over time, it became clear that this approach does not scale. Systems need to handle failures, retries, and unpredictable traffic patterns.
                </p>

                <p>
                  This is where system design thinking becomes essential. Instead of focusing on endpoints, the focus shifts to flows. How does a request travel through the system? What happens if a step fails? How do we ensure consistency?
                </p>

                <p>
                  Concepts such as idempotency become critical. A system must ensure that repeated requests do not cause unintended side effects. This is especially important in payment systems and critical operations.
                </p>

                <p>
                  Database design also evolves. Rather than just storing data, the focus shifts to modeling relationships, ensuring atomic operations, and maintaining integrity. Techniques such as transactions and indexing are no longer optional—they are required for correctness and performance.
                </p>

                <p>
                  Another key realization is the importance of separation of concerns. Business logic, data access, and API layers should remain independent. This improves maintainability and allows the system to evolve without breaking existing functionality.
                </p>

                <p>
                  Scalability introduces further considerations. Horizontal scaling, caching strategies, and load distribution become necessary as traffic grows. Systems must be designed to handle growth without requiring complete rewrites.
                </p>

                <p>
                  Ultimately, backend development is not about writing APIs—it is about designing systems that remain reliable under pressure. CRUD is just the starting point; real engineering begins when systems must operate in unpredictable environments.
                </p>

              </div>
            )}

          </motion.div>
        </div>
      )}

    </div>
  );
}

export default BlogPage;