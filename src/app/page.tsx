"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 min-h-0 overflow-y-auto bg-white p-4 sm:p-6 md:p-12 lg:p-24">
      <div className="prose prose-gray max-w-2xl space-y-8">
        <p className="text-xl text-gray-600 leading-relaxed">
          19 years old, studying Robotics and AI at MIT Bangalore. Currently working on building drone swarm algorithms for autonomous drones.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed">
          I'm a full-stack ML engineer with a knack for building web applications and machine learning models. Everything I do stems from an intrinsic curiosity to understand how things work and how they can provide value to people.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed">
          Currently focusing on learning LLM architectures from scratch down to the matrix multiplication level.
        </p>

        <p className="text-xl text-gray-600 leading-relaxed">
          You can find me on <Link href="https://github.com/ParthNikam">GitHub</Link> and <Link href="https://linkedin.com/in/parthnikam108">LinkedIn</Link>.
        </p>
      </div>
    </main>
  );
}
