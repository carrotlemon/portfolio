import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid #1a1a1a',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[62px]">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-lg font-bold tracking-tight text-white"
                    >
                        Trevor Kim
                    </button>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-[#555] hover:text-white transition-colors"
                        style={{ border: '1px solid #1f1f1f' }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div style={{ background: '#000', borderTop: '1px solid #1a1a1a' }}>
                    <div className="px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    scrollToSection(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'text-[#a855f7]'
                                        : 'text-[#555] hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
