import React from "react";
import image from "../cyberpunk.png";
const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="cyberpunk wheel"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className=" text-6xl text-white font-bold font-type leading-none lg:leading-snug">
          Hello, I'm Clayton.
        </h1>
      </section>
    </main>
  );
};

export default Home;
