/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Globe, 
  Users, 
  Calendar, 
  Zap, 
  Box, 
  Rocket, 
  ArrowRight, 
  Code, 
  Layers, 
  Mic, 
  Monitor,
  Twitter,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  MapPin,
  X,
  Copy,
  Check
} from 'lucide-react';

import wechatQr from './assets/wechat-qr.jpg';

import { 
  FIXED_PARTNERS, 
  PARTNERS_LIST, 
  Partner, 
  PartnerCategory 
} from './constants/partners';
import { TRANSLATIONS } from './locales/i18n';

type Language = 'zh' | 'en';

const LogoWall = ({ onViewAll, lang }: { onViewAll: () => void; lang: Language }) => {
  const [shuffledPartners, setShuffledPartners] = useState<Partner[]>([]);
  const [fixedIndex, setFixedIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    // Randomize the list on load to be fair to all partners
    setShuffledPartners([...PARTNERS_LIST].sort(() => Math.random() - 0.5));

    // Cycle fixed partners every 3 seconds
    const interval = setInterval(() => {
      setFixedIndex((prev) => (prev + 1) % FIXED_PARTNERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (shuffledPartners.length === 0) return null;

  // Split partners into two rows for mobile/desktop variety
  const half = Math.ceil(shuffledPartners.length / 2);
  const row1 = [...shuffledPartners.slice(0, half), ...shuffledPartners.slice(0, half), ...shuffledPartners.slice(0, half)];
  const row2 = [...shuffledPartners.slice(half), ...shuffledPartners.slice(half), ...shuffledPartners.slice(half)];
  
  const currentFixed = FIXED_PARTNERS[fixedIndex];
  const getPartnerName = (p: Partner) => (lang === 'en' && p.name_en) ? p.name_en : p.name_zh;

  return (
    <div className="py-8 md:py-12 border-y border-white/5 bg-black/50 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 mb-6 md:hidden">
        <div className="flex items-center gap-4 bg-brutal-black/40 p-4 border border-white/5">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentFixed.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-6 bg-neon-green flex items-center justify-center">
                <span className="text-black font-mono text-[8px] font-bold">{getPartnerName(currentFixed)[0]}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neon-green font-bold uppercase text-xs">
                  {getPartnerName(currentFixed)}
                </span>
                <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">
                  {t.categories[currentFixed.category]}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch">
        {/* Fixed Section - Desktop */}
        <div className="hidden md:flex items-center bg-brutal-black/80 backdrop-blur-md z-30 px-8 border-r border-white/10 relative shadow-[20px_0_30px_-10px_rgba(0,0,0,0.5)] min-w-[280px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentFixed.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-4 group/fixed cursor-default"
            >
              <div className="w-8 h-8 bg-neon-green flex items-center justify-center border border-neon-green shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                <span className="text-black font-mono text-[10px] font-bold">{getPartnerName(currentFixed)[0]}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neon-green font-bold tracking-tighter uppercase text-sm">
                  {getPartnerName(currentFixed)}
                </span>
                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                  {t.categories[currentFixed.category]}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Marquee Section */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 overflow-hidden relative py-2">
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brutal-black to-transparent z-10"></div>
          
          {/* Row 1 */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {row1.map((partner, idx) => (
              <div 
                key={`row1-${idx}`} 
                className="flex items-center gap-3 md:gap-4 mx-6 md:mx-12 group/item cursor-pointer"
                onClick={onViewAll}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-neon-green/50 transition-colors">
                  <span className="text-neon-green font-mono text-[8px] md:text-[10px] font-bold">{getPartnerName(partner)[0]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-tighter uppercase text-xs md:text-sm group-hover/item:text-neon-green transition-colors">
                    {getPartnerName(partner)}
                  </span>
                  <span className="text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                    {t.categories[partner.category]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {row2.map((partner, idx) => (
              <div 
                key={`row2-${idx}`} 
                className="flex items-center gap-3 md:gap-4 mx-6 md:mx-12 group/item cursor-pointer"
                onClick={onViewAll}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-neon-green/50 transition-colors">
                  <span className="text-neon-green font-mono text-[8px] md:text-[10px] font-bold">{getPartnerName(partner)[0]}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-tighter uppercase text-xs md:text-sm group-hover/item:text-neon-green transition-colors">
                    {getPartnerName(partner)}
                  </span>
                  <span className="text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                    {t.categories[partner.category]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Hint */}
      <div className="hidden md:block absolute bottom-2 right-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
        <span className="text-[8px] font-mono text-neon-green uppercase tracking-[0.3em] animate-pulse">{t.logoWall.hint}</span>
      </div>
    </div>
  );
};

const PartnerModal = ({ isOpen, onClose, lang }: { isOpen: boolean; onClose: () => void; lang: Language }) => {
  const allPartners = [...FIXED_PARTNERS, ...PARTNERS_LIST];
  const t = TRANSLATIONS[lang];
  const categories: PartnerCategory[] = ['Organizer', 'Real-Time AI Devkit', 'VC', 'Community'];
  const getPartnerName = (p: Partner) => (lang === 'en' && p.name_en) ? p.name_en : p.name_zh;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brutal-gray border border-white/10 p-10 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="mb-12">
              <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Partners & Sponsors</h3>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Physical AI Camp 2026 Ecosystem</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {categories.map(category => (
                <div key={category}>
                  <h4 className="text-neon-green font-mono text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-neon-green/20 pb-2">
                    {t.categories[category]}
                  </h4>
                  <div className="space-y-3">
                    {allPartners.filter(p => p.category === category).map(partner => (
                      <div key={partner.id} className="flex items-center gap-3 group">
                        <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-neon-green transition-colors"></div>
                        <span className="text-white font-medium uppercase text-sm tracking-tight group-hover:text-neon-green transition-colors">
                          {getPartnerName(partner)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Components ---

const Modal = ({ isOpen, onClose, wechatId, lang }: { isOpen: boolean; onClose: () => void; wechatId: string; lang: Language }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brutal-gray border border-neon-green/50 p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,255,0,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-8">
              <Badge>Application</Badge>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{t.applyModal.title}</h3>
              <p className="text-neon-green font-mono text-[10px] uppercase tracking-widest mb-4">{t.applyModal.deadline}</p>
              <p className="text-gray-400 leading-relaxed">
                {t.applyModal.desc}
              </p>
            </div>

            <div className="bg-black border border-white/10 p-4 flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-500 uppercase mb-1">WeChat ID</span>
                <span className="font-mono text-neon-green font-bold">{wechatId}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 bg-neon-green/10 hover:bg-neon-green/20 text-neon-green px-4 py-2 font-mono text-xs transition-colors"
              >
                {copied ? (
                  <><Check className="w-4 h-4" /> {t.applyModal.copySuccess}</>
                ) : (
                  <><Copy className="w-4 h-4" /> {t.applyModal.copyLabel}</>
                )}
              </button>
            </div>

            <button 
              onClick={onClose}
              className="w-full bg-neon-green text-black py-4 font-bold uppercase hover:bg-white transition-colors"
            >
              {t.applyModal.gotIt}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SectionHeader = ({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) => (
  <div className="mb-12 border-l-4 border-neon-green pl-6">
    <div className="font-mono text-neon-green text-sm mb-2 tracking-widest">{number}</div>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">{title}</h2>
    {subtitle && <p className="text-gray-400 max-w-2xl text-lg">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-brutal-gray border border-white/10 p-6 hover:border-neon-green/50 transition-colors group ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2 py-1 bg-neon-green text-black font-mono text-[10px] font-bold uppercase mb-4">
    {children}
  </span>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-neon-green transition-colors group"
      >
        <span className="text-lg font-bold uppercase tracking-tight pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-neon-green' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-400 leading-relaxed text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  const WECHAT_ID = 'bob_fu';

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  return (
    <div className="min-h-screen grid-pattern">
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        wechatId={WECHAT_ID} 
        lang={lang}
      />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brutal-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.location.href = '/'}
          >
            <div className="w-8 h-8 bg-neon-green flex items-center justify-center group-hover:bg-white transition-colors">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="font-mono font-bold tracking-tighter text-base md:text-xl group-hover:text-neon-green transition-colors">PHYSICAL AI CAMP 2026</span>
          </div>
          <div className="hidden lg:flex gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest shrink-0">
            <a href="#community" className="hover:text-neon-green transition-colors">{t.nav.community}</a>
            <a href="#journey" className="hover:text-neon-green transition-colors">{t.nav.journey}</a>
            <a href="#resources" className="hover:text-neon-green transition-colors">{t.nav.resources}</a>
            <a href="#market" className="hover:text-neon-green transition-colors">{t.nav.global}</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="font-mono text-[10px] md:text-xs text-gray-400 hover:text-neon-green transition-colors uppercase border border-white/10 px-2 py-1"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-neon-green text-black px-3 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs font-bold hover:bg-white transition-colors whitespace-nowrap"
            >
              {t.nav.apply}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/30 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
              </span>
              <span className="text-neon-green font-mono text-[10px] uppercase tracking-widest">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              Physical <br />
              <span className="text-neon-green text-glow">AI Camp</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-neon-green text-black px-8 py-4 font-bold uppercase flex items-center gap-2 hover:bg-white transition-colors group"
                  >
                    {t.hero.applyBtn} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex flex-col">
                    <span className="text-neon-green font-mono text-[10px] uppercase tracking-widest">
                      {t.hero.deadlineLabel}
                    </span>
                    <span className="text-white font-mono text-xs">2026.04.20 24:00</span>
                  </div>
                  <div className="flex flex-col justify-center border-l border-white/10 pl-4">
                    <span className="text-gray-500 font-mono text-[10px] uppercase">
                      {t.hero.organizerLabel}
                    </span>
                    <span className="font-bold">{t.hero.organizer}</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block border border-white/10 p-6 bg-brutal-gray/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-8 font-mono">
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">{t.hero.locationLabel}</div>
                    <div className="text-sm">{t.hero.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">{t.hero.capacityLabel}</div>
                    <div className="text-sm">{t.hero.capacity}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">{t.hero.durationLabel}</div>
                    <div className="text-sm">{t.hero.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">{t.hero.feeLabel}</div>
                    <div className="text-sm">{t.hero.fee}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-96 h-96 border border-neon-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-40 w-64 h-64 border border-white/20 rotate-45"></div>
        </div>
      </header>

      <LogoWall onViewAll={() => setIsPartnerModalOpen(true)} lang={lang} />

      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} lang={lang} />

      {/* Slide 2: Insight */}
      <section id="insight" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-neon-green font-bold mb-4">01 / INSIGHT</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                {t.insight.title}
              </h2>
              <p className="text-xl font-medium mb-12 border-l-4 border-black pl-6">
                {t.insight.subtitle}
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neon-green" /> {t.insight.items[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.insight.items[0].desc}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-neon-green" /> {t.insight.items[1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.insight.items[1].desc}
                </p>
              </div>
              <div className="bg-black text-white p-8">
                <h3 className="text-lg font-bold uppercase mb-4 text-neon-green">{t.insight.items[2].title}</h3>
                <p className="text-gray-400">
                  {t.insight.items[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Community */}
      <section id="community" className="py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="02 / COMMUNITY" 
            title={t.communitySection.title} 
            subtitle={t.communitySection.subtitle} 
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card>
              <Users className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">{t.communitySection.cards[0].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.communitySection.cards[0].desc}
              </p>
            </Card>
            <Card>
              <Code className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">{t.communitySection.cards[1].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.communitySection.cards[1].desc}
              </p>
            </Card>
            <Card>
              <Layers className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">{t.communitySection.cards[2].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.communitySection.cards[2].desc}
              </p>
            </Card>
          </div>

          <div className="bg-neon-green text-black p-12 md:flex items-center gap-16">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold uppercase leading-none mb-4">{t.communitySection.learning.title}</h3>
              <p className="font-mono text-xs uppercase font-bold opacity-70">{t.communitySection.learning.label}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg font-medium mb-6">
                {t.communitySection.learning.desc}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase">
                {t.communitySection.learning.tags.map((tag, idx) => (
                  <span key={idx} className="border border-black px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Journey */}
      <section id="journey" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="03 / JOURNEY" 
            title={t.journey.title} 
            subtitle={t.journey.subtitle} 
          />

          <div className="relative">
            <div className={`grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 transition-all duration-700 ${!isJourneyExpanded ? 'max-h-[800px] overflow-hidden' : 'max-h-[4000px]'}`}>
              {t.journey.items
                .filter((item: any) => {
                  if (isJourneyExpanded) return true;
                  // Experiment: Filter to current month (APR for April 2026 context)
                  const currentMonthShort = new Date().toLocaleString('en-US', { month: 'short' }).toUpperCase();
                  // Normalize data (some are JUNE/JULY, some are APR/MAY)
                  const itemMonthShort = item.month.slice(0, 3).toUpperCase();
                  return itemMonthShort === currentMonthShort;
                })
                .map((day: any, i: number, filtered: any[]) => (
                  <div key={i} className="bg-brutal-black p-10 flex flex-col h-full">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="font-bold text-neon-green text-4xl md:text-5xl shrink-0 font-mono tracking-tighter">
                        {day.date || day.month}
                      </div>
                      <div className="border-l border-white/10 pl-6">
                        <div className="font-mono text-[10px] uppercase text-gray-500 mb-1 tracking-widest">
                          {day.date ? '2026' : ''} {day.label}
                        </div>
                        <div className="font-bold uppercase tracking-tight text-sm md:text-base">{day.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-6 flex-grow">
                      {day.events.map((event: any, idx: number) => (
                        <li key={idx} className="flex gap-4">
                          <div className="w-1.5 h-1.5 bg-neon-green mt-2 shrink-0"></div>
                          <div>
                            <h4 className="font-bold uppercase mb-1 tracking-tight leading-snug text-sm md:text-base">{event.title}</h4>
                            {event.desc && <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{event.desc}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              {/* Maintain grid visual balance */}
              {!isJourneyExpanded && (t.journey.items.filter((item: any) => item.month.slice(0, 3).toUpperCase() === new Date().toLocaleString('en-US', { month: 'short' }).toUpperCase()).length % 2 !== 0) && (
                <div className="bg-brutal-black p-10 hidden md:block"></div>
              )}
              {isJourneyExpanded && t.journey.items.length % 2 !== 0 && (
                <div className="bg-brutal-black p-10 hidden md:block"></div>
              )}
            </div>

            {!isJourneyExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-8 z-10">
                <button 
                  onClick={() => setIsJourneyExpanded(true)}
                  className="bg-neon-green text-black px-8 py-4 font-mono font-bold tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_-5px_rgba(57,255,20,0.3)] flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  {lang === 'zh' ? '开启完整营地旅程' : 'EXPLORE FULL JOURNEY'}
                </button>
              </div>
            )}
          </div>

          {isJourneyExpanded && (
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => setIsJourneyExpanded(false)}
                className="font-mono text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-2 border border-white/10 px-6 py-2"
              >
                <X className="w-4 h-4" />
                {lang === 'zh' ? '收起日程' : 'COLLAPSE SCHEDULE'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Slide 5: Resources */}
      <section id="resources" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="04 / RESOURCES" 
            title={t.resources.title} 
            subtitle={t.resources.subtitle} 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-brutal-black p-8">
              <Mic className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4 tracking-tight">{t.resources.items[0].title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.resources.items[0].desc}</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Monitor className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4 tracking-tight">{t.resources.items[1].title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.resources.items[1].desc}</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Cpu className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4 tracking-tight">{t.resources.items[2].title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.resources.items[2].desc}</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Box className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4 tracking-tight">{t.resources.items[3].title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.resources.items[3].desc}</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Zap className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4 tracking-tight">{t.resources.items[4].title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{t.resources.items[4].desc}</p>
            </div>
            <div className="bg-brutal-black p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-neon-green font-mono text-xs mb-2 tracking-[0.2em]">MORE COMING SOON</div>
                <div className="w-12 h-1 bg-neon-green/20 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Market */}
      <section id="market" className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="05 / GLOBAL" 
            title={t.market.title} 
            subtitle={t.market.subtitle} 
          />

          <div className="space-y-4">
            {t.market.events.map((item: any, i: number) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-6 border border-white/5 hover:bg-white/5 transition-colors">
                <div className="font-mono text-neon-green font-bold text-xl w-24 shrink-0">{item.date}</div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full md:w-[40%] shrink-0">
                  <span className="bg-white/10 text-white px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider h-fit w-fit">
                    {item.city}
                  </span>
                  <span className="font-bold uppercase text-lg tracking-tight">{item.event}</span>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 8: Investment */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="p-8 border-2 border-black">
                  <h3 className="font-bold uppercase mb-4 tracking-tight">{t.investment.vision.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.investment.vision.desc}</p>
                </div>
                <div className="p-8 bg-black text-white">
                  <h3 className="font-bold uppercase mb-4 text-neon-green tracking-tight">{t.investment.path.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{t.investment.path.desc}</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="font-mono text-neon-green font-bold mb-4">07 / INVESTMENT</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                {t.investment.title}
              </h2>
              <p className="text-xl font-medium tracking-tight">{t.investment.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="08 / PRINCIPLES" 
            title={t.principles.title} 
            subtitle={t.principles.subtitle} 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {t.principles.items.map((item, idx) => (
              <div key={idx} className="p-8 border border-white/10 group hover:border-neon-green/30 transition-colors">
                <h4 className="font-bold uppercase mb-4 text-neon-green tracking-tight">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="09 / FAQ" 
            title={t.faq.title} 
            subtitle={t.faq.subtitle} 
          />
          <div className="max-w-3xl">
            {t.faq.items.map((item: any, idx: number) => (
              <FAQItem 
                key={idx}
                question={item.q} 
                answer={item.a} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-6 border-l-4 border-black pl-4 tracking-tight">{t.about.supersonic.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.supersonic.desc}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-6 border-l-4 border-black pl-4 tracking-tight">{t.about.rte.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.rte.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10: CTA */}
      <footer className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12 leading-[0.9]">
              {lang === 'zh' ? (
                <>
                  加入<br />
                  <span className="text-neon-green">超音速计划 2026</span>
                </>
              ) : (
                t.footer.ctaTitle
              )}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {lang === 'zh' ? '寻找同频的 Maker，一起 Hack 物理世界。' : 'Find like-minded Makers and hack the physical world together.'}
            </p>
            
            <div className="flex flex-col items-center gap-6 mb-20">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-neon-green text-black px-12 py-6 text-xl font-bold uppercase hover:bg-white transition-colors"
              >
                {t.footer.ctaBtn}
              </button>
              <div className="text-neon-green font-mono text-sm uppercase tracking-[0.2em] border-y border-neon-green/20 py-2">
                {t.applyModal.deadline}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 mb-16">
              <a href="https://x.com/rtedevcommunity" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-neon-green" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Twitter / X</span>
              </a>
              <a href="https://www.rtecommunity.dev/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all">
                  <Globe className="w-5 h-5 text-gray-400 group-hover:text-neon-green" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Website</span>
              </a>
              <div className="group flex flex-col items-center gap-3 relative cursor-pointer">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all">
                  <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-neon-green" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{lang === 'zh' ? '微信' : 'WeChat'}</span>
                {/* QR Code Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="bg-white p-4 shadow-2xl border border-neon-green/20 w-56">
                    <img 
                      src={wechatQr} 
                      alt="WeChat QR Code" 
                      className="w-full h-auto object-contain mb-2" 
                      referrerPolicy="no-referrer" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/qr/200/200?blur=2";
                      }}
                    />
                    <div className="text-black text-[10px] font-bold text-center uppercase tracking-tighter whitespace-nowrap leading-tight">
                      {lang === 'zh' ? '扫码关注 RTE 开发者社区微信公众号' : 'Scan to follow RTE Community WeChat'}
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-neon-green/10"></div>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
              <div>{t.footer.copyright}</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
              <div>BUILT BY MAKERS FOR MAKERS</div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-neon-green/10 to-transparent pointer-events-none"></div>
      </footer>
    </div>
  );
}
