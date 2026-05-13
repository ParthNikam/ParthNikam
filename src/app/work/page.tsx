'use client'

import { ExternalLink } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

type Project = {
  id: string
  title: string
  subtitle?: string
  description: string
  github?: string
  demo?: string
}

const projects: Project[] = [
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
  },
  {
    id: "trym",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
  },
  {
    id: "trym2",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
  },
  {
    id: "trym3",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
  },
  {
    id: "trym4",
    title: "TRYM (aka. Track Your Marks)",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance using KNN and Logistic Regression. Built with React.js and Firebase.",
    github: "https://github.com/ParthNikam/track-your-marks-V3",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const demoUrl = project.demo?.trim()
  const projectUrl = demoUrl || project.github

  return (
    <div className="space-y-3">
      <style>{`
        @keyframes underlineAnimation {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .project-link {
          position: relative;
          text-decoration: none;
        }
        .project-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        .project-link:hover::after {
          animation: underlineAnimation 0.3s ease forwards;
        }
      `}</style>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {projectUrl ? (
              <h2>
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link text-lg font-semibold text-foreground inline-flex items-center gap-2"
                >
                  {project.title}
                </a>
              </h2>
            ) : (
              <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
            )}
            {/* {project.subtitle ? (
              <p className="mt-1 text-sm text-foreground/70">{project.subtitle}</p>
            ) : null} */}
          </div>
          {project.github && !demoUrl ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline transition-all"
            >
              <GithubIcon className="size-4 shrink-0" />
              Code
            </a>
          ) : null}
        </div>
        <p className="text-base leading-relaxed text-foreground/80">{project.description}</p>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <div className="flex min-h-screen flex-col overflow-y-auto">
      <div className="max-w-2xl w-full">
        <div className="space-y-8">
          {/* <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Work</h1>
            <p className="text-base text-foreground/60">stuff i've worked on i think is cool nuf to show</p>
          </div> */}

          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
