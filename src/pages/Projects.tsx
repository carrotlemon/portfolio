import { AnimatePresence, motion, time } from "framer-motion";
import { useState } from "react";
import ParticleImage from '../assets/projects/particle.png';
import MealmapImage from '../assets/projects/mealmap.png';
import CRaysImage from '../assets/projects/c-rays.png';
import TimeImage from '../assets/projects/time-quizzer.png';


export default function Projects() {

    return (
        <div className="flex-col justify-center pt-40 bg-green-100">
            <div className="flex justify-center h-50">
                <div className="flex-col justify-center">   
                    <div className="pl-30 text-4xl">
                        Particle Simulator
                    </div>
                    <div className="pl-30 text-md w-108">
                        description 
                    </div>
                </div>
                
                {/* angled image that points towards cursor and has grey transparent shadow behind it and rounded corners*/}
                <div className="mx-30">
                    <img src={ParticleImage} className="w-[30vw]" alt="Particle Simulation Image"/>
                </div>
            </div>
            <div className="flex justify-center h-50 my-30">
                {/* angled image that points towards cursor and has grey transparent shadow behind it and rounded corners*/}
                <div className="mx-30">
                    <img src={MealmapImage} alt="meal map" className="w-[30vw]"/>
                </div>
                <div className="flex-col justify-center bg-red-200">   
                    <div className="flex justify-end text-4xl">
                        Meal Map
                    </div>
                    <div className="flex justify-end text-md">
                        description 
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-50 my-30">
                <div className="flex-col justify-center">   
                    <div className="flex justify-center text-4xl">
                        Time Quizzer
                    </div>
                    <div className="flex justify-center text-md w-108">
                        description 
                    </div>
                </div>
                
                {/* angled image that points towards cursor and has grey transparent shadow behind it and rounded corners*/}
                <div className="mx-30">
                    <img src={TimeImage} alt="Time Quizzer" className="w-[20vw]"/>
                </div>
            </div>
            <div className="flex justify-center h-50 my-30">
                {/* angled image that points towards cursor and has grey transparent shadow behind it and rounded corners*/}
                <div className="mx-30">
                    <img src={CRaysImage} alt="C Rays" className="w-[20vw]"/>
                </div>
                <div className="flex-col justify-center bg-red-200">   
                    <div className="flex justify-end text-4xl">
                        C Rays
                    </div>
                    <div className="flex justify-end text-md">
                        description 
                    </div>
                </div>
            </div>
        </div>
    );
}