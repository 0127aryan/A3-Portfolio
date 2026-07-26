import Navbar from "@/components/Navbar";
import SceneWrapper from "@/components/SceneWrapper";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative">
        {/* BACKGROUND 3D CANVAS */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
           <SceneWrapper /> 
        </div>

        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center relative px-4 pt-24 pb-8">
          <div className="z-10 text-center glass p-6 sm:p-10 md:p-12 rounded-3xl md:rounded-[2.5rem] max-w-3xl w-full mx-auto shadow-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-sm pb-2">
              A³ Technologies
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-foreground/80 mb-6 md:mb-8 font-medium">
              Premium Freelance Web Development & Full Stack Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="px-8 py-4 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all hover:scale-105 shadow-xl shadow-pink-500/30">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full glass bg-white/10 text-foreground font-semibold hover:bg-white/20 transition-all hover:scale-105 shadow-lg">
                Contact Me
              </a>
            </div>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <section id="about" className="py-5 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">About Me</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">I specialize in building high-performance, visually stunning web applications that elevate your brand.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">Services Offered</h3>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-center gap-3"><span className="text-2xl">✨</span> Custom Web Development</li>
                <li className="flex items-center gap-3"><span className="text-2xl">⚡</span> Full Stack Solutions</li>
                <li className="flex items-center gap-3"><span className="text-2xl">🚀</span> Landing Pages</li>
                <li className="flex items-center gap-3"><span className="text-2xl">💼</span> Personal Portfolios</li>
                <li className="flex items-center gap-3"><span className="text-2xl">📝</span> WordPress Websites</li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-violet-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Nest.js', 'Node.js', 'Express.js', 'REST APIs', 'Three.js', 'TailwindCSS', 'WordPress', 'SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'MSSQL','Supabase','ShadcnUI', 'MUI'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full glass bg-white/10 text-sm font-semibold text-foreground/90">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <ProjectsSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <div className="glass p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-mint-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">Let's Build Something Great</h2>
            <p className="text-lg text-foreground/80 mb-2 relative z-10">Ready to take your online presence to the next level? Get in touch today.</p>
            <p className="text-sm font-medium text-pink-500 mb-8 relative z-10">
              <a href="mailto:acubetechnologies2003@gmail.com" className="hover:underline inline-flex items-center gap-2">
                ✉️ acubetechnologies2003@gmail.com
              </a>
            </p>
            
            <form 
              action="https://formsubmit.co/acubetechnologies2003@gmail.com" 
              method="POST" 
              className="max-w-md mx-auto relative z-10 space-y-4"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from A³ Technologies Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full px-6 py-4 rounded-full glass bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-foreground/50 text-foreground" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="w-full px-6 py-4 rounded-full glass bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-foreground/50 text-foreground" 
              />
              <textarea 
                name="message" 
                placeholder="Tell me about your project..." 
                rows={4} 
                required 
                className="w-full px-6 py-4 rounded-3xl glass bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-foreground/50 text-foreground resize-none"
              ></textarea>
              <button type="submit" className="w-full py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-pink-500 hover:text-white transition-colors shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pb-8 pt-12 text-foreground/50 font-medium text-sm z-10 relative mt-auto">
          <p>
            &copy; 2025 A³ Technologies. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
