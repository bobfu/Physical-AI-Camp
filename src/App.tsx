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
  ChevronRight,
  ExternalLink,
  Mail,
  MessageSquare,
  MapPin
} from 'lucide-react';

// --- Components ---

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

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen grid-pattern">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brutal-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-green flex items-center justify-center">
              <Rocket className="w-5 h-5 text-black" />
            </div>
            <span className="font-mono font-bold tracking-tighter text-xl">PHYSICAL AI CAMP</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#insight" className="hover:text-neon-green transition-colors">Insight</a>
            <a href="#events" className="hover:text-neon-green transition-colors">Events</a>
            <a href="#workshop" className="hover:text-neon-green transition-colors">Workshop</a>
            <a href="#market" className="hover:text-neon-green transition-colors">Global</a>
          </div>
          <button className="bg-neon-green text-black px-4 py-2 font-mono text-xs font-bold hover:bg-white transition-colors">
            APPLY NOW
          </button>
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
              <span className="text-neon-green font-mono text-[10px] uppercase tracking-widest">2026 Supersonic Program</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              Physical <br />
              <span className="text-neon-green text-glow">AI Camp</span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                  寻找下一代“软硬结合”的 AI 创新者。打破屏幕边界，让 AI 触及物理世界。
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-neon-green text-black px-8 py-4 font-bold uppercase flex items-center gap-2 hover:bg-white transition-colors group">
                    立即加入同行者网络 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex flex-col justify-center">
                    <span className="text-gray-500 font-mono text-[10px] uppercase">Organizer</span>
                    <span className="font-bold">RTE 开发者社区</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block border border-white/10 p-6 bg-brutal-gray/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-8 font-mono">
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Location</div>
                    <div className="text-sm">SHENZHEN / GLOBAL</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Capacity</div>
                    <div className="text-sm">15-20 TEAMS</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Duration</div>
                    <div className="text-sm">3 MONTHS</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase mb-1">Fee</div>
                    <div className="text-sm">0 COST / 0 EQUITY</div>
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

      {/* Slide 2: Insight */}
      <section id="insight" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="font-mono text-neon-green font-bold mb-4">01 / INSIGHT</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                Why <br />Physical AI?
              </h2>
              <p className="text-xl font-medium mb-12 border-l-4 border-black pl-6">
                打破屏幕边界，让 AI 触及物理世界
              </p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neon-green" /> 技术拐点
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  随着 Realtime API 和视觉/语音基础模型的成熟，AI 正在脱离纯粹的软件形态。我们正处于从“屏幕交互”走向“具身智能与物理交互”的转折点。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-neon-green" /> 出海与代际差
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  将硅谷最前沿的 AI 算法浪潮，与国内无可替代的硬件供应链优势结合。利用这种“代际差”，通过“硬件触点 + Agent 订阅”模式，是我们这代 Maker 出海的最佳切入点。
                </p>
              </div>
              <div className="bg-black text-white p-8">
                <h3 className="text-lg font-bold uppercase mb-4 text-neon-green">营地聚焦</h3>
                <p className="text-gray-400">
                  拒绝空谈概念。我们将目光死死盯住：小型化、可穿戴、桌面级的实时多模态交互硬件，以及它们在全球市场的真实落地场景。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Community */}
      <section className="py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="02 / COMMUNITY" 
            title="同行者画像" 
            subtitle="寻找 15-20 家探索软硬边界的同路人" 
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card>
              <Users className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">社区原生</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                认同开源与 Maker 精神，比起闭门造车，更相信社区共建的力量。
              </p>
            </Card>
            <Card>
              <Code className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">Build in public</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                习惯在早期公开构建，乐于在社交平台分享沿途的思考与踩过的坑。
              </p>
            </Card>
            <Card>
              <Layers className="w-10 h-10 text-neon-green mb-6" />
              <h3 className="text-xl font-bold mb-4 uppercase">跨界探索者</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                试图用软件逻辑重做硬件的 AI 开发者，或积极拥抱大模型原生交互的硬件初创。
              </p>
            </Card>
          </div>

          <div className="bg-neon-green text-black p-12 md:flex items-center gap-16">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold uppercase leading-none mb-4">参与式共学</h3>
              <p className="font-mono text-xs uppercase font-bold opacity-70">Participatory Learning</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg font-medium mb-6">
                这里没有高高在上的导师，只有互为镜像的同路人。我们强调 Maker 之间高密度的灵感碰撞与经验开源。
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold uppercase">
                <span className="border border-black px-3 py-1">HiDock 团队</span>
                <span className="border border-black px-3 py-1">前 LOOI Co-founder</span>
                <span className="border border-black px-3 py-1">灵宇宙儿童硬件</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Events */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="03 / KICKOFF" 
            title="开营仪式与破冰" 
            subtitle="2026年 4月8日 - 4月9日 | 地点：深圳南山" 
          />

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-brutal-black p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl font-bold text-neon-green">08</div>
                <div>
                  <div className="font-mono text-xs uppercase text-gray-500">April / Day 1</div>
                  <div className="font-bold uppercase">柴火创客空间</div>
                </div>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-neon-green mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-1">闭门探讨</h4>
                    <p className="text-gray-400 text-sm">一线出海实战血泪史与硬件创业周期复盘。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-neon-green mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-1">Lego Serious Play 工作坊</h4>
                    <p className="text-gray-400 text-sm">全员去标签化沟通。抛开 Title，通过动手搭建乐高梳理底层逻辑。</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-brutal-black p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl font-bold text-neon-green">09</div>
                <div>
                  <div className="font-mono text-xs uppercase text-gray-500">April / Day 2</div>
                  <div className="font-bold uppercase">Inno100 创新空间</div>
                </div>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-neon-green mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-1">上午 | 闭门出海早自习</h4>
                    <p className="text-gray-400 text-sm">联合 Kickstarter 合作伙伴 Inno100，拆解硬件出海第一步、众筹避坑指南。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-1 bg-neon-green mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold uppercase mb-1">下午 | RTE Meetup 开放日</h4>
                    <p className="text-gray-400 text-sm">聚焦 Physical AI 的线下沙龙。与潜在早期用户、生态伙伴面对面碰撞。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Workshop */}
      <section id="workshop" className="py-24 bg-neon-green text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="font-mono font-bold text-xs uppercase tracking-widest mb-4">04 / WORKSHOP</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              双周深度 <br />Workshop
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-black pt-8">
              <Badge>Workshop 1</Badge>
              <h3 className="text-2xl font-bold uppercase mb-6 leading-tight">ASR 微调与 <br />前端声学挑战</h3>
              <p className="text-sm font-medium mb-8">聚焦实体硬件在真实环境下的收音降噪、人声分离、VAD。</p>
              <div className="text-[10px] font-mono uppercase font-bold opacity-60">拟邀：阿里通义千问 / 声网工程师</div>
            </div>
            <div className="border-t-4 border-black pt-8">
              <Badge>Workshop 2</Badge>
              <h3 className="text-2xl font-bold uppercase mb-6 leading-tight">产品与供应链的 <br />真实契合度</h3>
              <p className="text-sm font-medium mb-8">硬件创新如何管理用户的预期？早期产品定义如何与供应链能力精准匹配？</p>
              <div className="text-[10px] font-mono uppercase font-bold opacity-60">主讲：Sean (HiDock 创始人)</div>
            </div>
            <div className="border-t-4 border-black pt-8">
              <Badge>Workshop 3</Badge>
              <h3 className="text-2xl font-bold uppercase mb-6 leading-tight">硬件团队的 <br />软件设计必修课</h3>
              <p className="text-sm font-medium mb-8">探讨硬件限制下的软件架构选型、端云协同策略，做到体验闭环。</p>
              <div className="text-[10px] font-mono uppercase font-bold opacity-60">聚焦：软硬一体体验闭环</div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Resources */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="05 / RESOURCES" 
            title="实战弹药库" 
            subtitle="为你准备好支撑起步 3-6 个月的专属技术包" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-brutal-black p-8">
              <Mic className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4">实时交互引擎</h4>
              <p className="text-gray-400 text-sm">声网对话式 AI 引擎（提供 60,000 分钟免费额度，跑通早期验证）。</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Cpu className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4">多模态大模型基座</h4>
              <p className="text-gray-400 text-sm">智谱 AI、阶跃星辰等前沿大模型 Token 额度；高质量 TTS/ASR 支持。</p>
            </div>
            <div className="bg-brutal-black p-8">
              <Box className="w-8 h-8 text-neon-green mb-6" />
              <h4 className="font-bold uppercase mb-4">硬件试用</h4>
              <p className="text-gray-400 text-sm">声网 Physical AI 盒子参考方案、Rokid 智能眼镜等前沿硬件优先试用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7: Market */}
      <section id="market" className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="06 / GLOBAL" 
            title="走向市场" 
            subtitle="通过 RTE 社区连接世界，让产品经受真实市场的检验" 
          />

          <div className="space-y-4">
            {[
              { date: '5月', event: '硅谷 AI 生态考察', desc: '深入全球 AI 创新腹地，捕捉最真实的代际信号。' },
              { date: '5月底', event: '澳门 Beyond Expo', desc: '依托 RTE 社区绿色通道，优先申请亚太级科技展会初创展位。' },
              { date: '7月初', event: '日本京都 IVS 创投展', desc: '寻找出海日本市场（陪伴、高龄化、二次元）的优质切入点。' },
              { date: '7月', event: '上海 WAIC', desc: 'Physical AI Camp 专属初创展区，集中展示营员阶段性 Demo。' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-6 border border-white/5 hover:bg-white/5 transition-colors">
                <div className="font-mono text-neon-green font-bold text-xl w-24 shrink-0">{item.date}</div>
                <div className="font-bold uppercase text-lg w-64 shrink-0">{item.event}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
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
                  <h3 className="font-bold uppercase mb-4">我们的理念</h3>
                  <p className="text-gray-600">拒绝单向的“审问式”尽调。我们看重的是能提供真正 Insight、愿意亲自上手把玩硬件 Demo 的早期 VC。</p>
                </div>
                <div className="p-8 bg-black text-white">
                  <h3 className="font-bold uppercase mb-4 text-neon-green">行动路径</h3>
                  <p className="text-gray-400">为营员定向链接专注 AI 硬件赛道的优质投资人。先交朋友，在平等的 Maker 交流中自然建立信任。</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="font-mono text-neon-green font-bold mb-4">07 / INVESTMENT</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
                懂行的 <br />早期投资圈
              </h2>
              <p className="text-xl font-medium">让资本对接回归业务探讨本身</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="08 / PRINCIPLES" 
            title="参与原则与约定" 
            subtitle="Show, Don't Tell." 
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10">
              <h4 className="font-bold uppercase mb-4 text-neon-green">关于费用</h4>
              <p className="text-gray-400 text-sm">纯粹的社区项目，0 费用，0 股权换取。（机酒差旅自理）</p>
            </div>
            <div className="p-8 border border-white/10">
              <h4 className="font-bold uppercase mb-4 text-neon-green">Presence is Key</h4>
              <p className="text-gray-400 text-sm">4.8 深圳开营仪式，以及 6 月底的结营 Demo Day，创始人必须线下本人出席。</p>
            </div>
            <div className="p-8 border border-white/10">
              <h4 className="font-bold uppercase mb-4 text-neon-green">结营目标</h4>
              <p className="text-gray-400 text-sm">请带着你跑通软硬联调的实机 Demo 登台。拒绝纯 PPT 宣讲，用真实产品说话。</p>
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
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-12">
              加入 <br /><span className="text-neon-green">同行者网络</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              寻找同频的 Maker，一起 Hack 物理世界。
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
              <button className="bg-neon-green text-black px-12 py-6 text-xl font-bold uppercase hover:bg-white transition-colors">
                立即投递申请
              </button>
              <div className="flex items-center justify-center gap-8 border border-white/10 px-8 py-6">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-neon-green" />
                  <span className="font-mono text-xs">EMAIL</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-neon-green" />
                  <span className="font-mono text-xs">WECHAT</span>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
              <div>© 2026 RTE DEVELOPER COMMUNITY</div>
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
