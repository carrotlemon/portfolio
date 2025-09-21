import './App.css'

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx'
import Contact from './components/Contact.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';

import DoryPowerImage from './assets/experiences/dorypower.png';

import ParticleImage from './assets/projects/particle.png';
import MealmapImage from './assets/projects/mealmap.png';
import CRaysImage from './assets/projects/c-rays.png';
import TimeImage from './assets/projects/time-quizzer.png';

// link to svgs: https://devicon.dev/ https://techicons.dev/

export default function App() {
    const [activeSection, setActiveSection] = useState('hero');

    const projects = [
        {name:"Particle", image:ParticleImage, link:"https://particle-life-js.vercel.app/", desc:"Simulation for visualizing attraction and repulsion interactions between several thousand particles", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        ]},
        {name:"Meal Map", image:MealmapImage, link:"https://amealmap.vercel.app/", desc:"A website for tracking ingredients for meals so you can grocery shop without forgetting about ingredients", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        ]},
        {name:"C-Rays", image:CRaysImage, link:"https://github.com/carrotlemon/C-rays", desc:"Simple 2d ray tracer", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        ]},
        {name:"TimeQuizzer", image:TimeImage, link:"https://github.com/carrotlemon/TimeQuizzer", desc:"A clock reading practice desktop application", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
        ]},
    ];

    const experiences = [
        {
            name: "Software Engineer Intern",
            company: "DoryPower",
            link: "https://dorypower.com/",
            desc: "Led development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.",
            technologies: [
                { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            ],
            image: DoryPowerImage
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                    if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex-col bg-[#F7FCFE]">
            {/* Navigation */}
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            {/* Hero Section */}
            <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-green-50">
                <Hero scrollToSection={scrollToSection} />
            </section>
            {/* Experience */}
            <section id="experience" className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Experience
                        </h2>
                    </div>
                    
                    <div className="flex justify-center gap-8">
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Projects
                        </h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
                <Contact />
            </section>
        </div>
    )
}
