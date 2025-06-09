import './App.css'

import ParticleImage from './assets/projects/particle.png';
import MealmapImage from './assets/projects/mealmap.png';
import CRaysImage from './assets/projects/c-rays.png';
import TimeImage from './assets/projects/time-quizzer.png';

export default function App() {

    const projects = [
        {name:"Particle", src:ParticleImage, link:"https://particle-life-js.vercel.app/", desc:"Simulation for visualizing attraction and repulsion interactions between several thousand particles", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        ]},
        {name:"Meal Map", src:MealmapImage, link:"https://amealmap.vercel.app/", desc:"A website for tracking ingredients for meals so you can grocery shop without forgetting about ingredients", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
        ]},
        {name:"C-Rays", src:CRaysImage, link:"https://github.com/carrotlemon/C-rays", desc:"Simple 2d ray tracer", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        ]},
        {name:"TimeQuizzer", src:TimeImage, link:"https://github.com/carrotlemon/TimeQuizzer", desc:"A clock reading practice desktop application", tech:[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
        ]},
    ];

    return (
        <div className="flex-col bg-[#F7FCFE]">  
            <div className="flex justify-center w-full pt-50 mb-50">
                <div className="flex-col">
                    <div className="flex align-items">
                        <p className="text-5xl mr-4">hi im</p>
                        <p className="text-5xl">Trevor Kim</p>
                    </div>
                    <p className="text-2xl">here are my projects</p>
                    <p className="text-2xl">hire me if you want to</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2">
                    {projects.map((project) => (
                        <a href={project.link} target="_blank">
                            <div className="transition-transform hover:scale-105 flex flex-col items-center m-[1vw] w-[38vw] h-[30vw] bg-[#D6E5BD] rounded-lg border-2 border-[#DCCCEC] shadow-lg shadow-gray-400 overflow-hidden">
                                <img src={project.src} alt={project.name} className="h-[20vw] w-[38vw] object-cover"/>
                                <p className="text-2xl font-bold my-2">{project.name}</p>
                                <div className="flex">
                                    {project.tech.map((icon) => (
                                        <img src={icon} alt="icon" className="object-cover rounded-lg w-10 m-2"/>
                                    ))}
                                </div>
                                
                                <p className="mx-10">{project.desc}</p>
                            </div>
                        </a>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}
