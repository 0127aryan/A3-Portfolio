import ShaderBackground from "./ShaderBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-gutter overflow-hidden">
      <ShaderBackground />
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20" />

      <div className="max-w-4xl space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-outline-variant/50 bg-surface-container-low/50 backdrop-blur-md">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Full-Stack Development · Design · Deployment
          </span>
        </div>

        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          We Build Fast, Scalable Web Products —{" "}
          <span className="text-primary-container">End to End</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          A3 Technologies is a full-stack web development studio crafting modern,
          high-performance applications with React, Next.js, Node.js, and NestJS
          — from idea to deployment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto glass-card border-outline-variant px-10 py-4 rounded-xl font-bold"
          >
            View Our Work
          </a>
        </div>

        <div className="pt-12">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest opacity-60">
            Trusted by startups and small businesses to ship production-ready
            products.
          </p>
        </div>
      </div>
    </section>
  );
}
