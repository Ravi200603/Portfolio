import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="Projects" className="md:max-w-[75vw] max-w-[90%] mx-auto my-[60px]">
      <div className="mb-8">
        <h1 className="font-bold text-[3rem]">Projects</h1>
        <span className="text-[#72777c]">Things I have worked on</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
