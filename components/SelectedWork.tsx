import Image from "next/image";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="py-section-gap px-gutter bg-surface-container-lowest relative"
    >
      <div className="max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Selected Work
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            A few products we&apos;ve designed, built, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-headline-md text-headline-md !text-xl">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 px-2 py-1 rounded bg-surface-container-high border border-outline-variant shrink-0">
                    <span
                      className={`status-dot ${
                        project.status === "Live"
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    />
                    <span className="font-label-sm text-label-sm uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-bold"
                >
                  {project.cta}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
