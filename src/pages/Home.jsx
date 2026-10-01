import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, Sparkles, Clock, TrendingUp, Users, Target, Shield,
    Globe, Smartphone, Brain, User, FileText, BookOpen,
    CheckCircle, Star, ChevronRight, Zap, Award, BarChart3, Briefcase, Linkedin
} from 'lucide-react';
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

/* ─── Section Heading ─── */
const SectionHeading = ({ badge, title, subtitle, center = true }) => (
    <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
        <Badge label={badge} />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-gray-900">
            {title}
        </h2>
        {subtitle && (
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed">
                {subtitle}
            </p>
        )}
    </div>
);

const Home = () => {
    const navigate = useNavigate();

    /* ── Animated count-up ── */
    const countRef = useRef(null);
    const countInView = useInView(countRef, { once: true, margin: '-60px' });

    return (
        <div className="bg-white">

            {/* ══════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-5 py-2 mb-8 shadow-sm"
                        >
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-xs md:text-sm font-semibold tracking-wide text-gray-700 uppercase">AI SOLUTIONS FOR MODERN BUSINESSES</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold mb-8 tracking-tight text-gray-900 leading-[1.05]"
                        >
                            CAREER CRAFTLY
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-600"
                        >
                            Where intelligent automation meets real-world execution
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => navigate('/contact')}
                                className="w-full sm:w-auto btn-primary group"
                            >
                                <span className="group-hover:scale-110 transition-transform duration-300">✨</span> Get Started
                            </button>
                            <button
                                onClick={() => navigate('/services')}
                                className="w-full sm:w-auto btn-secondary"
                            >
                                Explore Services
                            </button>
                        </motion.div>
                    </div>

                    {/* Premium Product Mockup (Dribbble-inspired) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mx-auto max-w-5xl"
                    >
                        {/* Main Dashboard UI Mockup */}
                        <div className="relative rounded-2xl md:rounded-[2rem] bg-white border border-gray-200/60 shadow-2xl overflow-hidden z-10 p-2 bg-gradient-to-b from-gray-50 to-white">
                            <div className="rounded-xl md:rounded-[1.5rem] overflow-hidden border border-gray-100 bg-white shadow-inner flex flex-col h-[400px] md:h-[600px]">
                                {/* Mockup Header */}
                                <div className="h-12 border-b border-gray-100 flex items-center px-4 gap-3 bg-gray-50/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="ml-4 h-6 w-48 bg-white rounded-md border border-gray-200 flex items-center px-2">
                                        <div className="w-3 h-3 text-gray-300"><Globe size={12}/></div>
                                    </div>
                                </div>
                                {/* Mockup Content Area (Existing Product Concept) */}
                                <div className="flex flex-1 overflow-hidden">
                                    {/* Sidebar */}
                                    <div className="w-48 md:w-64 border-r border-gray-100 p-4 hidden sm:block bg-gray-50/30">
                                        <div className="flex items-center gap-2 mb-8">
                                            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                                                <Sparkles size={12} className="text-white"/>
                                            </div>
                                            <span className="font-bold text-sm">Dashboard</span>
                                        </div>
                                        <div className="space-y-2">
                                            {['AI Analytics', 'Career Profile', 'Projects', 'Marketing Agents', 'Settings'].map((item, i) => (
                                                <div key={i} className={`h-8 rounded-lg px-3 flex items-center text-xs font-medium ${i === 0 ? 'bg-white shadow-sm border border-gray-100 text-blue-600' : 'text-gray-500'}`}>
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Main Area */}
                                    <div className="flex-1 p-6 md:p-8 bg-slate-50/50">
                                        <div className="flex justify-between items-end mb-6">
                                            <div>
                                                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Project Growth</div>
                                                <div className="text-sm text-gray-500">Real-Time Performance Insights</div>
                                            </div>
                                            <div className="h-8 px-3 rounded-lg bg-blue-50 text-blue-600 flex items-center text-xs font-bold border border-blue-100">
                                                Last 30 Days
                                            </div>
                                        </div>
                                        {/* Chart Placeholder */}
                                        <div className="h-40 md:h-64 w-full bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-end gap-2 md:gap-4 relative overflow-hidden">
                                            {/* Decorative Chart Bars */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none" />
                                            {[40, 25, 60, 45, 80, 55, 95].map((h, i) => (
                                                <motion.div 
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: 1 + (i * 0.1), duration: 0.8 }}
                                                    className="flex-1 bg-blue-100 rounded-t-md relative group"
                                                >
                                                    <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-md transition-all group-hover:bg-blue-600" style={{ height: '70%' }} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards (Existing Data) */}
                        <motion.div 
                            className="floating-card top-10 -left-4 md:-left-12 lg:-left-20 animate-float"
                            style={{ width: '220px' }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <TrendingUp size={14} className="text-green-600" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold text-gray-500 uppercase">Avg. Career Growth</div>
                                    <div className="text-lg font-bold text-gray-900">3x Faster</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="floating-card bottom-20 -right-4 md:-right-12 lg:-right-20 animate-float-delayed"
                            style={{ width: '240px' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Users size={18} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">200+ Clients Served</div>
                                    <div className="text-xs font-medium text-gray-500">95% Success Rate</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SCROLLING TICKER
            ══════════════════════════════════════════ */}
            <div className="overflow-hidden py-6 border-y border-gray-100 bg-white">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                >
                    {[...Array(2)].map((_, i) =>
                        ['AI Automation', 'Career Coaching', 'Resume Optimization', 'Web Development', 'Digital Marketing', 'AI Agents', 'Interview Prep', 'Skill Development', 'Software Solutions'].map((label, j) => (
                            <span key={`${i}-${j}`} className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                                {label}
                            </span>
                        ))
                    )}
                </motion.div>
            </div>

            {/* ══════════════════════════════════════════
                QUOTE / MISSION
            ══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />
                <div className="container max-w-4xl text-center relative z-10">
                    <FadeIn>
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-12" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-8 leading-tight text-gray-900">
                            "We simplify complexity, amplify results, and turn businesses into industry leaders using the power of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI</span>."
                        </h2>
                        <div className="flex items-center justify-center space-x-4 mt-8">
                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                                <User size={20} className="text-white" />
                            </div>
                            <p className="font-semibold text-gray-700 tracking-wide uppercase text-sm">Founder, CareerCraftly</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                STATS — animated
            ══════════════════════════════════════════ */}
            <section className="py-20 bg-white border-b border-gray-100" ref={countRef}>
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Clients Served', value: '200+', icon: Users },
                            { label: 'Project Success Rate', value: '95%', icon: Target },
                            { label: 'Industry Partners', value: '20+', icon: Shield },
                            { label: 'Programs Delivered', value: '50+', icon: TrendingUp },
                        ].map((stat, index) => (
                            <FadeIn key={index} delay={index * 0.08}>
                                <div className="text-center p-8 rounded-3xl glass-card transition-transform hover:-translate-y-1 duration-300">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-blue-50 border border-blue-100">
                                        <stat.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-display font-extrabold mb-2 text-gray-900">{stat.value}</div>
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                WHY CHOOSE US
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mt-40 -mr-40" />
                <div className="container relative z-10">
                    <FadeIn><SectionHeading badge="Benefits" title="Why Brands Trust CareerCraftly" subtitle="AI-powered solutions that are fast, reliable, and built to scale with your ambitions." /></FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Real-Time Performance Insights', desc: 'Stay ahead with instant analytics and actionable intelligence that guides your next move.', icon: Clock, metric: 'Real-Time' },
                            { title: 'AI-Driven Growth Engine', desc: 'Make smarter decisions powered by real-time predictive data and intelligent recommendations.', icon: TrendingUp, metric: '97% Success' },
                            { title: 'Always in Sync', desc: 'Seamless collaboration with real-time team updates, keeping everyone aligned.', icon: Users, metric: 'Instant' }
                        ].map((benefit, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="glass p-8 rounded-2xl h-full flex flex-col group border border-gray-100 hover:border-blue-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{benefit.desc}</p>
                                    <div className="inline-flex items-center gap-2 self-start bg-gray-50 px-3 py-1.5 rounded-md text-sm font-semibold text-gray-700">
                                        <Zap size={14} className="text-blue-500" /> {benefit.metric}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-3 mt-16 max-w-4xl mx-auto">
                            {['Smart Automation', 'Scalable Systems', 'Cost Efficient', 'Real-Time Insights', 'Data-Driven Execution', 'Expert Mentors', 'Proven Frameworks'].map((item, index) => (
                                <div key={index} className="bg-gray-50/50 border border-gray-200 rounded-full px-6 py-2.5 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all cursor-default">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                HOW IT WORKS — PROCESS STEPS
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="container relative z-10">
                    <FadeIn><SectionHeading badge="Process" title="How CareerCraftly Works" subtitle="A structured, result-driven process designed to move you from where you are to where you want to be." /></FadeIn>

                    <div className="relative max-w-5xl mx-auto mt-12">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
                            {[
                                { step: '01', title: 'Discovery Call', desc: 'We begin with a free consultation to understand your goals, challenges, and vision.', icon: User },
                                { step: '02', title: 'Strategy Design', desc: 'Our team crafts a personalized roadmap tailored to your specific objectives.', icon: BarChart3 },
                                { step: '03', title: 'Execution & Build', desc: 'We execute the plan with precision — from tech builds to career coaching sessions.', icon: Zap },
                                { step: '04', title: 'Growth & Results', desc: 'We measure outcomes, iterate, and help you sustain momentum for long-term success.', icon: Award },
                            ].map((step, index) => (
                                <FadeIn key={index} delay={index * 0.12}>
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center mb-6 relative border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300">
                                            <step.icon size={32} className="text-blue-600" />
                                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-4 border-slate-50">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed px-2">{step.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                FEATURED SERVICES PREVIEW
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10">
                    <FadeIn>
                        <SectionHeading
                            badge="Services"
                            title="Everything You Need to Grow"
                            subtitle="From technical development to career transformation — we provide end-to-end solutions for professionals and businesses."
                        />
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {[
                            { icon: Globe, title: 'Website Development', desc: 'Responsive, SEO-friendly websites that establish your digital presence and convert visitors into customers.', tag: 'Technical' },
                            { icon: Brain, title: 'AI Agents', desc: 'Intelligent automation and custom AI agents that handle repetitive tasks and supercharge productivity.', tag: 'Technical' },
                            { icon: Smartphone, title: 'App Development', desc: 'Cross-platform mobile and web apps built with modern technology stacks and scalable architecture.', tag: 'Technical' },
                            { icon: User, title: 'Career Coaching', desc: '1-on-1 coaching with expert mentors who help you clarify your path, set goals, and take decisive action.', tag: 'Career' },
                            { icon: FileText, title: 'Resume Optimization', desc: 'Professionally crafted resumes that highlight your strengths and make you stand out to recruiters.', tag: 'Career' },
                            { icon: BookOpen, title: 'Skill Development', desc: 'Tailored training programs in in-demand skills to boost your employability and stay ahead of trends.', tag: 'Career' },
                        ].map((service, index) => (
                            <FadeIn key={index} delay={index * 0.07}>
                                <div className="bg-white rounded-3xl p-8 h-full flex flex-col group cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                            <service.icon size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                                            {service.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-500 leading-relaxed flex-grow text-sm">{service.desc}</p>
                                    <div className="mt-6 flex items-center text-sm font-bold text-blue-600 gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ChevronRight size={16} />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.3}>
                        <div className="text-center mt-16">
                            <button
                                onClick={() => navigate('/services')}
                                className="btn-primary"
                            >
                                View All Programs <ArrowRight size={16} />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                TESTIMONIALS
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />
                <div className="container relative z-10">
                    <FadeIn><SectionHeading badge="Testimonials" title="Real People. Real Results." subtitle="Don't just take our word for it — hear from professionals who transformed their careers and businesses with CareerCraftly." /></FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {[
                            { name: 'Priya Sharma', role: 'Software Engineer at TCS', stars: 5, text: 'CareerCraftly completely revamped my resume and coaching sessions were a game-changer. I landed my dream job within 6 weeks!' },
                            { name: 'Rahul Mehta', role: 'Founder, TechStart Labs', stars: 5, text: 'Their AI automation solutions saved us 40+ hours a week. The team is incredibly professional and results-focused.' },
                            { name: 'Ananya Patel', role: 'Marketing Manager', stars: 5, text: 'From digital marketing strategy to execution, CareerCraftly\'s team delivered beyond our expectations. Our leads doubled in 3 months.' },
                        ].map((t, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="glass-card rounded-3xl p-8 flex flex-col h-full bg-white relative">
                                    <div className="absolute top-8 right-8 text-6xl text-gray-100 font-serif leading-none">"</div>
                                    <div className="flex gap-1 mb-6 relative z-10">
                                        {Array.from({ length: t.stars }).map((_, j) => (
                                            <Star key={j} size={18} fill="currentColor" className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed flex-grow mb-8 relative z-10">{t.text}</p>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg border border-blue-200">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{t.name}</p>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-0.5">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                TECHNOLOGIES WE USE — MARQUEE
            ══════════════════════════════════════════ */}
            <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
                <FadeIn>
                    <p className="text-center text-sm font-semibold tracking-widest uppercase mb-12 text-gray-400">
                        Technologies &amp; Tools We Use
                    </p>
                </FadeIn>

                {/* Marquee Row 1 — left scroll */}
                {(() => {
                    const row1 = [
                        {
                            name: 'Antigravity',
                            logo: (
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-black text-sm flex-shrink-0 bg-gradient-to-br from-blue-500 to-green-500 shadow-sm">AG</span>
                            ),
                            bg: 'bg-white', border: 'border-blue-100', text: 'text-blue-600'
                        },
                        {
                            name: 'ClawdBot',
                            logo: (
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-black text-sm flex-shrink-0 bg-gradient-to-br from-purple-600 to-purple-400 shadow-sm">CB</span>
                            ),
                            bg: 'bg-white', border: 'border-purple-100', text: 'text-purple-600'
                        },
                        {
                            name: 'Claude',
                            logo: (
                                /* Anthropic / Claude logo */
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#D97706" />
                                    <path d="M23.5 10L34 33H27.5L23.5 22L19.5 33H13L23.5 10Z" fill="white" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-amber-100', text: 'text-amber-600'
                        },
                        {
                            name: 'Cursor',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#111" />
                                    <path d="M14 9L37 23L14 37V9Z" fill="white" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-gray-200', text: 'text-gray-900'
                        },
                        {
                            name: 'Gemini',
                            logo: (
                                /* Google Gemini star-shape */
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#EFF6FF" />
                                    <path d="M23 6C23 6 25.5 16.5 30 21C34.5 25.5 40 23 40 23C40 23 34.5 20.5 30 25C25.5 29.5 23 40 23 40C23 40 20.5 29.5 16 25C11.5 20.5 6 23 6 23C6 23 11.5 25.5 16 21C20.5 16.5 23 6 23 6Z" fill="url(#gemGrad)" />
                                    <defs>
                                        <linearGradient id="gemGrad" x1="6" y1="6" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4285F4" />
                                            <stop offset="0.5" stopColor="#9B72CB" />
                                            <stop offset="1" stopColor="#EA4335" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-blue-100', text: 'text-blue-600'
                        },
                        {
                            name: 'GitHub Copilot',
                            logo: (
                                /* GitHub octocat simplified */
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#F3F4F6" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23 8C14.716 8 8 14.716 8 23C8 29.627 12.292 35.252 18.254 37.247C18.854 37.354 19.075 36.986 19.075 36.67C19.075 36.385 19.065 35.588 19.06 34.537C15.538 35.27 14.83 32.82 14.83 32.82C14.285 31.43 13.502 31.063 13.502 31.063C12.42 30.312 13.583 30.328 13.583 30.328C14.779 30.411 15.408 31.555 15.408 31.555C16.472 33.388 18.214 32.857 19.097 32.55C19.202 31.769 19.517 31.239 19.864 30.939C17.001 30.636 13.992 29.543 13.992 24.528C13.992 23.219 14.459 22.15 15.431 21.298C15.309 20.995 14.9 19.773 15.547 18.123C15.547 18.123 16.549 17.8 19.045 19.343C20.194 19.029 21.401 18.872 22.601 18.866C23.801 18.872 25.008 19.029 26.159 19.343C28.652 17.8 29.652 18.123 29.652 18.123C30.301 19.773 29.892 20.995 29.77 21.298C30.744 22.15 31.207 23.219 31.207 24.528C31.207 29.555 28.194 30.632 25.323 30.929C25.764 31.296 26.156 32.032 26.156 33.148C26.156 34.741 26.141 36.022 26.141 36.67C26.141 36.99 26.359 37.362 26.968 37.245C32.72 35.246 37 29.625 37 23C37 14.716 30.284 8 23 8Z" fill="#181717" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-gray-200', text: 'text-gray-900'
                        },
                        {
                            name: 'React',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#E0F7FA" />
                                    <circle cx="23" cy="23" r="3.2" fill="#61DAFB" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 23 23)" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 23 23)" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-cyan-100', text: 'text-cyan-700'
                        },
                        {
                            name: 'Vite',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#F5F3FF" />
                                    <defs>
                                        <linearGradient id="viteG" x1="12" y1="8" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#BD34FE" />
                                            <stop offset="1" stopColor="#646CFF" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M37 9L22 37.5L18 27L30 9H37Z" fill="url(#viteG)" />
                                    <path d="M9 9L22 37.5L18 27L6 9H9Z" fill="#646CFF" opacity="0.6" />
                                    <path d="M9 9H30L22 37.5L9 9Z" fill="url(#viteG)" opacity="0.85" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-purple-100', text: 'text-purple-700'
                        },
                        {
                            name: 'Vercel',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#F9FAFB" />
                                    <polygon points="23,10 38,36 8,36" fill="#000000" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-gray-200', text: 'text-gray-900'
                        },
                        {
                            name: 'Framer Motion',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#EFF6FF" />
                                    <path d="M12 8H34V22H23L12 8Z" fill="#0055FF" />
                                    <path d="M12 22H23V36L12 22Z" fill="#0055FF" opacity="0.7" />
                                    <path d="M23 22H34L23 36V22Z" fill="#0055FF" opacity="0.4" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-blue-100', text: 'text-blue-700'
                        },
                        {
                            name: 'TailwindCSS',
                            logo: (
                                <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="12" fill="#ECFEFF" />
                                    <path d="M23 14C19.5 14 17.25 15.75 16 19.25C17.75 17.5 19.75 16.875 22 17.375C23.284 17.671 24.216 18.616 25.25 19.664C26.955 21.391 28.926 23.375 33 23.375C36.5 23.375 38.75 21.625 40 18.125C38.25 19.875 36.25 20.5 34 20C32.716 19.704 31.784 18.759 30.75 17.711C29.045 15.984 27.074 14 23 14ZM16 23.375C12.5 23.375 10.25 25.125 9 28.625C10.75 26.875 12.75 26.25 15 26.75C16.284 27.046 17.216 27.991 18.25 29.039C19.955 30.766 21.926 32.75 26 32.75C29.5 32.75 31.75 31 33 27.5C31.25 29.25 29.25 29.875 27 29.375C25.716 29.079 24.784 28.134 23.75 27.086C22.045 25.359 20.074 23.375 16 23.375Z" fill="#06B6D4" />
                                </svg>
                            ),
                            bg: 'bg-white', border: 'border-cyan-100', text: 'text-cyan-600'
                        },
                    ];

                    const TechCard = ({ tech }) => (
                        <div className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl mx-3 flex-shrink-0 transition-all duration-200 ${tech.bg} border ${tech.border} shadow-sm min-w-[160px] hover:shadow-md hover:-translate-y-0.5`}>
                            {tech.logo}
                            <span className={`font-semibold text-sm whitespace-nowrap ${tech.text}`}>{tech.name}</span>
                        </div>
                    );

                    return (
                        <>
                            {/* Row 1 — scrolls left */}
                            <div className="relative mb-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <motion.div
                                    className="flex"
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                                >
                                    {[...row1, ...row1].map((tech, i) => (
                                        <TechCard key={i} tech={tech} />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Row 2 — scrolls right (reverse subset) */}
                            <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <motion.div
                                    className="flex"
                                    animate={{ x: ['-50%', '0%'] }}
                                    transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                                >
                                    {[...row1.slice().reverse(), ...row1.slice().reverse()].map((tech, i) => (
                                        <TechCard key={i} tech={tech} />
                                    ))}
                                </motion.div>
                            </div>
                        </>
                    );
                })()}
            </section>

            {/* ══════════════════════════════════════════
                KEY BENEFITS — CHECKLIST STYLE
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-gray-100">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <Badge label="Why Us" />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-gray-900 tracking-tight">
                                Built for Ambitious Professionals & Brands
                            </h2>
                            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-600">
                                We combine cutting-edge AI with deep industry expertise to deliver outcomes that matter — faster careers, leaner operations, and measurable growth.
                            </p>
                            <div className="space-y-5 mb-10">
                                {[
                                    'Personalized 1-on-1 career and business coaching',
                                    'AI-powered tools that work 24/7 for your growth',
                                    'Dedicated team of 20+ industry experts',
                                    'Transparent reporting and measurable KPIs',
                                    'End-to-end technical and strategic support',
                                    'Fast turnaround without compromising quality',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={14} className="text-blue-600" />
                                        </div>
                                        <span className="text-lg text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => navigate('/contact')}
                                className="btn-primary"
                            >
                                Book a Free Consultation <ArrowRight size={16} />
                            </button>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="grid grid-cols-2 gap-6 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
                                {[
                                    { icon: Briefcase, title: 'Career Strategy', value: '100%', sub: 'Personalized Plans' },
                                    { icon: Zap, title: 'Faster Results', value: '3x', sub: 'Avg. Career Growth' },
                                    { icon: Brain, title: 'AI-Powered', value: '24/7', sub: 'AI Assistance' },
                                    { icon: Award, title: 'Client Satisfaction', value: '4.9★', sub: 'Average Rating' },
                                ].map((card, i) => (
                                    <div
                                        key={i}
                                        className="rounded-3xl p-8 text-center bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10"
                                    >
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-blue-50">
                                            <card.icon size={26} className="text-blue-600" />
                                        </div>
                                        <div className="text-4xl font-display font-extrabold mb-1 text-gray-900">{card.value}</div>
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{card.sub}</div>
                                        <div className="text-base font-bold text-gray-700">{card.title}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                FINAL CTA BANNER
            ══════════════════════════════════════════ */}
            <section className="py-28 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -mt-40 -mr-40" />
                <div className="container max-w-5xl text-center relative z-10">
                    <FadeIn>
                        <div className="rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
                            {/* Decorative background for CTA */}
                            <div className="absolute inset-0 bg-mesh opacity-30 mix-blend-overlay" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-8 border border-blue-500/30 backdrop-blur-sm">
                                    <Sparkles size={36} className="text-blue-400" />
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-white tracking-tight max-w-3xl mx-auto">
                                    Ready to Accelerate Your Growth?
                                </h2>
                                <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
                                    Join 200+ forward-thinking professionals and businesses already leveraging AI to stay ahead of the competition.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="btn-primary"
                                    >
                                        Start Your Transformation <ArrowRight size={18} />
                                    </button>
                                    <button
                                        onClick={() => navigate('/services')}
                                        className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 border border-gray-700 bg-white/5 text-white hover:bg-white/10 hover:border-gray-500 backdrop-blur-sm flex items-center justify-center gap-2"
                                    >
                                        View All Programs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
};

export default Home;
