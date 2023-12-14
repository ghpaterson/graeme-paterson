import { projectsData } from "./projectsData";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <main className="md:mx-6">
      <section className="py-6">
        <h1 className="text-4xl font-neuton py-4">Projects</h1>
        <p>Here are some projects I am proud of...</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </main>
  );
}
