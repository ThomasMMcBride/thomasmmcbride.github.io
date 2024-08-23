import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT =
`Hello! My name is Thomas, and I am an Honors Computer Science major,
concentrating in Artificial Intelligence, with a minor in Psychology at
Northeastern University. I have a strong interest in computer science,
data science, and artificial intelligence. I have completed two internships at Google, where
I did web development and test automation among other things. After completing
my Bachelor's at Northeastern, I plan on pursuing my Master's along with working
in the industry. Please feel free to contact me through any of my socials.`;


export const EXPERIENCES = [
 {
   year: "February 2023 - current",
   role: "Academic Chair",
   company: "ColorStack NEU",
   description: `Responsible for equipping African-American and Hispanic computer science students with the tools and skills necessary for academic and professional success`,
   technologies: [],
 },
 {
   year: "Summer 2024",
   role: "Software Engineer Intern",
   company: "Google",
   description: `I worked with the Payments team, improving their internal screening tool's usability by developing a help widget. This help widget aided in the smooth transition from the legacy tool.`,
   technologies: ["Python", "Large Language Models"],
 },
 {
   year: "Summer 2023",
   role: "STEP Intern",
   company: "Google",
   description: `I worked on the Google Home EngProd team, automating and streamlining integration tests using YAML/DSL-formatted functional tests and LLMs. I was able to introduce a new testing framework for Google Home Web.


As a side project, I authored a Python script that auto-corrected bugged tests within the Google Nest App code base, leveraging an LLM to do so. The tool makes real-time edits to the user's workspace and has a ~80% success rate, significantly reducing the manual labor needed to refactor bugged tests within the code base.`,
   technologies: ["Javascript"],
 },
 {
   year: "September 2022 - current",
   role: "Teaching Assistant",
   company: "Khoury College Of Computer Sciences",
   description: `Taught students the fundamentals of computation and computational reasoning in BSL/ISL (subsets of Racket).


Taught students the intuition of class-based program design and the design of abstractions that support the design of reusable software and libraries in Java.`,
   technologies: ["Java", "Racket"],
 },
];


export const PROJECTS = [
 {
   title: "E-Commerce Website",
   image: project1,
   description:
     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
 },
 {
   title: "Task Management App",
   image: project2,
   description:
     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
   technologies: ["HTML", "CSS", "Angular", "Firebase"],
 },
 {
   title: "Portfolio Website",
   image: project3,
   description:
     "A personal portfolio website showcasing projects, skills, and contact information.",
   technologies: ["HTML", "CSS", "React", "Bootstrap"],
 },
 {
   title: "Blogging Platform",
   image: project4,
   description:
     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
 },
];


export const CONTACT = {
 address: "767 Fifth Avenue, New York, NY 10153 ",
 phoneNo: "+12 4555 666 00 ",
 email: "me@example.com",
};
