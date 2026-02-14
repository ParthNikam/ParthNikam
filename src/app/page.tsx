"use client"

import Link from "next/link";


export default function Home() {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-white p-12 lg:p-24">
      <div className="w-xl">
        <div className="prose prose-gray max-w-none space-y-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            19 years old Studying Robotics and AI at MIT Bangalore<br/>
            Currently working on building drone swarm algorithms for autonomous drones
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a full-stack ML engineer with a knack for building web applications and machine learning models<br/>
            Everything I do stems from an intrinsic curiosity to understand how things work and and how can they provide value to people
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Currently focusing on learning LLM architectures from scratch down to the matrix multiplication level
          </p>


          <p className="text-lg text-gray-600 leading-relaxed">
            You can find me on <Link href="https://github.com/ParthNikam">GitHub</Link> and <Link href="https://linkedin.com/in/parthnikam108">LinkedIn</Link>
          </p>
        </div>
      </div>
    </div>
    
  );
}
