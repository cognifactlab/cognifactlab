import { useState, useEffect } from 'react';
import {
  FlaskConical, Terminal, Menu, X, ArrowRight, CheckCircle2,
  Brain, Eye, Database, Globe, ChevronDown, Shield, Zap,
  Users, Code2, Cloud, MessageSquare, Phone, MapPin,
  GraduationCap, Calendar, DollarSign, FileText, Send,
  ExternalLink, Star, Clock, Target, Layers, Smartphone,
  Server, Cpu, Briefcase, Rocket, Award, TrendingUp, AlertCircle
} from 'lucide-react';

// ==================== NAVBAR ====================
function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'What We Build', href: '#we-build' },
    { label: 'Process', href: '#process' },
    { label: 'Tech Stacks', href: '#stacks' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <FlaskConical className="w-7 h-7 text-electric group-hover:text-electric-light transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald rounded-full animate-pulse" />
            </div>
            <span className="text-lg font-bold text-white font-mono tracking-tight">
              Cogni<span className="text-electric">Fact</span>lab
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-electric after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 bg-electric hover:bg-electric-light text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-electric/20 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Submit Project Brief
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-800/50 mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { onOpenModal(); setIsOpen(false); }}
              className="mt-4 w-full px-5 py-2.5 bg-electric text-white text-sm font-medium rounded-lg"
            >
              Submit Project Brief
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ==================== HERO ====================
function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 grid-bg overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-96 grid-floor opacity-40" />
        
        {/* 3D Floating Spheres */}
        <div className="absolute top-20 right-[15%] w-72 h-72 sphere-3d float-3d opacity-60" />
        <div className="absolute bottom-32 left-[10%] w-56 h-56 sphere-3d-emerald float-3d-slow opacity-50" />
        <div className="absolute top-1/2 right-[5%] w-32 h-32 sphere-3d float-3d-fast opacity-40" />
        
        {/* 3D Rotating Rings */}
        <div className="absolute top-1/3 right-[20%] ring-3d opacity-40" />
        <div className="absolute bottom-1/4 left-[25%] w-24 h-24 border-2 border-emerald/30 rounded-full spin-3d opacity-30" />
        
        {/* 3D Geometric Shapes */}
        <div className="absolute top-40 left-[5%] w-16 h-16 border border-electric/30 rotate-45 spin-3d opacity-40" />
        <div className="absolute bottom-40 right-[10%] w-20 h-20 border border-emerald/30 rounded-lg spin-3d opacity-30" style={{ animationDuration: '25s' }} />
        
        {/* Floating Particles */}
        <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-electric rounded-full float-3d-fast opacity-60" />
        <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 bg-emerald rounded-full float-3d opacity-70" />
        <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-purple-400 rounded-full float-3d-slow opacity-50" />
        <div className="absolute bottom-[30%] left-[50%] w-2 h-2 bg-yellow-400 rounded-full float-3d-fast opacity-40" />
        
        {/* 3D Depth Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge with 3D Effect */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mb-8 animate-fade-in-up glass-3d">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse shadow-lg shadow-electric/50" />
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-lg shadow-emerald/50" style={{ animationDelay: '0.5s' }} />
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-lg shadow-yellow-400/50" style={{ animationDelay: '1s' }} />
            </div>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Legitimate Project Mentoring • No Black-Box Code • Viva-Ready
            </span>
          </div>

          {/* Headline with 3D Text Effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Build Real Systems.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-electric-light inline-block hover:scale-105 transition-transform duration-500">
              Master Your Architecture.
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-emerald-light inline-block hover:scale-105 transition-transform duration-500">
              Clear Your Viva.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We don't hand you pre-built projects. We <span className="text-white font-semibold">mentor you</span> to build 
            production-grade Software, AI/ML, Mobile Apps, Web Platforms, and Cloud systems — 
            so you understand every line, ace your viva, and walk away with real engineering skills.
          </p>

          {/* CTAs with 3D Effects */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up perspective-1000" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-electric hover:bg-electric-light text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-electric/20 flex items-center justify-center gap-2 pulse-glow hover-lift-3d"
            >
              <Calendar className="w-5 h-5" />
              Schedule Technical Intake
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#stacks"
              className="px-8 py-4 border border-slate-700 hover:border-electric text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-slate-800/50 hover-lift-3d glass-3d"
            >
              <Layers className="w-5 h-5" />
              Explore Supported Stacks
            </a>
          </div>

          {/* Terminal Preview with 3D Effect */}
          <div className="mt-16 animate-fade-in-up perspective-1000" style={{ animationDelay: '0.4s' }}>
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm max-w-2xl glass-3d hover-lift-3d transition-all duration-500">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg shadow-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg shadow-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg shadow-green-500/30" />
                <span className="ml-2 text-xs text-slate-500 font-mono">cognifactlab — project-intake</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <p className="text-emerald">$ cognifactlab init --project-field=ai/ml</p>
                <p className="text-slate-400 mt-1">→ Analyzing student requirements...</p>
                <p className="text-slate-400">→ Matching mentor with domain expertise...</p>
                <p className="text-slate-400">→ Generating architecture blueprint...</p>
                <p className="text-slate-400">→ Setting up paired-coding environment...</p>
                <p className="text-electric mt-1">✓ Ready — you build it, we guide you</p>
                <p className="text-slate-400 mt-1">$ <span className="cursor-blink"></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== WHAT WE BUILD ====================
function WhatWeBuild({ onOpenModal }: { onOpenModal: () => void }) {
  const projects = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom desktop applications, CLI tools, automation scripts, and enterprise software built with modern frameworks.',
      examples: ['Inventory Management Systems', 'ERP Modules', 'Automation Scripts', 'Desktop Applications'],
      color: 'electric',
      gradient: 'from-electric to-blue-600'
    },
    {
      icon: Brain,
      title: 'AI / ML Projects',
      description: 'Machine learning models, deep learning systems, NLP pipelines, and AI-powered applications with real-world deployment.',
      examples: ['Image Classification', 'NLP Chatbots', 'Recommendation Engines', 'Predictive Analytics'],
      color: 'emerald',
      gradient: 'from-emerald to-teal-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Cross-platform and native mobile apps with modern UI/UX, API integration, and offline capabilities.',
      examples: ['React Native Apps', 'Flutter Applications', 'Android/iOS Native', 'Hybrid Mobile Solutions'],
      color: 'electric',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack web platforms with responsive UIs, secure backends, databases, and cloud deployment.',
      examples: ['E-commerce Platforms', 'SaaS Dashboards', 'Portfolio Sites', 'Admin Panels'],
      color: 'emerald',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment',
      description: 'Production-ready deployment on AWS, Azure, GCP, or Render with CI/CD, monitoring, and scalability.',
      examples: ['AWS EC2/Lambda', 'Docker Containers', 'CI/CD Pipelines', 'Serverless Architecture'],
      color: 'electric',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Client-Requirement Projects',
      description: 'Tailored solutions built to your exact specifications — from ideation to deployment with full documentation.',
      examples: ['Custom Business Tools', 'Industry-Specific Solutions', 'Research Prototypes', 'Startup MVPs'],
      color: 'emerald',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="we-build" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <Rocket className="w-3.5 h-3.5 text-electric" />
            <span className="text-xs text-slate-400 font-mono">WHAT WE BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Projects. <span className="text-electric">Real Skills.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We mentor you through building production-grade projects across every major category — 
            not pre-packaged templates you can't explain.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-500 hover:bg-slate-900/50 card-3d glass-3d"
            >
              {/* 3D Floating Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-electric/20`}>
                <project.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* 3D Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/0 via-transparent to-emerald/0 group-hover:from-electric/5 group-hover:to-emerald/5 transition-all duration-500 pointer-events-none" />

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.description}</p>

              {/* Examples */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Example Builds:</p>
                <ul className="space-y-1">
                  {project.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${project.color === 'electric' ? 'text-electric/60' : 'text-emerald/60'}`} />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-electric hover:bg-electric-light text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-electric/20 inline-flex items-center gap-2"
          >
            <Terminal className="w-5 h-5" />
            Tell Us Your Project Idea
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== PROCESS (4-Step Blueprint) ====================
function Process() {
  const steps = [
    {
      number: '01',
      title: 'System Scope & Problem Formulation',
      description: 'Feasibility check, SRS documentation, and dataset design. We define exactly what your system will do and why.',
      icon: Target,
      color: 'electric',
      details: ['Problem statement refinement', 'SRS & scope documentation', 'Dataset identification & validation', 'Feasibility analysis report']
    },
    {
      number: '02',
      title: 'Architecture & Scalable Scaffolding',
      description: 'Clean schemas, modular APIs, Docker configs. Production-grade structure from day one.',
      icon: Layers,
      color: 'emerald',
      details: ['System architecture diagrams', 'Database schema design', 'API endpoint mapping', 'Docker & CI/CD configuration']
    },
    {
      number: '03',
      title: 'Pair-Coding & Live Debugging',
      description: 'Learn every single function and edge case. No black-box code — you write it, you understand it.',
      icon: Code2,
      color: 'electric',
      details: ['Screen-share coding sessions', 'Line-by-line code walkthrough', 'Edge case handling', 'Test-driven development']
    },
    {
      number: '04',
      title: 'Cloud Deployment & Defense Prep',
      description: 'AWS/Render deployment, PPT diagrams, expected examiner viva questions. You will be ready.',
      icon: Cloud,
      color: 'emerald',
      details: ['Live cloud deployment', 'Architecture presentation slides', 'Mock viva sessions', 'Examiner Q&A preparation']
    }
  ];

  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <Terminal className="w-3.5 h-3.5 text-electric" />
            <span className="text-xs text-slate-400 font-mono">THE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The CogniFactlab <span className="text-electric">Blueprint</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A battle-tested 4-phase engineering process that takes you from concept to deployment-ready, viva-defended project.
          </p>
        </div>

        {/* Steps Grid with 3D Effects */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 perspective-2000">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative p-6 lg:p-8 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-500 hover:bg-slate-900/50 card-3d glass-3d"
            >
              {/* 3D Step Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-slate-800/30 font-mono group-hover:text-electric/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {step.number}
              </div>

              {/* 3D Icon with Depth */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${step.color === 'electric' ? 'bg-electric/10 text-electric' : 'bg-emerald/10 text-emerald'} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg ${step.color === 'electric' ? 'shadow-electric/20' : 'shadow-emerald/20'}`}>
                <step.icon className="w-7 h-7" />
              </div>
              
              {/* 3D Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${step.color === 'electric' ? 'bg-gradient-to-br from-electric/5 to-transparent' : 'bg-gradient-to-br from-emerald/5 to-transparent'}`} />

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 pr-12">{step.title}</h3>
              <p className="text-slate-400 mb-4">{step.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${step.color === 'electric' ? 'text-electric/60' : 'text-emerald/60'}`} />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -bottom-4 left-1/2 w-px h-4 bg-gradient-to-b from-slate-700 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== DOMAINS ====================
function Domains() {
  const domains = [
    {
      title: 'GenAI & LLMs',
      icon: Brain,
      color: 'from-purple-500 to-blue-500',
      borderColor: 'border-purple-500/20',
      bgColor: 'bg-purple-500/5',
      description: 'Build intelligent systems powered by large language models.',
      technologies: ['RAG Pipelines', 'FastAPI Orchestration', 'Vector Embeddings', 'Fine-Tuning', 'LangChain', 'ChromaDB']
    },
    {
      title: 'Computer Vision',
      icon: Eye,
      color: 'from-emerald to-teal-500',
      borderColor: 'border-emerald/20',
      bgColor: 'bg-emerald/5',
      description: 'Real-time object detection, defect inspection, and image processing.',
      technologies: ['YOLOv8 Detection', 'OpenCV Processing', 'Live Camera Streams', 'Surface Defect Inspection', 'Image Segmentation', 'Real-time Inference']
    },
    {
      title: 'Big Data & Analytics',
      icon: Database,
      color: 'from-electric to-cyan-500',
      borderColor: 'border-electric/20',
      bgColor: 'bg-electric/5',
      description: 'Scalable data pipelines and end-to-end analytics platforms.',
      technologies: ['PySpark Pipelines', 'PostgreSQL/MongoDB', 'Data Clustering', 'End-to-End Telemetry', 'ETL Automation', 'Dashboard Integration']
    },
    {
      title: 'Full-Stack Platforms',
      icon: Globe,
      color: 'from-orange-500 to-pink-500',
      borderColor: 'border-orange-500/20',
      bgColor: 'bg-orange-500/5',
      description: 'Modern web applications with async backends and responsive UIs.',
      technologies: ['React/Next.js', 'Async Python APIs', 'Node.js Backend', 'REST/GraphQL', 'Auth Systems', 'Cloud Deployment']
    }
  ];

  return (
    <section id="domains" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <FlaskConical className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs text-slate-400 font-mono">LAB DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Supported <span className="text-emerald">Specializations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From GenAI to Big Data — we mentor across the full spectrum of modern engineering domains.
          </p>
        </div>

        {/* Domains Grid with 3D Effects */}
        <div className="grid md:grid-cols-2 gap-6 perspective-1000">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className={`group relative p-6 lg:p-8 rounded-2xl border ${domain.borderColor} ${domain.bgColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 card-3d glass-3d`}
            >
              {/* 3D Icon with Depth */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <domain.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{domain.title}</h3>
                  <p className="text-sm text-slate-400">{domain.description}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {domain.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TRUST & PROOF CARDS ====================
function TrustCards() {
  const projects = [
    {
      title: 'Automated Surface Defect Detection',
      subtitle: 'using YOLOv8',
      description: 'Real-time quality inspection system for manufacturing with 97.3% mAP accuracy on custom dataset.',
      tags: ['Computer Vision', 'YOLOv8', 'OpenCV', 'FastAPI'],
      metric: '97.3% mAP'
    },
    {
      title: 'RAG-Based Decision Engine',
      subtitle: 'with FastAPI',
      description: 'Enterprise knowledge retrieval system combining vector search with LLM reasoning for automated compliance.',
      tags: ['LangChain', 'ChromaDB', 'FastAPI', 'GPT-4'],
      metric: '3x Faster Retrieval'
    },
    {
      title: 'Real-Time Telemetry Dashboard',
      subtitle: 'IoT Analytics Platform',
      description: 'End-to-end data pipeline processing 10K+ events/sec with live visualization and anomaly detection.',
      tags: ['PySpark', 'PostgreSQL', 'React', 'WebSocket'],
      metric: '10K+ events/sec'
    }
  ];

  const stats = [
    { value: '100%', label: 'Code Comprehension Rate', icon: Brain },
    { value: '0%', label: 'Black-Box Code', icon: Shield },
    { value: '1-on-1', label: 'Viva Defense Practice', icon: Users },
    { value: '24/7', label: 'Debug Support Access', icon: Zap },
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <span className="text-xs text-slate-400 font-mono">PROOF OF WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Projects. <span className="text-electric">Real Results.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every project is built from scratch with full student comprehension — not copy-pasted templates.
          </p>
        </div>

        {/* Stats Row with 3D Effects */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 perspective-1000">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm card-3d glass-3d hover-lift-3d transition-all duration-500"
            >
              <div className="inline-block group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-8 h-8 text-electric mx-auto mb-3" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Project Cards with 3D Effects */}
        <div className="grid md:grid-cols-3 gap-6 perspective-1000">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:border-electric/30 transition-all duration-500 card-3d glass-3d hover-lift-3d"
            >
              {/* 3D Metric Badge */}
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald/10 border border-emerald/20 mb-4 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-emerald/20 transition-all duration-500">
                <Zap className="w-3 h-3 text-emerald" />
                <span className="text-xs font-medium text-emerald">{project.metric}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-electric mb-3">{project.subtitle}</p>
              <p className="text-sm text-slate-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TECH STACKS ====================
function TechStacks() {
  const stacks = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'text-electric',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Kotlin', 'Dart', 'SQL', 'Bash/Shell']
    },
    {
      category: 'ML / AI & Data Science',
      icon: Brain,
      color: 'text-emerald',
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'HuggingFace', 'OpenCV', 'YOLOv8', 'Pandas', 'NumPy', 'spaCy', 'ChromaDB', 'Pinecone', 'Ollama', 'LlamaIndex']
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      color: 'text-electric',
      items: ['FastAPI', 'Django', 'Node.js', 'Express', 'Flask', 'Spring Boot', 'GraphQL', 'REST APIs', 'WebSockets', 'gRPC', 'JWT Auth', 'OAuth2']
    },
    {
      category: 'Frontend & UI',
      icon: Globe,
      color: 'text-emerald',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Redux', 'Framer Motion', 'shadcn/ui', 'HTML5/CSS3', 'Material UI', 'Bootstrap', 'Three.js']
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'text-electric',
      items: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Android Studio', 'Xcode', 'Expo', 'Firebase SDK', 'Push Notifications', 'Offline Storage']
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'text-emerald',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase', 'SQLite', 'Neo4j', 'InfluxDB', 'Vector DBs']
    },
    {
      category: 'Big Data & Analytics',
      icon: Cpu,
      color: 'text-electric',
      items: ['PySpark', 'Apache Kafka', 'Apache Airflow', 'Hadoop', 'Power BI', 'Tableau', 'ETL Pipelines', 'Data Warehousing', 'Stream Processing', 'Grafana']
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-emerald',
      items: ['AWS (EC2, S3, Lambda)', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD', 'Nginx', 'Vercel', 'Render', 'Netlify']
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'text-emerald',
      items: ['Wireshark', 'Metasploit', 'Burp Suite', 'Kali Linux', 'Nmap', 'OWASP Top 10', 'Penetration Testing', 'Network Security', 'Cryptography', 'SSL/TLS']
    },
    {
      category: 'Tools & Workflow',
      icon: Terminal,
      color: 'text-electric',
      items: ['Git/GitHub', 'VS Code', 'Postman', 'Jira', 'Figma', 'Linux/Unix', 'Jupyter', 'Google Colab', 'DBeaver', 'Insomnia', 'Swagger/OpenAPI']
    },
  ];

  return (
    <section id="stacks" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <Code2 className="w-3.5 h-3.5 text-electric" />
            <span className="text-xs text-slate-400 font-mono">TECHNOLOGY ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Industry-Grade <span className="text-electric">Tech Stacks</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We work with the same tools used at top tech companies — not outdated academic frameworks.
            From AI/ML to Cybersecurity, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 perspective-1000">
          {stacks.map((stack) => (
            <div
              key={stack.category}
              className="group p-5 rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-500 hover:bg-slate-900/50 card-3d glass-3d hover-lift-3d"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`p-2 rounded-lg ${stack.color === 'text-electric' ? 'bg-electric/10' : 'bg-emerald/10'} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <stack.icon className={`w-4 h-4 ${stack.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {stack.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-electric/30 hover:text-electric hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 italic">
            Don't see your preferred tech? We adapt to your requirements. Just mention it in your project brief.
          </p>
        </div>
      </div>
    </section>
  );
}



// ==================== WHY CHOOSE US ====================
function WhyChooseUs() {
  const comparisons = [
    { feature: 'Code Understanding', us: '100% — You write every line', them: '0% — Pre-built, unexplained' },
    { feature: 'Viva Preparation', us: 'Mock sessions + Q&A bank', them: 'None' },
    { feature: 'Deployment', us: 'Live cloud deployment', them: 'Localhost only' },
    { feature: 'Architecture', us: 'Custom, production-grade', them: 'Generic templates' },
    { feature: 'Post-Submission', us: '7–30 days support', them: 'No support' },
    { feature: 'Modifications', us: 'You can modify anything', them: 'Locked / encrypted code' },
    { feature: 'Plagiarism Risk', us: 'Zero — built from scratch', them: 'High — reused templates' },
    { feature: 'Learning Outcome', us: 'Real engineering skills', them: 'None' },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <Award className="w-3.5 h-3.5 text-electric" />
            <span className="text-xs text-slate-400 font-mono">THE DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            CogniFactlab vs <span className="text-red-400">Online Project Sellers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See why students choose mentorship over copy-paste projects.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/50 overflow-hidden glass-3d">
          {/* Header with 3D Effect */}
          <div className="grid grid-cols-3 bg-slate-900/80 border-b border-slate-800/50 backdrop-blur-xl">
            <div className="p-4 text-sm font-semibold text-slate-400">Feature</div>
            <div className="p-4 text-sm font-semibold text-electric text-center border-l border-slate-800/50 bg-electric/5">
              CogniFactlab
            </div>
            <div className="p-4 text-sm font-semibold text-red-400 text-center border-l border-slate-800/50 bg-red-500/5">
              Online Project Sellers
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-slate-900/20' : 'bg-transparent'}`}
            >
              <div className="p-4 text-sm font-medium text-white">{row.feature}</div>
              <div className="p-4 text-sm text-emerald text-center border-l border-slate-800/30 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{row.us}</span>
              </div>
              <div className="p-4 text-sm text-red-400/80 text-center border-l border-slate-800/30 flex items-center justify-center gap-1.5">
                <X className="w-4 h-4 flex-shrink-0" />
                <span>{row.them}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl border border-emerald/20 bg-emerald/5 text-center">
          <p className="text-emerald font-semibold mb-1">
            💡 The Bottom Line
          </p>
          <p className="text-slate-300 text-sm">
            Online sellers give you code you can't explain. We give you skills you'll use for your entire career.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== URGENCY BANNER ====================
function UrgencyBanner({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-6 sm:p-8 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 overflow-hidden glass-3d hover-lift-3d">
          {/* 3D Floating Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          {/* 3D Geometric Shapes */}
          <div className="absolute top-4 right-8 w-8 h-8 border border-yellow-400/30 rotate-45 spin-3d opacity-40" />
          <div className="absolute bottom-4 right-20 w-4 h-4 bg-yellow-400/40 rounded-full float-3d-fast" />
          
          <div className="relative flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center float-3d">
                <AlertCircle className="w-7 h-7 text-yellow-400" />
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                🚨 Tight Deadline? We've Got You.
              </h3>
              <p className="text-sm text-slate-400">
                Submission in 7 days or less? We offer <span className="text-yellow-400 font-semibold">express mentorship</span> with 
                dedicated daily sessions. Book immediately — slots fill fast during submission season.
              </p>
            </div>
            
            <button
              onClick={onOpenModal}
              className="flex-shrink-0 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Express Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FLOATING WHATSAPP ====================
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918828730908?text=Hi%2C%20I%20am%20interested%20in%20CogniFactlab%20mentorship"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 group"
    >
      <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}

// ==================== FAQ ====================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will I understand the code enough to answer my external examiner?',
      answer: 'Absolutely. That\'s our entire value proposition. Every line of code is written during live paired-coding sessions where you are the primary driver. We explain the "why" behind every architectural decision, data flow, and algorithm choice. By project completion, you\'ll be able to whiteboard the entire system from memory.'
    },
    {
      question: 'Do you just give me pre-written zip files?',
      answer: 'Never. CogniFactlab is an anti-cheating mentorship lab. We build WITH you through active, screen-shared sessions. You write the code, we guide the architecture. This means you actually learn the material, can modify it post-submission, and can confidently defend every decision in your viva. No copy-paste. No black boxes.'
    },
    {
      question: 'What happens if our model fails during deployment?',
      answer: 'We prepare for failure scenarios as part of the process. During Phase 4 (Deployment & Defense Prep), we stress-test your system, implement fallback mechanisms, and prepare you with answers for "what if" questions from examiners. If something breaks during live demo, you\'ll know exactly how to debug it because you built every component.'
    },
    {
      question: 'How is this different from buying a project online?',
      answer: 'Online projects are static, unexplained, and often plagiarized. With CogniFactlab, you get: (1) Custom architecture tailored to your college\'s requirements, (2) Live mentorship where you write every function, (3) Deployment to real cloud infrastructure, (4) Viva defense preparation with mock examiner sessions, (5) Post-submission support for modifications.'
    },
    {
      question: 'What if I have zero coding experience?',
      answer: 'We assess your current skill level during the technical intake call and adjust our mentorship pace accordingly. While some baseline programming knowledge is recommended, we\'ve successfully mentored students from beginner to advanced. The key requirement is willingness to actively participate in coding sessions.'
    },
    {
      question: 'Can you help with ongoing bug-fixing in existing projects?',
      answer: 'Yes! We offer targeted debugging sessions for existing projects. We don\'t just fix the bug — we explain the root cause, the fix, and how to prevent similar issues. This is listed as "Bug-Fixing" in our project requirements during intake.'
    },
    {
      question: 'What types of projects do you mentor?',
      answer: 'We cover the full spectrum: Software Development (desktop apps, automation, ERP), AI/ML (image classification, NLP, recommendation engines), Mobile Apps (React Native, Flutter), Web Applications (full-stack SaaS, e-commerce, dashboards), Cloud Deployment (AWS, Docker, CI/CD), Data Engineering (PySpark, telemetry), IoT, and custom client-requirement projects. If it involves code, we can mentor you through building it.'
    },
    {
      question: 'Is this legitimate? Will my college accept it?',
      answer: '100% legitimate. We position ourselves as project mentoring and implementation support — similar to how a senior engineer mentors a junior. You build the project with guidance, you understand every component, and you can defend it in your viva. Many students use our mentorship to upskill beyond their curriculum. We never encourage academic dishonesty.'
    }
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs text-slate-400 font-mono">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-emerald">Questions</span>
          </h2>
        </div>

        <div className="space-y-3 perspective-1000">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover-lift-3d glass-3d"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/20 transition-all duration-300"
              >
                <span className="text-sm sm:text-base font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-all duration-500 ${openIndex === idx ? 'rotate-180 text-electric' : ''}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5 animate-fade-in-up">
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== INTAKE FORM MODAL ====================
function IntakeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsAppNumber: '',
    college: '',
    department: '',
    degree: '',
    year: '',
    requirement: '',
    projectField: '',
    technologies: [] as string[],
    projectIdea: '',
    timeline: '',
    budget: '',
    whatsAppOptIn: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const techOptions = ['Python', 'ML/AI', 'Big Data', 'FastAPI', 'React', 'Cloud/DevOps', 'Java', 'Node.js', 'Mobile', 'IoT'];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.whatsAppNumber.trim()) newErrors.whatsAppNumber = 'WhatsApp number is required';
    else if (!/^\+\d{10,15}$/.test(formData.whatsAppNumber.replace(/\s/g, '')))
      newErrors.whatsAppNumber = 'Enter valid number with country code (e.g., +919876543210)';
    if (!formData.college.trim()) newErrors.college = 'College name is required';
    if (!formData.department) newErrors.department = 'Please select your department';
    if (!formData.degree) newErrors.degree = 'Please select your degree';
    if (!formData.year) newErrors.year = 'Please select your year';
    if (!formData.requirement) newErrors.requirement = 'Please select project requirement';
    if (!formData.projectField) newErrors.projectField = 'Please select project field';
    if (formData.technologies.length === 0) newErrors.technologies = 'Select at least one technology';
    if (!formData.projectIdea.trim()) newErrors.projectIdea = 'Please describe your project concept';
    if (!formData.timeline) newErrors.timeline = 'Please select your timeline';
    if (!formData.budget) newErrors.budget = 'Please select your budget range';
    if (!formData.whatsAppOptIn) newErrors.whatsAppOptIn = 'WhatsApp consent is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send directly to email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get from web3forms.com
          subject: `🚀 New Project Intake: ${formData.fullName} - ${formData.projectField}`,
          from_name: 'CogniFactlab Website',
          to: 'cogniFactlab@gmail.com',
          
          // Form data
          name: formData.fullName,
          email: 'noreply@cognifactlab.com',
          whatsapp: formData.whatsAppNumber,
          college: formData.college,
          department: formData.department,
          degree: formData.degree,
          year: formData.year,
          requirement: formData.requirement,
          project_field: formData.projectField,
          technologies: formData.technologies.join(', '),
          timeline: formData.timeline,
          budget: formData.budget,
          whatsapp_opt_in: formData.whatsAppOptIn ? 'Yes' : 'No',
          message: formData.projectIdea,
          
          // Additional metadata
          help_required: 'Mentorship & Viva Prep',
          submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed:', result);
      }

      // Also send to CRM endpoint (Google Apps Script) - optional
      try {
        await fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: formData.fullName,
            whatsAppNumber: formData.whatsAppNumber,
            college: formData.college,
            department: formData.department,
            degree: formData.degree,
            year: formData.year,
            requirement: formData.requirement,
            projectField: formData.projectField,
            technology: formData.technologies,
            projectIdea: formData.projectIdea,
            timeline: formData.timeline,
            budget: formData.budget,
            whatsAppOptIn: formData.whatsAppOptIn,
            helpRequired: 'Mentorship & Viva Prep',
          }),
        });
      } catch (crmError) {
        console.log('CRM submission skipped (optional)');
      }

    } catch (error) {
      console.error('Submission error:', error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: '', whatsAppNumber: '', college: '', department: '', degree: '', year: '',
        requirement: '', projectField: '', technologies: [], projectIdea: '', timeline: '', budget: '', whatsAppOptIn: false,
      });
    }, 3000);
  };

  const handleTechToggle = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0B0F17] border border-slate-700/50 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-800/50 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-electric" />
              Technical Intake Form
            </h2>
            <p className="text-sm text-slate-400 mt-1">Submit your project brief for mentorship assessment</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        {isSubmitted ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Intake Submitted Successfully!</h3>
            <p className="text-slate-400">We'll reach out via WhatsApp within 24 hours with your technical assessment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                <Users className="w-4 h-4 inline mr-1.5 text-slate-500" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.fullName ? 'border-red-500' : 'border-slate-700/50'} text-white placeholder-slate-500 focus:outline-none focus:border-electric transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                <Phone className="w-4 h-4 inline mr-1.5 text-slate-500" />
                WhatsApp Number (with country code) *
              </label>
              <input
                type="tel"
                value={formData.whatsAppNumber}
                onChange={(e) => setFormData({ ...formData, whatsAppNumber: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.whatsAppNumber ? 'border-red-500' : 'border-slate-700/50'} text-white placeholder-slate-500 focus:outline-none focus:border-electric transition-colors`}
                placeholder="+919876543210"
              />
              {errors.whatsAppNumber && <p className="text-xs text-red-400 mt-1">{errors.whatsAppNumber}</p>}
            </div>

            {/* College & Department Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <MapPin className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  College / University *
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.college ? 'border-red-500' : 'border-slate-700/50'} text-white placeholder-slate-500 focus:outline-none focus:border-electric transition-colors`}
                  placeholder="Your institution name"
                />
                {errors.college && <p className="text-xs text-red-400 mt-1">{errors.college}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <GraduationCap className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  Department *
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.department ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select department</option>
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Artificial Intelligence & Data Science">AI & Data Science</option>
                  <option value="Electronics & Communication">Electronics & Communication</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Applications (BCA/MCA)">Computer Applications (BCA/MCA)</option>
                  <option value="Other">Other</option>
                </select>
                {errors.department && <p className="text-xs text-red-400 mt-1">{errors.department}</p>}
              </div>
            </div>

            {/* Degree & Year Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Degree Program *</label>
                <select
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.degree ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select degree</option>
                  <option value="B.Tech/B.E.">B.Tech / B.E.</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="B.Sc IT">B.Sc IT</option>
                  <option value="M.Sc IT">M.Sc IT</option>
                </select>
                {errors.degree && <p className="text-xs text-red-400 mt-1">{errors.degree}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Year of Study *</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.year ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year / Final Year">4th Year / Final Year</option>
                  <option value="Post-Grad">Post-Grad</option>
                </select>
                {errors.year && <p className="text-xs text-red-400 mt-1">{errors.year}</p>}
              </div>
            </div>

            {/* Requirement & Project Field Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <FileText className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  Project Requirement *
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.requirement ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select requirement</option>
                  <option value="Major Project">Major / Final Year Project</option>
                  <option value="Mini Project">Mini Project</option>
                  <option value="Internship Project">Internship Project</option>
                  <option value="Research Project">Research Project</option>
                  <option value="Hackathon">Hackathon</option>
                  <option value="Project Debugging">Project Debugging</option>
                  <option value="Project Deployment">Project Deployment</option>
                  <option value="Viva Preparation">Viva / Defense Preparation</option>
                  <option value="Resume Project">Resume Project</option>
                  <option value="Just Exploring">Just Exploring</option>
                </select>
                {errors.requirement && <p className="text-xs text-red-400 mt-1">{errors.requirement}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Rocket className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  Project Field *
                </label>
                <select
                  value={formData.projectField}
                  onChange={(e) => setFormData({ ...formData, projectField: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.projectField ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select project field</option>
                  <option value="Software Development">Software Development</option>
                  <option value="AI / ML">AI / Machine Learning</option>
                  <option value="Mobile App">Mobile Application</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Cloud Deployment">Cloud Deployment</option>
                  <option value="Client Requirement">Client Requirement / Custom</option>
                  <option value="Data Engineering">Data Engineering / Big Data</option>
                  <option value="IoT">IoT / Embedded</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Not Sure">Not Sure — Need Guidance</option>
                </select>
                {errors.projectField && <p className="text-xs text-red-400 mt-1">{errors.projectField}</p>}
              </div>
            </div>

            {/* Technologies Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Code2 className="w-4 h-4 inline mr-1.5 text-slate-500" />
                Primary Technologies *
              </label>
              <div className="flex flex-wrap gap-2">
                {techOptions.map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handleTechToggle(tech)}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                      formData.technologies.includes(tech)
                        ? 'bg-electric/20 border-electric text-electric'
                        : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
              {errors.technologies && <p className="text-xs text-red-400 mt-1">{errors.technologies}</p>}
            </div>

            {/* Project Concept */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                <Brain className="w-4 h-4 inline mr-1.5 text-slate-500" />
                Project Concept / Problem Statement *
              </label>
              <textarea
                value={formData.projectIdea}
                onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
                rows={4}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.projectIdea ? 'border-red-500' : 'border-slate-700/50'} text-white placeholder-slate-500 focus:outline-none focus:border-electric transition-colors resize-none`}
                placeholder="Describe your project idea, problem you want to solve, or any specific requirements..."
              />
              {errors.projectIdea && <p className="text-xs text-red-400 mt-1">{errors.projectIdea}</p>}
            </div>

            {/* Timeline & Budget Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <Clock className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  Target Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.timeline ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select timeline</option>
                  <option value="Within 7 Days">Within 7 Days</option>
                  <option value="Within 15 Days">Within 15 Days</option>
                  <option value="1 Month+">1 Month+</option>
                </select>
                {errors.timeline && <p className="text-xs text-red-400 mt-1">{errors.timeline}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  <DollarSign className="w-4 h-4 inline mr-1.5 text-slate-500" />
                  Estimated Budget *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border ${errors.budget ? 'border-red-500' : 'border-slate-700/50'} text-white focus:outline-none focus:border-electric transition-colors`}
                >
                  <option value="">Select budget range</option>
                  <option value="Below ₹5,000">Below ₹5,000</option>
                  <option value="₹5,000 – ₹10,000">₹5,000 – ₹10,000</option>
                  <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
                  <option value="₹20,000 – ₹30,000">₹20,000 – ₹30,000</option>
                  <option value="₹30,000+">₹30,000+</option>
                  <option value="Not Decided">Not Decided</option>
                </select>
                {errors.budget && <p className="text-xs text-red-400 mt-1">{errors.budget}</p>}
              </div>
            </div>

            {/* WhatsApp Consent */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700/30">
              <input
                type="checkbox"
                id="whatsapp-consent"
                checked={formData.whatsAppOptIn}
                onChange={(e) => setFormData({ ...formData, whatsAppOptIn: e.target.checked })}
                className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-800 text-electric focus:ring-electric"
              />
              <label htmlFor="whatsapp-consent" className="text-sm text-slate-400 cursor-pointer">
                I agree to receive project schedule details, session reminders, and mentorship updates via WhatsApp. *
              </label>
            </div>
            {errors.whatsAppOptIn && <p className="text-xs text-red-400">{errors.whatsAppOptIn}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-electric hover:bg-electric-light text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Project Brief
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ==================== FOOTER ====================
function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/30 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 sphere-3d float-3d-slow opacity-40" />
        <div className="absolute bottom-10 right-10 w-16 h-16 sphere-3d-emerald float-3d opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-electric/20 rotate-45 spin-3d" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="w-6 h-6 text-electric" />
              <span className="text-lg font-bold text-white font-mono">
                Cogni<span className="text-electric">Fact</span>lab
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md mb-4">
              Build It. Understand It. Deploy It. Defend It. — Legitimate project mentoring for Software, AI/ML, 
              Mobile Apps, Web Platforms, and Cloud systems. We build WITH you — not for you.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-electric transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-electric transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-electric transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Lab Domains', 'Our Process', 'Tech Stacks', 'Student Reviews', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MessageSquare className="w-4 h-4 text-emerald" />
                WhatsApp: +91 88287 30908
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Send className="w-4 h-4 text-electric" />
                cogniFactlab@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                Mon–Sat: 10AM – 9PM IST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 CogniFactlab. All rights reserved. We mentor — we don't do your homework.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      
      {/* 3D Section Divider */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-8 items-center">
            <div className="w-3 h-3 bg-electric rounded-full float-3d-fast opacity-60" />
            <div className="w-2 h-2 bg-emerald rounded-full float-3d opacity-40" />
            <div className="w-4 h-4 border border-electric/30 rotate-45 spin-3d opacity-50" />
            <div className="w-2 h-2 bg-purple-400 rounded-full float-3d-slow opacity-50" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full float-3d-fast opacity-40" />
          </div>
        </div>
      </div>
      
      <UrgencyBanner onOpenModal={() => setIsModalOpen(true)} />
      <WhatWeBuild onOpenModal={() => setIsModalOpen(true)} />
      <Process />
      <Domains />
      <TechStacks />
      <TrustCards />
      <WhyChooseUs />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <IntakeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
