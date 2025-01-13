import React from "react";

// Named export for articles array
export const articles = [
  {
    id: 1,
    title: "Marathon",
    description: "Location: near Haldiram Sadar, Nagpur",
    image: "https://plus.unsplash.com/premium_photo-1663090373675-66afe321d19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmF0aG9uJTIwcnVubmVyfGVufDB8fDB8fHww",
    transitionDelay: "700ms",
  },
  {
    id: 2,
    title: "Marathon 2",
    description:
      "Location: bhim chowk jaripatka nagpur",
    image: "https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVufGVufDB8fDB8fHww",
    transitionDelay: "500ms",
  },
  {
    id: 3,
    title: "Marathon 3",
    description:
      "Location: seminary hills, nagpur",
    image: "https://images.unsplash.com/photo-1534156218473-c6ecde4f4dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJ1bnxlbnwwfHwwfHx8MA%3D%3D",
    transitionDelay: "300ms",
  },
];

// Article component
function Article({ article }) {
  return (
    <section className="relative w-[30%] h-[20vw] overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all group-hover:h-[1%]"
        style={{
          backgroundImage: `url('${article.image}')`,
          transitionProperty: "height",
          transitionDuration: article.transitionDelay,
          transitionTimingFunction: "cubic-bezier(0.54, 0.21, 0.18, 1.35)",
        }}
      />
      {/* Article Content */}
      <div className="mt-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out delay-[190ms]">
        <h1 className="text-lg font-bold mb-1">{article.title}</h1>
        <p className="text-sm leading-relaxed text-gray-600">{article.description}</p>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-row items-center gap-4 mt-4">
        {/* Register Button */}
        <button className="btn btn-accent w-32">Register</button>
        {/* Circular Button */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M3.75 2A1.75 1.75 0 0 0 2 3.75v10.5a.75.75 0 0 0 1.145.636L8 11.187l4.855 3.7A.75.75 0 0 0 14 14.25V3.75A1.75 1.75 0 0 0 12.25 2h-8.5ZM3.5 3.75c0-.138.112-.25.25-.25h8.5c.138 0 .25.112.25.25v9.39l-4.105-3.13a.75.75 0 0 0-.89 0L3.5 13.14V3.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Article;
