import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Mail, Github, Twitter, Linkedin, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const POSTS = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in Web Development",
        desc: "How AI is reshaping the way we build, test, and deploy modern web applications. From Copilot to automated UI generation.",
        date: "March 15, 2024",
        readTime: "8 min read",
        tag: "AI & Tech",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Mastering Framer Motion for Premium User Experiences",
        desc: "A deep dive into orchestration, gesture recognition, and layout animations that will make your React apps feel high-end.",
        date: "March 12, 2024",
        readTime: "12 min read",
        tag: "Design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Scaling Next.js Applications to Millions of Users",
        desc: "Optimization techniques, ISR, and edge caching strategies for high-traffic platforms. Lessons learned from production.",
        date: "March 10, 2024",
        readTime: "15 min read",
        tag: "Engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
];

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-slate-50 selection:bg-teal-100">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-teal-500 z-[200] origin-left"
                style={{ scaleX }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-[100]">
                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rotate-45 flex items-center justify-center overflow-hidden">
                            <span className="text-white font-black text-xl -rotate-45">M</span>
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase">MK_<span className="text-teal-600">BLOG</span></span>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        {['Articles', 'Newsletter', 'About', 'Archive'].map(link => (
                            <a key={link} href="#" className="text-sm font-bold text-slate-500 hover:text-black transition-colors uppercase tracking-widest">{link}</a>
                        ))}
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="px-6 py-2 bg-black text-white text-xs font-black rounded-full uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
                            Subscribe
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-xs font-black text-teal-600 uppercase tracking-[0.3em] mb-6 block">Thought Leadership in Tech</span>
                        <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12">
                            THE <br /> <span className="text-slate-200 block md:inline">MODERN</span> <br /> DEVELOPER.
                        </h1>
                        <p className="typography-p max-w-2xl mx-auto">
                            Curated insights on high-performance engineering, aesthetic design, and the future of digital architecture.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Posts */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Latest <span className="text-slate-300">Articles</span></h2>
                        <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-teal-600 transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {POSTS.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest">
                                        {post.tag}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-black leading-tight group-hover:text-teal-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium line-clamp-2">
                                        {post.desc}
                                    </p>
                                    <div className="pt-2">
                                        <span className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                            Read Article <ArrowUpRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="max-w-7xl mx-auto px-6 mt-32">
                    <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] -z-0" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <Mail className="w-12 h-12 text-teal-400 mx-auto mb-8" />
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">JOIN THE <br /> INNER CIRCLE.</h2>
                            <p className="text-lg md:text-xl text-slate-400 font-medium mb-12">
                                Join 10,000+ developers receiving our weekly deep-dive into the tech stack of the future. No spam, just pure signal.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="EMAIL@EXAMPLE.COM"
                                    className="flex-1 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-teal-400 transition-colors uppercase text-xs tracking-widest"
                                />
                                <button className="px-10 py-5 bg-teal-500 hover:bg-teal-400 text-black font-black rounded-2xl transition-all active:scale-95 uppercase text-xs tracking-widest">
                                    JOIN NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-20 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-black rotate-45 flex items-center justify-center overflow-hidden">
                                    <span className="text-white font-black text-lg -rotate-45">M</span>
                                </div>
                                <span className="text-lg font-black tracking-tighter uppercase">MK_<span className="text-teal-600">BLOG</span></span>
                            </div>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                A premium publication dedicated to the craft of software engineering and digital design. Built for the modern builder.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
                            <FooterSection title="Explore" links={['Articles', 'Library', 'Tools', 'Courses']} />
                            <FooterSection title="Connect" links={['Twitter', 'Github', 'LinkedIn', 'YouTube']} />
                            <FooterSection title="Support" links={['Contact', 'Sponsor', 'FAQs', 'Hiring']} />
                        </div>
                    </div>

                    <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <p>© 2026 MK-BLOG // EVOLUTION WAVE • 30/30 DONE</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-teal-600">Privacy Policy</a>
                            <a href="#" className="hover:text-teal-600">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FooterSection({ title, links }: { title: string, links: string[] }) {
    return (
        <div className="space-y-6">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">{title}</h4>
            <ul className="space-y-4">
                {links.map(l => (
                    <li key={l}>
                        <a href="#" className="text-sm font-bold text-slate-500 hover:text-black transition-colors uppercase tracking-widest">{l}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default App;
