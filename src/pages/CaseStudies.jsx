import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Clock, Zap, Target, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ─── Reusable fade-in-up wrapper ─── */
const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ─── Section Badge ─── */
const Badge = ({ label }) => (
    <div className="inline-flex items-center space-x-2 bg-blue-50/50 border border-blue-100/50 rounded-full px-4 py-2 mb-6 shadow-sm">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold tracking-widest uppercase text-blue-900">{label}</span>
    </div>
);

const CaseStudies = () => {
    const navigate = useNavigate();

    const caseStudies = [
        {
            client: 'Multi-specialty Care',
            role: 'Healthcare',
            company: 'SaaS Platform',
            title: 'Modernizing Patient Care with Cloud SaaS',
            category: 'Cloud Engineering',
            date: 'March 2026',
            metrics: [
                { label: 'Compliance', value: '100%' },
                { label: 'Platform Scale', value: 'National' }
            ],
            description: 'Transitioned outdated, fragmented healthcare workflows into a secure, scalable cloud environment. Built a unified data platform using FHIR standards and launched a mobile-first patient portal with telemedicine integration.',
            color: 'from-blue-500 to-cyan-400',
            bgLight: 'bg-blue-50',
            textColor: 'text-blue-600'
        },
        {
            client: 'FinTech Firm',
            role: 'Financial',
            company: 'Services',
            title: 'Automating Financial Data Workflows with AI',
            category: 'AI Automation',
            date: 'February 2026',
            metrics: [
                { label: 'Manual Work', value: '-85%' },
                { label: 'Processing Speed', value: '10x Boost' }
            ],
            description: 'The client struggled with heavy manual workloads and inefficient financial data processing. We designed a custom AI-driven automation system for end-to-end data processing and intelligent workflow automation.',
            color: 'from-purple-500 to-indigo-500',
            bgLight: 'bg-purple-50',
            textColor: 'text-purple-600'
        },
        {
            client: 'Online Retailer',
            role: 'E-Commerce',
            company: 'Platform',
            title: 'Boosting Revenue via AI Recommendation Engines',
            category: 'AI Transformation',
            date: 'January 2026',
            metrics: [
                { label: 'Conversion Rate', value: '+40%' },
                { label: 'User Engagement', value: '+60%' }
            ],
            description: 'Faced with low conversion rates and static pricing, we deployed personalized AI recommendation engines and dynamic pricing mechanics tailored to real-time user behavior, significantly optimizing the customer journey.',
            color: 'from-emerald-500 to-teal-400',
            bgLight: 'bg-emerald-50',
            textColor: 'text-emerald-600'
        }
    ];

    return (
        <div className="pt-28 pb-0 min-h-screen bg-slate-50">
            {/* ══════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════ */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <FadeIn>
                            <Badge label="Client Success" />
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 tracking-tight mb-6">
                                Proof of Work
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light mb-10">
                                A closer look at the AI systems, career transformations, and growth strategies we build for ambitious professionals and brands.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                CASE STUDIES GRID
            ══════════════════════════════════════════ */}
            <section className="pb-32 relative z-10">
                <div className="container max-w-6xl">
                    <div className="flex flex-col gap-12 md:gap-24">
                        {caseStudies.map((study, index) => (
                            <FadeIn key={index} delay={0.1}>
                                <div className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                                    
                                    {/* Visual / Image Side */}
                                    <div className={`w-full lg:w-1/2 aspect-video lg:aspect-square max-h-[500px] rounded-3xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 cursor-pointer ${study.bgLight}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                                        <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-overlay" />
                                        
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl font-bold mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-500">
                                                {study.client.charAt(0)}
                                            </div>
                                            <h3 className="text-3xl font-display font-bold text-gray-900 mb-2">{study.client}</h3>
                                            <p className="text-gray-600 font-medium">{study.role} at {study.company}</p>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 flex flex-col">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm ${study.textColor}`}>
                                                {study.category}
                                            </span>
                                            <span className="text-sm font-medium text-gray-400">
                                                {study.date}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                                            {study.title}
                                        </h2>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                            {study.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-2 gap-6 mb-10 pt-8 border-t border-gray-100">
                                            {study.metrics.map((metric, i) => (
                                                <div key={i}>
                                                    <div className="text-3xl font-display font-black text-gray-900 mb-1">{metric.value}</div>
                                                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/btn self-start">
                                            Read Full Study 
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-100 transition-colors">
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                FINAL CTA
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container text-center max-w-3xl">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900">
                            Ready to write your own success story?
                        </h2>
                        <p className="text-lg text-gray-500 mb-10">
                            Book an intro call to explore our suite of services. We might have a waitlist.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="btn-primary"
                        >
                            Book a Free Consultation <ArrowRight size={16} />
                        </button>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
