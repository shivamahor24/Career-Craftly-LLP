import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/career_craftly/', label: 'Instagram' },
        { icon: Youtube, href: 'https://www.youtube.com/@anantupadhyayy', label: 'YouTube' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/107052137/', label: 'LinkedIn' },
    ];

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Programs', to: '/services' },
        { label: 'Event Gallery', to: '/events' },
        { label: 'Contact Us', to: '/contact' },
    ];

    const contactInfo = [
        { icon: Mail, text: 'anant@careercraftly.org', href: 'mailto:anant@careercraftly.org' },
        { icon: Phone, text: '+91 86400 58346', href: 'tel:+918640058346' },
        { icon: MapPin, text: 'India (Remote & In-Person)', href: null },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-[#0A0A0A] text-white">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[200px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-b-full" />
            
            <footer className="relative z-10 w-full pt-20 pb-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">

                        {/* Column 1 — Brand */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <img src="/assets/tranferentlogo.png" alt="CareerCraftly" className="w-7 h-7 object-contain" />
                                </div>
                                <span className="text-xl font-display font-bold tracking-tight">CareerCraftly</span>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-400 mb-8">
                                Empowering professionals and businesses with AI-powered solutions, expert career coaching, and cutting-edge digital services.
                            </p>
                            {/* Social */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400 transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2 — Navigation */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-gray-200">Navigation</h4>
                            <ul className="space-y-4">
                                {navLinks.map(({ label, to }) => (
                                    <li key={label}>
                                        <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — Services */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-gray-200">Services</h4>
                            <ul className="space-y-4">
                                {['Website Development', 'App Development', 'AI Agents', 'Career Coaching', 'Resume Optimization', 'Digital Marketing'].map(s => (
                                    <li key={s}>
                                        <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                            {s}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 — Contact */}
                        <div>
                            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-gray-200">Contact</h4>
                            <ul className="space-y-4">
                                {contactInfo.map(({ icon: Icon, text, href }) => (
                                    <li key={text} className="flex items-start gap-3">
                                        <Icon size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                        {href ? (
                                            <a href={href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">{text}</a>
                                        ) : (
                                            <span className="text-sm text-gray-400">{text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Flux Mind Studios */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-xs text-gray-500 mb-2">Parent company</p>
                                <a href="https://www.fluxmindstudios.com/" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-white transition-colors duration-200 group"
                                >
                                    Flux Mind Studios <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} CareerCraftly. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500">
                            Built with <span className="text-blue-500">♥</span> for your career success · Powered by AI
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
