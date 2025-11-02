import { Github, Linkedin, Mail, MapPin, Phone, Twitch, X } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got a project in mind or just want to connect?
I’d love to hear from you and explore how we can build something great together!
        </p>

        {/* Contact Information Section */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          {/* Flex Row for Email, Phone, Address */}
          <div className="flex flex-wrap justify-center gap-12">
            {/* Email */}
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Email</h4>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
               saikatsamanta624@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+919382179280"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9382179280
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Bengaluru, Karnataka - 560037
              </p>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="pt-10">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/saikat-samanta-7b133a256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Twitch className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://leetcode.com/u/saiaktsamanta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/Saikat-93"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
