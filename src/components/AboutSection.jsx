import { BrainCircuit, Briefcase, Cloud, Code, User } from "lucide-react";
import { FaBrain } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Java Developer
              
            </h3>

            <p className="text-muted-foreground">
              I’m a passionate and results-driven developer skilled in both
              frontend and backend technologies. I specialize in building 
              scalable, efficient, and visually appealing web applications using 
              <span className="font-semibold text-primary"> ReactJS, Spring Boot,</span> 
              and <span className="font-semibold text-primary">Oracle SQL</span>.
            </p>

            <p className="text-muted-foreground">
              My expertise spans across HTML, CSS, JavaScript, Bootstrap, and
              Java-based backend development. I love integrating modern frontend
              frameworks with robust backend APIs to deliver seamless user
              experiences.
            </p>

            <p className="text-muted-foreground">
              I’m continuously learning and exploring new technologies like
              cloud computing and AI/ML to expand my capabilities and stay ahead
              in the ever-evolving tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1mNEKVUJ1t34Jl85UEJKTEQt5OgTSRNm1/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Development</h4>
                  <p className="text-muted-foreground">
                     Crafting interactive and responsive UIs using HTML, CSS,
                    JavaScript, Bootstrap, and ReactJS to deliver exceptional user experiences.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
    Learning powerful RESTful APIs and business logic using
                    Java and Spring Boot, with efficient data management through Oracle SQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                   AI Ml{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    Learning and Developing my skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
