import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="py-section-gap px-gutter bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
      <div className="max-w-container-max mx-auto relative">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md">What We Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="glass-card p-8 rounded-2xl group">
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-on-surface-variant text-sm mb-6">
                {service.description}
              </p>
              <div className="flex justify-between items-center border-t border-outline-variant pt-6">
                <span className="text-primary font-label-sm text-label-sm uppercase">
                  {service.price}
                </span>
                <span className="material-symbols-outlined text-outline-variant">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
