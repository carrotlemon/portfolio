import './App.css'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx'
import Contact from './components/Contact.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';

import CapitalOneImage from './assets/experiences/capitalone.png'
import DoryPowerImage from './assets/experiences/dorypower.png';
import PypilerImage from './assets/projects/pypiler.png'
import ParticleImage from './assets/projects/particle.png';
import MealmapImage from './assets/projects/mealmap.png';
import CRaysImage from './assets/projects/c-rays.png';
import TimeImage from './assets/projects/time-quizzer.png';

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
    const [activeSection, setActiveSection] = useState('hero');

    const projects = [
        {
            name: "Pypiler",
            image: PypilerImage,
            link: "https://github.com/carrotlemon/PyPiler",
            desc: "Python to C++ Transpiler with enough scope to translate real coding interview questions!",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            ]
        },
        {
            name: "Particle",
            image: ParticleImage,
            link: "https://particle-life-js.vercel.app/",
            desc: "Simulation for visualizing attraction and repulsion interactions between several thousand particles",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            ]
        },
        {
            name: "Meal Map",
            image: MealmapImage,
            link: "https://amealmap.vercel.app/",
            desc: "A website for tracking ingredients for meals so you can grocery shop without forgetting about ingredients",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            ]
        },
        {
            name: "C-Rays",
            image: CRaysImage,
            link: "https://github.com/carrotlemon/C-rays",
            desc: "Simple 2d ray tracer built in C",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
            ]
        },
        {
            name: "TimeQuizzer",
            image: TimeImage,
            link: "https://github.com/carrotlemon/TimeQuizzer",
            desc: "A clock reading practice desktop application",
            tech: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
            ]
        },
    ];

    const experiences = [
        {
            name: "Tech Incubator Intern",
            company: "Capital One",
            link: "https://www.capitalone.com",
            desc: "Collaborated with a team to evaluate chatbot model effectiveness using Python, implementing and analyzing metrics to assess performance and drive data-informed model improvements.",
            technologies: [
                { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}
            ],
            image: CapitalOneImage
        },
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
            let active = 'hero';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (!element) continue;
                if (element.getBoundingClientRect().top < window.innerHeight * 0.6) {
                    active = section;
                }
            }
            setActiveSection(active);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#000000', color: '#ffffff' }}>
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

            {/* Hero */}
            <section id="hero" className="min-h-screen flex items-center pt-16">
                <Hero scrollToSection={scrollToSection} />
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="divider" />
            </div>

            {/* Experience */}
            <section id="experience" className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} className="mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
                        </motion.div>

                        <motion.div variants={stagger} className="flex flex-col gap-5">
                            {experiences.map((experience, index) => (
                                <motion.div key={index} variants={fadeUp}>
                                    <ExperienceCard {...experience} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="divider" />
            </div>

            {/* Projects */}
            <section id="projects" className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                    >
                        <motion.div variants={fadeUp} className="mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
                        </motion.div>

                        <motion.div
                            variants={stagger}
                            className="flex flex-col gap-5"
                        >
                            {projects.map((project, index) => (
                                <motion.div key={index} variants={fadeUp}>
                                    <ProjectCard {...project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="divider" />
            </div>

            {/* Contact */}
            <section id="contact" className="py-24">
                <Contact />
            </section>

            {/* Footer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <div className="divider mb-8" />
                <p className="text-center text-xs" style={{ color: '#333333' }}>
                    Built by Trevor Kim
                </p>
            </div>
        </div>
    );
}
