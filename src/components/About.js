import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import cyberpunk from "../cyberpunk.png";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;
  return (
    <main className="relative">
      <img
        src={cyberpunk}
        alt="cyberpunk background"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-slate-500 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />

          <div className="text-lg flex flex-col justify-center">
            <h1 className="text-5xl text-slate-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-slate-100">{author.name}</span>
            </h1>
          </div>

          <div className="prose lg:prose-xl text-lg flex flex-col justify-center  text-white">
            <BlockContent
              blocks={author.bio}
              projectId="n587fijg"
              dataset="production"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
