import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import CursorParallax from './CursorParallax'

import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

export default function Navbar() {

    return (<>
        <BrowserRouter>
            <div className="fixed w-full flex justify-center py-5 bg-white/30 backdrop-blur-md">
                <Link className="mx-10" to='/'>Home</Link>
                <Link className="mx-10" to='/projects'>Projects</Link>
                <Link className="mx-10" to='/experience'>Experience</Link>
                <Link className="mx-10" to='/about'>About</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/experience' element={<Experience />}/>
                <Route path='/about' element={<About />}/>
            </Routes>
        </BrowserRouter>    
    </>);
};