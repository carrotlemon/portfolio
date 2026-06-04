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
                background: 'rgba(9, 9, 15, 0.82)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-[62px]">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="gradient-text text-lg font-bold tracking-tight"
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
                        className="md:hidden p-2 rounded-lg text-[#5a5a80] hover:text-white transition-colors"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}
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
                <div style={{ background: 'rgba(9,9,15,0.96)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    scrollToSection(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'text-[#f97316] bg-[rgba(249,115,22,0.08)]'
                                        : 'text-[#5a5a80] hover:text-white'
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
