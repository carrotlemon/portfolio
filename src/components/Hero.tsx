import { motion } from 'framer-motion';
import ProfileImage from '../assets/me.jpg';

const ease = [0.22, 1, 0.36, 1];

const Hero = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Text */}
                <motion.div
                    className="lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease }}
                >
                    <motion.p
                        className="section-label mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease }}
                    >
                        Software Engineer
                    </motion.p>

                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.65, ease }}
                    >
                        <span className="text-white">Hi, I'm</span>
                        <br />
                        <span style={{ color: '#a855f7' }}>Trevor Kim</span>
                    </motion.h1>

                    <motion.p
                        className="text-sm mb-8 leading-relaxed max-w-sm mx-auto lg:mx-0"
                        style={{ color: '#666666' }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.55, ease }}
                    >
                        Just a normal guy that enjoys coding.
                        Hire me if you want to.{' '}
                        <span style={{ color: '#a855f7' }}>:&gt;</span>
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.55, ease }}
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-primary px-6 py-2.5 text-sm"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-outline px-6 py-2.5 text-sm"
                        >
                            Contact
                        </button>
                    </motion.div>
                </motion.div>

                {/* Profile image — circular fade mask */}
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.75, ease }}
                >
                    <div
                        className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden"
                        style={{
                            WebkitMaskImage: 'radial-gradient(circle, black 42%, transparent 72%)',
                            maskImage: 'radial-gradient(circle, black 42%, transparent 72%)',
                        }}
                    >
                        <img
                            src={ProfileImage}
                            alt="Trevor Kim"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
