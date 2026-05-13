export default function About() {
  return (
    <div className="flex flex-col h-full overflow-y-auto p-4 sm:p-6 lg:p-20">
      <div className="max-w-2xl w-full">
        <div className="space-y-2">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Hi, I'm Parth Nikam</h1>
            <p className="text-base leading-relaxed text-foreground/80">
              19 years old, studying Robotics and AI at MIT Bangalore. Currently working on building RL based algorithms for drone swarms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">About Me</h2>
            <p className="text-base leading-relaxed text-foreground/80">
              Currently focusing on learning LLM architectures from scratch down to the matrix multiplication level.
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              I'm a full-stack ML engineer with a knack for building web applications and machine learning models. Everything I do stems from an intrinsic curiosity to understand how things work and how they can provide value to people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
