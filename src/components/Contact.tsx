import { Mail, Phone, MapPin } from 'lucide-react';

import DiscordIcon from '../assets/icons/discord-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg';

const Contact = () => {
    return <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2>boop</h2>
        </div>
        
        <div className="md:flex justify-around sm:flex-row">
            <div className="flex mx-10 items-center gap-4 my-3">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">trevorkim3141@gmail.com</p>
                </div>
            </div>
            
            <div className="flex mx-10 items-center gap-4 my-3">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (330) 888-0405</p>
                </div>
            </div>
            
            <div className="flex mx-10 items-center gap-4 my-3">
                <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Clevenland, OH</p>
                </div>
            </div>

            <a className="flex mx-10 items-center gap-4 my-3" href="https://github.com/carrotlemon" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <img className="w-8 h-8" src={DiscordIcon} ></img>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 text-xl">Discord</h3>
                </div>
            </a>

            <a className="flex mx-10 items-center gap-4 my-3" href="https://www.linkedin.com/in/trevor-kim-4b3949300/" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <img className="w-8 h-8" src={LinkedInIcon} ></img>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 text-xl">LinkedIn</h3>
                </div>
            </a>

        </div>
    </div>;
};

export default Contact;
