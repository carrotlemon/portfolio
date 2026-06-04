import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import GithubIcon from '../assets/icons/github-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
};

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <motion.div variants={fadeUp} className="mb-14">
                    <p className="section-label mb-3">Say Hello</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
                </motion.div>

                <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">

                    {/* Email */}
                    <motion.a
                        href="mailto:trevorkim3141@gmail.com"
                        variants={fadeUp}
                        className="contact-item"
                    >
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(249,115,22,0.12)' }}
                        >
                            <Mail size={16} style={{ color: '#f97316' }} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#5a5a80' }}>Email</p>
                            <p className="text-sm text-white truncate">trevorkim3141@gmail.com</p>
                        </div>
                    </motion.a>

                    {/* Location */}
                    <motion.div variants={fadeUp} className="contact-item">
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(168,85,247,0.12)' }}
                        >
                            <MapPin size={16} style={{ color: '#c084fc' }} />
                        </div>
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#5a5a80' }}>Location</p>
                            <p className="text-sm text-white">Cleveland, OH</p>
                        </div>
                    </motion.div>

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/carrotlemon"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeUp}
                        className="contact-item"
                    >
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(255,255,255,0.07)' }}
                        >
                            <img src={GithubIcon} alt="GitHub" className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#5a5a80' }}>GitHub</p>
                            <p className="text-sm text-white">carrotlemon</p>
                        </div>
                        <ExternalLink size={13} style={{ color: '#5a5a80' }} className="flex-shrink-0" />
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/trevor-kim-4b3949300/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeUp}
                        className="contact-item"
                    >
                        <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: 'rgba(10,102,194,0.18)' }}
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#5a5a80' }}>LinkedIn</p>
                            <p className="text-sm text-white">Trevor Kim</p>
                        </div>
                        <ExternalLink size={13} style={{ color: '#5a5a80' }} className="flex-shrink-0" />
                    </motion.a>

                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
