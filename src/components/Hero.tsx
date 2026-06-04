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
                        className="section-label mb-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease }}
                    >
                        Software Engineer
                    </motion.p>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.65, ease }}
                    >
                        <span className="text-white">Hi, I'm</span>
                        <br />
                        <span className="gradient-text">Trevor Kim</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg mb-10 leading-relaxed max-w-md mx-auto lg:mx-0"
                        style={{ color: '#8080a8' }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.55, ease }}
                    >
                        Just a normal guy that enjoys coding.
                        Hire me if you want to.{' '}
                        <span style={{ color: '#c084fc' }}>:&gt;</span>
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.55, ease }}
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-orange px-7 py-3 rounded-xl"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-purple-outline px-7 py-3 rounded-xl"
                        >
                            Get In Touch
                        </button>
                    </motion.div>
                </motion.div>

                {/* Profile image */}
                <motion.div
                    className="lg:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.75, ease }}
                >
                    <div className="relative">
                        {/* Ambient glow behind image */}
                        <div
                            className="absolute inset-0 rounded-full profile-glow"
                            style={{
                                background: 'conic-gradient(from 0deg, rgba(249,115,22,0.4), rgba(168,85,247,0.4), rgba(249,115,22,0.4))',
                                filter: 'blur(28px)',
                                transform: 'scale(1.15)',
                                borderRadius: '50%',
                            }}
                        />

                        {/* Gradient border ring */}
                        <div
                            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px]"
                            style={{ background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)' }}
                        >
                            <div
                                className="w-full h-full rounded-full overflow-hidden"
                                style={{ background: '#10101c' }}
                            >
                                <img
                                    src={ProfileImage}
                                    alt="Trevor Kim"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div
                            className="absolute -top-3 -right-3 w-6 h-6 rounded-full"
                            style={{ background: 'rgba(249,115,22,0.5)', filter: 'blur(6px)' }}
                        />
                        <div
                            className="absolute -bottom-5 -left-5 w-10 h-10 rounded-full"
                            style={{ background: 'rgba(168,85,247,0.35)', filter: 'blur(10px)' }}
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
