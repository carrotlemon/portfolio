import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  link: string;
  desc: string;
  tech: { name: string; svg: string }[];
  image: string;
}

const ProjectCard = ({ name, link, desc, tech, image }: ProjectCardProps) => {
    return (
        <div className="card group flex flex-col md:flex-row">
            {/* Image */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 overflow-hidden h-48 md:h-auto w-full md:w-[380px]"
            >
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Mobile: fade to bottom */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.95) 100%)' }}
                />
                {/* Desktop: fade to right */}
                <div
                    className="absolute inset-0 hidden md:block"
                    style={{ background: 'linear-gradient(to right, transparent 35%, rgba(13,13,13,0.6) 65%, rgba(13,13,13,1) 100%)' }}
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.9)' }}>
                        <ExternalLink size={13} className="text-black" />
                    </div>
                </div>
            </a>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium"
                            style={{ background: '#111111', border: '1px solid #1f1f1f', color: '#888888' }}
                        >
                            <img src={t.svg} alt={t.name} className="w-4 h-4 object-contain" />
                            {t.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
