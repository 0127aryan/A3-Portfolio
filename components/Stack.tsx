import { skillCategories } from "@/lib/data";

export default function Stack() {
  return (
    <section id="skills" className="py-section-gap px-gutter bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-md text-headline-md">Our Stack</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Leveraging the most powerful modern technologies to build resilient,
            future-proof applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`glass-card p-8 rounded-2xl ${category.wrapperClass}`}
            >
              <span
                className={`material-symbols-outlined text-4xl mb-6 ${category.accentClass}`}
              >
                {category.icon}
              </span>
              <h3 className="font-headline-md text-xl mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-label-sm text-label-sm bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
