import Image from "next/image";
import { advantages } from "@/lib/data";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXibZGSPQ-Wem26N0FHibWMjYDtF-9gKZ2E_jbbQSEBURkmY6_3uGOb5b-l_FeV8kke_bGVNpIVJyLMTH-n0qfBx2ZHVEtc-F5e3uAGwvOlnhYAb5i4Xh4i-z7oJYtKfcbf8yA1TSBfRAvrsfWPtLImR9x6luD5DGTb6WqLu8TfetXOl9KdzFH26VPg2bxtND2i7FDJVvA2tOgzy70ixl3taiQbSPBhF3yg-3abHtRLrQxVyaBSmM";

export default function About() {
  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-headline-md text-headline-md">
            Why A3 Technologies
          </h2>
          <div className="space-y-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex gap-4">
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded flex items-center justify-center ${advantage.iconBg} ${advantage.iconColor}`}
                >
                  <span className="material-symbols-outlined">
                    {advantage.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-30" />
          <div className="relative glass-card p-2 rounded-2xl">
            <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
              <Image
                src={ABOUT_IMAGE}
                alt="A developer's high-end workstation at night with a mechanical keyboard and multiple monitors showing code."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
