import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
    // ACM, Technica, Mathnasium, APCS
    return (<>
        <div className="grid pt-30 grid-cols-2">
            <div className="flex justify-center mx-10 my-10">
                ACM Web Developer
                img
                bullet points
            </div>
            <div className="flex justify-center mx-10 my-10">
                APCS-A Teaching Assistant
            </div>
            <div className="flex justify-center mx-10 my-10">
                Technica Brand Organizer
            </div>
            <div className="flex justify-center mx-10 my-10">
                Mathnasium Tutor
            </div>
            
        </div>
    </>);
};