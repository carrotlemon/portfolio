import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
                <motion.div variants={fadeUp} className="mb-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
                </motion.div>

                <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/carrotlemon"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeUp}
                        className="contact-item"
                    >
                        <div
                            className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                            style={{ background: '#111111', border: '1px solid #1f1f1f' }}
                        >
                            <img src={GithubIcon} alt="GitHub" className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#444444' }}>GitHub</p>
                            <p className="text-sm text-white">carrotlemon</p>
                        </div>
                        <ExternalLink size={13} style={{ color: '#444444' }} className="flex-shrink-0" />
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
                            className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                            style={{ background: '#111111', border: '1px solid #1f1f1f' }}
                        >
                            <img src={LinkedInIcon} alt="LinkedIn" className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#444444' }}>LinkedIn</p>
                            <p className="text-sm text-white">Trevor Kim</p>
                        </div>
                        <ExternalLink size={13} style={{ color: '#444444' }} className="flex-shrink-0" />
                    </motion.a>

                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
