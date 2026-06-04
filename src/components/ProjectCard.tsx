import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  name: string;
  link: string;
  desc: string;
  tech: string[];
  image: string;
}

const ProjectCard = ({ name, link, desc, tech, image }: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
    const shouldTruncate = desc.length > maxLength;
    const displayDesc = shouldTruncate && !isExpanded ? desc.slice(0, maxLength) + '...' : desc;

    return (
        <div className="card rounded-2xl group h-full flex flex-col">
            {/* Image */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-t-2xl flex-shrink-0"
                style={{ height: '200px' }}
            >
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(16,16,28,0.8) 0%, transparent 50%)' }}
                />
                {/* External link indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(249,115,22,0.9)', backdropFilter: 'blur(8px)' }}
                    >
                        <ExternalLink size={13} className="text-white" />
                    </div>
                </div>
            </a>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white mb-2">{name}</h3>

                <div className="flex-1 mb-4">
                    <p className="text-sm leading-relaxed" style={{ color: '#8080a8' }}>
                        {displayDesc}
                    </p>
                    {shouldTruncate && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-1 mt-2 text-xs font-medium transition-colors"
                            style={{ color: '#f97316' }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#fb923c')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#f97316')}
                        >
                            {isExpanded
                                ? <><span>Show Less</span><ChevronUp size={13} /></>
                                : <><span>Show More</span><ChevronDown size={13} /></>
                            }
                        </button>
                    )}
                </div>

                {/* Tech icons */}
                <div className="flex flex-wrap gap-2 items-center">
                    {tech.map((t, i) => (
                        <img key={i} src={t} alt="" className="tech-icon" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
