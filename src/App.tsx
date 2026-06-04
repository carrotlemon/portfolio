import './App.css'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx'
import Contact from './components/Contact.tsx';
import ProjectCard from './components/ProjectCard.tsx';
import ExperienceCard from './components/ExperienceCard.tsx';

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
            const scrollPosition = window.scrollY + 120;

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
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#09090f', color: '#f0eeff' }}>
            {/* Background ambient orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full"
                     style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.055) 0%, transparent 60%)' }} />
                <div className="absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full"
                     style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.055) 0%, transparent 60%)' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                     style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.025) 0%, transparent 60%)' }} />
            </div>

            <div className="relative z-10">
                <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

                {/* Hero */}
                <section id="hero" className="min-h-screen flex items-center pt-16">
                    <Hero scrollToSection={scrollToSection} />
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="gradient-divider" />
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
                                <p className="section-label mb-3">Where I've Worked</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
                            </motion.div>

                            <motion.div variants={stagger} className="flex justify-center gap-8">
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
                    <div className="gradient-divider" />
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
                                <p className="section-label mb-3">Things I've Built</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
                            </motion.div>

                            <motion.div
                                variants={stagger}
                                className="grid md:grid-cols-2 gap-5"
                            >
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeUp}
                                        className={
                                            index === projects.length - 1 && projects.length % 2 !== 0
                                                ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full'
                                                : ''
                                        }
                                    >
                                        <ProjectCard {...project} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="gradient-divider" />
                </div>

                {/* Contact */}
                <section id="contact" className="py-24">
                    <Contact />
                </section>

                {/* Footer */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="gradient-divider mb-8" />
                    <p className="text-center text-xs" style={{ color: '#3a3a60' }}>
                        Built by Trevor Kim
                    </p>
                </div>
            </div>
        </div>
    );
}
