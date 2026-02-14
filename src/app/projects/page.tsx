"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  
  {
    id: "drone-swarm",
    title: "Swarm Intelligence",
    subtitle: "Autonomous Drone Coordination",
    description: "Developing algorithms for autonomous drone swarm coordination and obstacle avoidance using RL. Focused on decentralized control and cooperative behavior in complex environments.",
    github: "https://github.com/ParthNikam",
    demo: "",
  },
  {
    id: "trym",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
    demo: "https://example.com",
  },
]

export default function ProjectsPage() {
  return (
    <main className="flex-1 min-h-0 overflow-y-auto bg-white p-4 sm:p-6 md:p-12 lg:p-24">
      <div className="max-w-2xl space-y-12">
        {projects.map((project) => (
          <article key={project.id}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-6 my-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-md underline font-semibold hover:opacity-70 transition-opacity"
                >
                  <Github className="size-4 shrink-0" />
                  GitHub
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-md underline font-semibold hover:opacity-70 transition-opacity"
                >
                  <ExternalLink className="size-4 shrink-0" />
                  Live Demo
                </Link>
              )}
            </div>

            {/* <p className="text-gray-500 mb-3">{project.subtitle}</p> */}
            <p className="text-xl text-gray-600 leading-relaxed mb-2">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
