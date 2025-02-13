import React from "react";

// Move articles array to a separate file if possible
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
    description: "Location: bhim chowk jaripatka nagpur",
    image: "https://plus.unsplash.com/premium_photo-1674605365723-15e6749630f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnVufGVufDB8fDB8fHww",
    transitionDelay: "500ms",
  },
  {
    id: 3,
    title: "Marathon 3",
    description: "Location: seminary hills, nagpur",
    image: "https://images.unsplash.com/photo-1534156218473-c6ecde4f4dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJ1bnxlbnwwfHwwfHx8MA%3D%3D",
    transitionDelay: "300ms",
  },
  {
    id: 4, // Fixed duplicate IDs
    title: "Marathon 4",
    description: "Location: near Haldiram Sadar, Nagpur",
    image: "https://plus.unsplash.com/premium_photo-1663090373675-66afe321d19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmF0aG9uJTIwcnVubmVyfGVufDB8fDB8fHww",
    transitionDelay: "700ms",
  },
  {
    id: 5, // Fixed duplicate IDs
    title: "Marathon 5",
    description: "Location: near Haldiram Sadar, Nagpur",
    image: "https://plus.unsplash.com/premium_photo-1663090373675-66afe321d19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmF0aG9uJTIwcnVubmVyfGVufDB8fDB8fHww",
    transitionDelay: "700ms",
  },
  {
    id: 6, // Fixed duplicate IDs
    title: "Marathon 6",
    description: "Location: near Haldiram Sadar, Nagpur",
    image: "https://plus.unsplash.com/premium_photo-1663090373675-66afe321d19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmF0aG9uJTIwcnVubmVyfGVufDB8fDB8fHww",
    transitionDelay: "700ms",
  }
];

const gradients = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-pink-400 to-pink-600",
];

function Article({ article, index }) {
  const gradientClass = gradients[index % gradients.length];

  return (
    <section
      className={`relative w-full h-64 overflow-hidden shadow group bg-gradient-to-r ${gradientClass} z-50 transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Image background with reduced opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-60"
        style={{
          backgroundImage: `url('${article.image}')`,
        }}
      />

      {/* Rest of the component remains the same... */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-10" />

      <div className="relative z-20 p-5 text-white h-full flex flex-col">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div className="mt-auto">
          <h1 className="text-lg font-bold mb-2">{article.title}</h1>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-sm leading-relaxed">{article.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;