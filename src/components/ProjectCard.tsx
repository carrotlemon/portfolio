import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  link: string;
  desc: string;
  tech: string[];
  image: string;
}

const ProjectCard = ({ name, link, desc, tech, image }: ProjectCardProps) => {
    return (
        <div className="card group flex flex-row" style={{ minHeight: '220px' }}>
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
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradual fade into card bg */}
                <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to right, transparent 35%, rgba(13,13,13,0.6) 65%, rgba(13,13,13,1) 100%)' }}
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div
                        className="w-8 h-8 flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.9)' }}
                    >
                        <ExternalLink size={13} className="text-black" />
                    </div>
                </div>
            </a>

            {/* Content — right */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-5">
                    {tech.map((t, i) => (
                        <img key={i} src={t} alt="" className="tech-icon" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
