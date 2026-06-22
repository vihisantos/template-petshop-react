import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Stethoscope, Scissors, Hotel, Bath, Menu, X, Sun, Moon, ArrowRight, MapPin, Phone, Clock, Star, ChevronDown, Shield, Award, Users, PawPrint, Cat, Dog, Bone, Syringe, Pill, ShoppingCart } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá! Gostaria de agendar um serviço para meu pet!'

const services = [
    { icon: Bath, title: 'Banho & Tosa', desc: 'Banho completo com produtos hipoalergênicos, tosa higiênica e estética.', price: 'A partir de R$ 45' },
    { icon: Stethoscope, title: 'Veterinário', desc: 'Consultas, vacinas, exames e tratamentos com profissionais especializados.', price: 'A partir de R$ 80' },
    { icon: Hotel, title: 'Hotel para Pets', desc: 'Hospedagem com monitoramento 24h, brinquedos e caminhas confortáveis.', price: 'A partir de R$ 65/dia' },
    { icon: Syringe, title: 'Vacinas', desc: 'Aplicação de todas as vacinas obrigatórias e opcionais com certificado.', price: 'A partir de R$ 35' },
]

const gallery = [
    { label: 'Banho', emoji: '🛁', gradient: 'from-blue-400/20 to-cyan-400/20' },
    { label: 'Tosa', emoji: '✂️', gradient: 'from-purple-400/20 to-pink-400/20' },
    { label: 'Hotel', emoji: '🏨', gradient: 'from-green-400/20 to-emerald-400/20' },
    { label: 'Veterinário', emoji: '💊', gradient: 'from-red-400/20 to-rose-400/20' },
    { label: 'Brincadeiras', emoji: '🎾', gradient: 'from-yellow-400/20 to-amber-400/20' },
    { label: 'Fotinho', emoji: '📸', gradient: 'from-pink-400/20 to-fuchsia-400/20' },
]

const testimonials = [
    { name: 'Maria Clara', role: 'Dona do Thor', text: 'O Thor adora o hotel! Fica tranquilo sabendo que ele está bem cuidado. Equipe muito atenciosa.', initial: 'M' },
    { name: 'Pedro Santos', role: 'Dono da Luna', text: 'A Luna ficou linda depois da tosa. Profissionais muito gentis e cuidadosos com ela.', initial: 'P' },
    { name: 'Ana Beatriz', role: 'Dona do Rex', text: 'O Rex tinha medo de veterinário, mas aqui ele ficou super tranquilo. Recomendo demais!', initial: 'A' },
]

const faqs = [
    { q: 'Preciso de agendamento para banho?', a: 'Para banho e tosa, recomendamos agendamento pelo WhatsApp para garantir horário. Para consultas veterinárias, o agendamento é obrigatório.' },
    { q: 'Vocês atendem emergências?', a: 'Sim! Temos plantão 24h para emergências veterinárias. Ligue ou envie WhatsApp a qualquer hora.' },
    { q: 'Qual a idade mínima para hotel?', a: 'Pets a partir de 4 meses, com vacinas em dia. Animais idosos e com necessidades especiais são bem-vindos!' },
    { q: 'Vocês vendem rações e acessórios?', a: 'Sim! Temos pet shop completo com rações premium, brinquedos, caminhas e acessórios de marcas renomadas.' },
]

const stats = [
    { icon: Users, value: '5.000+', label: 'Pets Atendidos' },
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: Star, value: '4.9', label: 'Avaliação Google' },
    { icon: Heart, value: '100%', label: 'Amor e Dedicação' },
]

function useTheme() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return { dark, toggle: () => setDark(d => !d) }
}

export default function App() {
    const { dark, toggle } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', h)
        return () => window.removeEventListener('scroll', h)
    }, [])

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[var(--card)]/95 backdrop-blur-2xl shadow-2xl border-b border-[var(--border)]' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className="font-display font-bold text-2xl text-[var(--text)]">
                        🐾 Pet<span className="text-[var(--color-brand)]">Vida</span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#servicos" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Serviços</a>
                        <a href="#galeria" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Galeria</a>
                        <a href="#depoimentos" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Depoimentos</a>
                        <a href="#localizacao" className="text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--color-brand)] transition-colors">Localização</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggle} className="p-2.5 rounded-xl hover:bg-[var(--bg-alt)] transition-colors text-[var(--text-muted)]">
                            {dark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-brand)] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-brand-dark)] transition-all hover:shadow-lg hover:shadow-[var(--color-brand)]/30">
                            📱 Agendar
                        </a>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-[var(--text)]">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[var(--card)] border-t border-[var(--border)]"
                        >
                            <div className="px-6 py-6 space-y-4">
                                <a href="#servicos" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Serviços</a>
                                <a href="#galeria" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Galeria</a>
                                <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Depoimentos</a>
                                <a href="#localizacao" onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-[var(--text)]">Localização</a>
                                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block px-6 py-3 bg-[var(--color-brand)] text-white rounded-xl font-bold text-sm text-center uppercase tracking-wider">
                                    Agendar pelo WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-dark)]">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full text-white/60 text-xs font-bold uppercase tracking-widest mb-8 bg-white/5 backdrop-blur-sm"
                            >
                                🐾 Pet Shop & Veterinário
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
                            >
                                Cuidando do seu<br />
                                <span className="text-[var(--color-brand)]">melhor amigo</span><br />
                                com amor.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-white/60 mb-12 leading-relaxed max-w-md"
                            >
                                Banho, tosa, veterinário, hotel e muito carinho. Seu pet merece o melhor cuidado profissional.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-brand)] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[var(--color-brand-dark)] transition-all hover:shadow-xl hover:shadow-[var(--color-brand)]/30 hover:-translate-y-1">
                                    📱 Agendar Agora
                                </a>
                                <a href="#servicos" className="inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all backdrop-blur-sm">
                                    Ver Serviços
                                </a>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="grid grid-cols-2 gap-6"
                            >
                                {stats.map((s, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[var(--color-brand)]/20 rounded-xl flex items-center justify-center">
                                            <s.icon size={18} className="text-[var(--color-brand)]" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-white">{s.value}</div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-wider">{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative hidden lg:flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-[var(--color-brand)]/10 blur-3xl scale-150" />
                                <div className="absolute -inset-10 rounded-full border border-[var(--color-brand)]/20" />
                                <div className="absolute -inset-20 rounded-full border border-[var(--color-brand)]/10" />

                                <div className="relative w-72 h-72 bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-brand)]/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                                    <div className="w-52 h-52 bg-gradient-to-br from-[var(--color-brand)]/30 to-transparent rounded-full flex items-center justify-center">
                                        <PawPrint className="text-white/70" size={80} strokeWidth={1} />
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-brand)]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                                >
                                    <span className="text-2xl">🐕</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [5, -5, 5] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute -bottom-4 -left-4 w-14 h-14 bg-[var(--color-brand)]/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
                                >
                                    <span className="text-2xl">🐈</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="flex flex-col items-center gap-2 text-white/30"
                        >
                            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                            <ChevronDown size={16} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Serviços */}
            <section id="servicos" className="py-28 bg-[var(--bg-alt)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Nossos Serviços</span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--text)]">
                            Tudo que seu <span className="text-[var(--color-brand)]">pet</span> precisa
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-[var(--card)] p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--color-brand)]/30 transition-all group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-brand)]/5 rounded-2xl flex items-center justify-center mb-5 text-[var(--color-brand)] group-hover:from-[var(--color-brand)] group-hover:to-[var(--color-brand-dark)] group-hover:text-white transition-all duration-300">
                                    <s.icon size={24} />
                                </div>
                                <h3 className="font-display text-lg font-bold text-[var(--text)] mb-2">{s.title}</h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-[var(--color-brand)] font-bold text-sm">{s.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Galeria */}
            <section id="galeria" className="py-28 bg-[var(--bg-dark)] relative overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Galeria</span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
                            Momentos <span className="text-[var(--color-brand)]">Adoráveis</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {gallery.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center gap-3 border border-white/10 cursor-pointer backdrop-blur-sm hover:border-[var(--color-brand)]/30 transition-all`}
                            >
                                <span className="text-4xl">{item.emoji}</span>
                                <span className="text-white font-display text-lg font-bold">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Depoimentos */}
            <section id="depoimentos" className="py-28 bg-[var(--bg)]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Depoimentos</span>
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--text)]">
                            O que dizem os <span className="text-[var(--color-brand)]">tutores</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[var(--card)] p-7 rounded-2xl border border-[var(--border)]"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                                </div>
                                <p className="text-[var(--text)] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center text-[var(--color-brand)] font-bold text-sm">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <strong className="text-sm text-[var(--text)]">{t.name}</strong>
                                        <span className="block text-xs text-[var(--text-muted)]">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-28 bg-[var(--bg-alt)]">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Dúvidas</span>
                        <h2 className="font-display text-4xl font-bold text-[var(--text)]">
                            Perguntas <span className="text-[var(--color-brand)]">Frequentes</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="font-semibold text-[var(--text)] text-sm pr-4">{faq.q}</span>
                                    <motion.div
                                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                                        className="w-6 h-6 rounded-full flex items-center justify-center bg-[var(--bg-alt)] text-[var(--text-muted)]"
                                    >
                                        <ChevronDown size={14} />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-[var(--text-muted)] text-sm leading-relaxed">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Localização */}
            <section id="localizacao" className="py-28 bg-[var(--bg)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Onde Estamos</span>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] mb-8">
                                Venha nos <span className="text-[var(--color-brand)]">visitar</span>
                            </h2>

                            <div className="space-y-5">
                                {[
                                    { icon: MapPin, label: 'Endereço', value: 'Rua das Flores, 123 - Jardins, São Paulo' },
                                    { icon: Clock, label: 'Funcionamento', value: 'Seg a Sáb: 8h – 19h\nDomingos: 9h – 14h' },
                                    { icon: Phone, label: 'WhatsApp', value: '+55 (11) 99999-9999' },
                                ].map((info, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-12 h-12 bg-[var(--color-brand)]/10 rounded-xl flex items-center justify-center text-[var(--color-brand)] shrink-0 group-hover:bg-[var(--color-brand)] group-hover:text-white transition-all">
                                            <info.icon size={20} />
                                        </div>
                                        <div>
                                            <strong className="text-sm text-[var(--color-brand)] uppercase tracking-wider">{info.label}</strong>
                                            <p className="text-[var(--text-muted)] text-sm mt-1 whitespace-pre-line">{info.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197503928898!2d-46.65429812376897!3d-23.56338886151578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--color-brand)]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Pronto para cuidar do seu pet?</h2>
                        <p className="text-white/80 text-lg mb-8">Agende agora pelo WhatsApp. Rápido, fácil e sem complicação!</p>
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[var(--color-brand)] rounded-xl font-bold text-sm uppercase tracking-wider hover:shadow-xl transition-all hover:-translate-y-1">
                            📱 Agendar pelo WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[var(--bg-dark)] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div>
                            <span className="font-display text-2xl font-bold mb-4 block">🐾 Pet<span className="text-[var(--color-brand)]">Vida</span></span>
                            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                                Cuidando do seu melhor amigo com amor, carinho e profissionalismo há mais de 10 anos.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-widest mb-4">Horários</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li>Seg a Sáb: 8h – 19h</li>
                                <li>Domingos: 9h – 14h</li>
                                <li>Emergência: 24h</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[var(--color-brand)] text-xs font-bold uppercase tracking-widest mb-4">Contato</h4>
                            <ul className="space-y-2 text-white/50 text-sm">
                                <li className="flex items-center gap-2"><Phone size={14} /> +55 (11) 99999-9999</li>
                                <li className="flex items-center gap-2"><MapPin size={14} /> Rua das Flores, 123</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/30 text-xs">© {new Date().getFullYear()} PetVida. Todos os direitos reservados.</p>
                        <p className="text-white/30 text-xs">CNPJ: 00.000.000/0001-00 · Desenvolvido por <a href="https://capybaraholding.com.br" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] font-semibold">Capybara Holding</a></p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp FAB */}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.025-1.379l-.36-.213-3.757.981 1.001-3.651-.234-.374A9.796 9.796 0 012.182 12c0-5.413 4.41-9.818 9.818-9.818s9.818 4.405 9.818 9.818c0 5.413-4.41 9.818-9.818 9.818z"/></svg>
            </a>
        </div>
    )
}
