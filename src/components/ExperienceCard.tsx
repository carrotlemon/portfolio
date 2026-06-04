import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ExperienceCardProps {
  name: string;
  company: string;
  link: string;
  desc: string;
  technologies: { name: string; svg: string }[];
  image: string;
}

const ExperienceCard = ({ name, company, link, desc, technologies, image }: ExperienceCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 160;
    const shouldTruncate = desc.length > maxLength;
    const displayDesc = shouldTruncate && !isExpanded ? desc.slice(0, maxLength) + '...' : desc;

    return (
        <div className="card rounded-2xl overflow-hidden group w-full max-w-xl">
            {/* Image */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
                style={{ height: '220px' }}
            >
                <img
                    src={image}
                    alt={company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(16,16,28,0.85) 0%, transparent 55%)' }}
                />
                {/* Company overlay */}
                <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
                    <span className="text-sm font-semibold" style={{ color: '#f97316' }}>{company}</span>
                    <ExternalLink size={11} style={{ color: '#f97316' }} />
                </div>
            </a>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-base font-semibold text-white mb-3">{name}</h3>

                <div className="mb-5">
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

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{
                                background: 'rgba(168,85,247,0.1)',
                                border: '1px solid rgba(168,85,247,0.22)',
                                color: '#c084fc',
                            }}
                        >
                            <img src={tech.svg} alt={tech.name} className="w-4 h-4 object-contain" />
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
