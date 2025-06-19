import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Home,
  Briefcase,
  Mail,
  User,
  Code,
  Github,
  Linkedin,
} from "lucide-react";

export const NavigationBar = () => {
  return (
    <Dock className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <DockIcon
        href="#home"
        title="Home"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("home");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Home size={25} />
      </DockIcon>
      <DockIcon
        href="#about"
        title="About"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("about");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <User size={25} />
      </DockIcon>
      <DockIcon
        href="#services"
        title="Services"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("services");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Code size={25} />
      </DockIcon>
      <DockIcon
        href="#projects"
        title="Projects"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("projects");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Briefcase size={25} />
      </DockIcon>
      <DockIcon
        href="#contact"
        title="Contact"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("contact");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Mail size={25} />
      </DockIcon>

      <DockIcon
        href="https://github.com"
        target="_blank"
        title="GitHub Profile"
        onClick={(e) => {
          window.open("https://github.com", "_blank");
        }}
      >
        <Github size={25} />
      </DockIcon>
      <DockIcon
        href="https://linkedin.com"
        target="_blank"
        title="LinkedIn Profile"
        onClick={(e) => {
          window.open("https://linkedin.com", "_blank");
        }}
      >
        <Linkedin size={25} />
      </DockIcon>
    </Dock>
  );
};
