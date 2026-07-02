"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-section-gap px-gutter bg-surface relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-display-lg-mobile md:text-display-lg text-on-surface">
            Let&apos;s Build Something
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Ready to start? Fill out the form below or send us an email directly.
          </p>
        </div>

        <div className="glass-card p-10 rounded-3xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <span className="material-symbols-outlined text-primary text-5xl">
                check_circle
              </span>
              <h3 className="font-headline-md text-2xl">Message sent!</h3>
              <p className="text-on-surface-variant">
                Thanks for reaching out. We&apos;ll get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-label-sm text-label-sm uppercase text-on-surface-variant"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-label-sm text-label-sm uppercase text-on-surface-variant"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="service"
                  className="font-label-sm text-label-sm uppercase text-on-surface-variant"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Full-Stack Web App</option>
                  <option>Landing Page</option>
                  <option>UI/UX Design</option>
                  <option>API Development</option>
                  <option>MVP Bundle</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-label-sm text-label-sm uppercase text-on-surface-variant"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>
              <div className="md:col-span-2">
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:brightness-110 active:scale-[0.99] transition-all"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span className="font-body-md">hello@a3tech.dev</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
