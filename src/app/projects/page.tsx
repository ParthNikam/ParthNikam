"use client"

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "trym",
    title: "TRYM",
    subtitle: "Student Performance Analytics",
    description: "A web app for tracking students' test performance and predicting their future performance. Built with Next.js, Supabase, and custom ML models for predictive analytics.",
    github: "https://github.com/ParthNikam",
    demo: "https://example.com",
    image: "/trym.png"
  },
  {
    id: "drone-swarm",
    title: "Swarm Intelligence",
    subtitle: "Autonomous Drone Coordination",
    description: "Developed algorithms for autonomous drone swarm coordination and obstacle avoidance. Focused on decentralized control and cooperative behavior in complex environments.",
    github: "https://github.com/ParthNikam",
    demo: "https://example.com",
    image: "/drone_swarm.png"
  },
  {
    id: "project-3",
    title: "Vanish Analytics",
    subtitle: "Real-time Data Visualization",
    description: "A high-performance dashboard featuring real-time data streaming and interactive visualizations using D3.js and WebSockets.",
    github: "https://github.com/ParthNikam",
    demo: "https://example.com",
    image: "/trym.png" // Reusing for variety if needed, or I could generate more
  }
]

export default function ProjectsPage() {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-white p-12 lg:p-24">
      <div className="max-w-6xl">
        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col md:flex-row gap-12 items-start">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">{project.title}</h2>
                  <p className="text-lg font-medium text-gray-500">{project.subtitle}</p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex gap-6 items-center pt-2">
                  <Link 
                    href={project.github}
                    className="text-sm font-bold text-gray-900 hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href={project.demo}
                    className="text-sm font-bold text-gray-900 hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
              
              {/* Image Content */}
              <div className="w-full md:w-[450px] aspect-[3/2] relative rounded-xl overflow-hidden bg-gray-100 shadow-2xl transition-transform duration-500">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}