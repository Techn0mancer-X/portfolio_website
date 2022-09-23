import React, { useEffect, useState } from "react";

import SanityClient from "../client";
const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
    )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-slate-100 min-h-screen p-12 ">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center font-type">My Projects </h1>
        <h2 className="text-lg text-slate-600 flex justify-center mb-12">
          Welcome to my projects page{" "}
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16 ">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700 font-style">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-slate-700 leading-relax">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold  hover:underline hover:text-red-400 text-xl"
                  >
                    View the Project{" "}
                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
