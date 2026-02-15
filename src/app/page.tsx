"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: "ai-mock-interviewe",
    title: "AI Mock Interviewer",
    subtitle: "Tried to make a spoof of trymocked.com",
    description: "Test your mock interview communication skills with AI-powered mock interview system.",
    github: "https://github.com/ParthNikam/ai-mock-interviewer",
    demo: "https://ai-mock-interviewer-omega.vercel.app",
  },
  {
    id: "drone-swarm",
    title: "Swarm Intelligence",
    subtitle: "Autonomous Drone Coordination",
    description: "Developing algorithms for autonomous drone swarm coordination and obstacle avoidance using RL. Focusing on decentralized control and cooperative behavior in complex environments.",
    github: "https://github.com/ParthNikam",
    demo: "",
  },
  {
    id: "trym",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
    demo: "",
  },
]

export default function Home() {
  return (
    <main className="md:flex flex-1 flex-row min-h-0 overflow-y-auto bg-white gap-8 p-4 sm:p-6 lg:p-32 mb-16">
      <div className="prose prose-gray max-w-lg">
        <p className="text-2xl font-bold">Parth Nikam</p>
        <p className="text-xl text-gray-600 leading-relaxed">
          19 years old, studying Robotics and AI at MIT Bangalore. Currently working on building RL based algorithms for drone swarms.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed">
          Currently focusing on learning LLM architectures from scratch down to the matrix multiplication level.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed">
          I'm a full-stack ML engineer with a knack for building web applications and machine learning models. Everything I do stems from an intrinsic curiosity to understand how things work and how they can provide value to people.
        </p>


        <p className="text-xl text-gray-600 leading-relaxed">
          You can find me on <Link className="text-blue-600  hover:opacity-80 transition-opacity" href="https://github.com/ParthNikam">GitHub</Link> and <Link className="text-blue-600  hover:opacity-70 transition-opacity" href="https://linkedin.com/in/parthnikam108">LinkedIn</Link>.
        </p>
      </div>

      <div className="max-w-2xl space-y-8 mt-16">
        <h1 className="text-2xl font-semibold text-gray-900">Showcase Work</h1>
        {projects.map((project) => (
          <article key={project.id}>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              <a
                href={project.demo ?? ""}
                className={project.demo ? "text-blue-600 underline hover:opacity-80 transition-opacity" : "text-gray-800"}
              >
                {project.title}
              </a>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-2">
              {project.description}
            </p>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-md  font-semibold hover:opacity-70 transition-opacity"
                >
                  <Github className="size-4 shrink-0" />
                  GitHub
                </Link>
              )}

          </article>
        ))}
      </div>
    </main>
  );
}
