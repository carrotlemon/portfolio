import CursorParallax from '../components/CursorParallax'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
    
    
    return (<>
        <div className="flex justify-center bg-blue-100 pt-50 pb-100">
            <div className="basis-2/3">
                <div className="text-4xl">
                    Trevor Kim
                </div>
                
                <div className="flex justify-center text-md text-wrap w-80">
                    hi! I enjoy coding. If you have project ideas I think are cool, I'll be happy to join them!
                </div>
            </div>
            <div className="">
                <div>
                    tech stack here
                    React JS Svelte
                    C, C++
                </div>
            </div>        
        </div>
        
    </>);
};