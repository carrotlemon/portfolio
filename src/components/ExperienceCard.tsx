import { ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  name: string;
  company: string;
  link: string;
  desc: string;
  technologies: { name: string; svg: string }[];
  image: string;
}

const ExperienceCard = ({ name, company, link, desc, technologies, image }: ExperienceCardProps) => {
    return (
        <div className="card overflow-hidden group flex flex-row w-full" style={{ minHeight: '220px' }}>
            {/* Image — left */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 overflow-hidden"
                style={{ width: '380px' }}
            >
                <img
                    src={image}
                    alt={company}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradual fade into card bg */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, transparent 35%, rgba(13,13,13,0.6) 65%, rgba(13,13,13,1) 100%)' }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                    <span className="text-sm font-semibold" style={{ color: '#a855f7' }}>{company}</span>
                    <ExternalLink size={11} style={{ color: '#a855f7' }} />
                </div>
            </a>

            {/* Content — right */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium"
                            style={{
                                background: '#111111',
                                border: '1px solid #1f1f1f',
                                color: '#888888',
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
