import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-section-gap px-gutter bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md">What Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-tertiary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="italic text-on-surface-variant">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h5 className="font-bold">{testimonial.name}</h5>
                  <p className="text-xs text-on-surface-variant">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
