// import React from "react";

function Card({ username = "HC", post = "Not assigned yet" }) {
  //   console.log(props);

  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
          src="https://images.pexels.com/photos/31706920/pexels-photo-31706920.jpeg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              "Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, asapts to any design, and the build
              size is tiny."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-500 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
