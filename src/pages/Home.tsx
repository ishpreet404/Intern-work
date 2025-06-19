import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown, Star, Trophy, Clock, Globe,
  Users, BookOpen, Award, Target, Heart, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import CourseCard from '@/components/CourseCard';

// FeatureBadge updated to use CSS variables and Tailwind classes
const FeatureBadge: React.FC<{
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ icon: Icon, children, className = "", style }) => (
  <div
    className={`flex items-center gap-3 border rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-300 bg-[rgba(var(--card)/0.85)] border-[color:rgb(var(--primary))] ${className}`}
    style={style}
  >
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shadow gradient-green"
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="font-semibold text-sm text-[color:rgb(var(--primary))]">{children}</span>
  </div>
);

// BgBlob and BgGradientSvg updated to use palette
const BgBlob = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 600 600" fill="none">
    <g filter="url(#filter0_f_692_37)">
      <ellipse
        cx="300"
        cy="300"
        rx="200"
        ry="100"
        fill="#708A58"
        fillOpacity="0.15"
      />
    </g>
  </svg>
);

const BgGradientSvg = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover pointer-events-none animate-fade-in z-0"
    style={{ mixBlendMode: "multiply", opacity: 0.13 }}
    viewBox="0 0 1440 580"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient
        id="radial"
        cx="60%"
        cy="50%"
        r="120%"
        fx="80%"
        fy="60%"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB823" stopOpacity="0.30" />
        <stop offset="1" stopColor="#2D4F2B" stopOpacity="0.05" />
      </radialGradient>
    </defs>
    <rect width="1440" height="580" fill="url(#radial)" />
  </svg>
);

const stats = [
  { number: "2000+", label: "Students", icon: Users },
  { number: "50+", label: "Courses", icon: BookOpen },
  { number: "95%", label: "Success Rate", icon: Award },
  { number: "24/7", label: "Support", icon: Heart }
] as const;

const whyChooseUs = [
  {
    icon: Star,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with 10+ years of experience in their respective fields."
  },
  {
    icon: Trophy,
    title: "Proven Success",
    description:
      "Our students consistently excel in CLET, BANK PO, BANK CLERICAL, SSC, and State Exams."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description:
      "Choose online or offline classes, access updated study materials, and track your performance with analytics."
  },
  {
    icon: Globe,
    title: "Student-Centric Support",
    description:
      "Benefit from regular mock tests, doubt-clearing sessions, and comprehensive mentoring—whenever you need it."
  }
] as const;

const carouselImages = [
  {
    url: "https://i.ibb.co/hJCx4FSN/Admissions-OPEN-NOW-Join-SMART-an-initiative-by-Smartpreps-and-access-ONE-PLATFORM-for-Banking-Railw.webp",
    title: "Railways Exam",
    description: "National Railway Success"
  },
  {
    url: "https://i.ibb.co/4nLXf48X/Admissions-OPEN-NOW-Join-SMART-an-initiative-by-Smartpreps-and-access-ONE-PLATFORM-for-Banking-Railw.webp",
    title: "SSC",
    description: "Small time roots Big time SSC results"
  },
  {
    url: "https://i.ibb.co/RTJ2bv5V/Admissions-OPEN-NOW-Join-SMART-an-initiative-by-Smartpreps-and-access-ONE-PLATFORM-for-Banking-Railw.webp",
    title: "Expert Guidance",
    description: "Get personalized mentorship from industry professionals"
  }
] as const;

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const Home: React.FC = () => {
  // Carousel state for dot indicator
  const [emblaApi, setEmblaApi] = useState<import("@/components/ui/carousel").CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragThreshold = 50;

  // Modal state for course details
  const [modalCourse, setModalCourse] = useState<{
    title: string;
    description: string;
    duration: string;
    students: string;
    level: string;
    image: string;
    rating: number;
    tags: string[];
  } | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))]" style={{ fontFamily: 'Montserrat, Nunito, Lato, Open Sans, Poppins, sans-serif' }}>
      {/* Decorative SVG background overlays for extra depth */}
      <svg className="absolute top-0 left-0 w-[60vw] h-[40vw] opacity-20 z-0 pointer-events-none" viewBox="0 0 600 400" fill="none">
        <ellipse cx="300" cy="200" rx="300" ry="200" fill="#708A58" fillOpacity="0.10" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-[50vw] h-[30vw] opacity-10 z-0 pointer-events-none" viewBox="0 0 500 300" fill="none">
        <ellipse cx="250" cy="150" rx="250" ry="150" fill="#FFB823" fillOpacity="0.10" />
      </svg>
      <BgGradientSvg />
      <BgBlob className="absolute blur-3xl opacity-40 top-[-100px] left-[-150px] w-[400px] h-[300px] z-1 pointer-events-none" />
      <BgBlob className="absolute blur-2xl opacity-40 bottom-[-100px] right-[-120px] w-[350px] h-[300px] z-1 pointer-events-none" />

      {/* Hero Section with video background */}
      <section
        id="home"
        className="relative z-10 pt-10 pb-8 xs:pt-12 xs:pb-10 sm:pt-16 sm:pb-12 px-2 xs:px-4 sm:px-8"
        tabIndex={-1}
      >
        {/* GIF background as image */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden rounded-2xl xs:rounded-3xl">
          <img
            src="https://i.ibb.co/3KD1Q8K/IMG-8559.gif"
            alt="Animated background"
            className="w-full h-full object-cover opacity-90 brightness-110"
            draggable="false"
            aria-hidden="true"
          />
        </div>
        {/* Hero Card with aligned badges inside */}
        <div
          className="rounded-2xl xs:rounded-3xl shadow-2xl max-w-2xl xs:max-w-3xl sm:max-w-6xl w-full mx-auto p-0 text-center flex flex-col items-stretch overflow-visible relative border-0 mt-4 mb-8 bg-[color:rgb(var(--card))] border-[color:rgb(var(--primary))] backdrop-blur-md bg-opacity-80"
          style={{ boxShadow: "0 12px 48px rgba(112,138,88,0.13)", border: "1.5px solid #708A5855", backgroundColor: "rgba(var(--card),0.80)" }}
        >
          {/* Main hero content with image section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex-1 px-2 xs:px-4 sm:px-14 py-6 xs:py-8 sm:py-10 flex flex-col justify-center items-center relative z-20 min-w-[220px] xs:min-w-[320px] text-white drop-shadow-lg"
          >
            <div className="flex justify-center items-center gap-1 mb-3 xs:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 text-[#FFB823]" />
              ))}
              <span className="ml-2 text-xs xs:text-sm font-medium text-white drop-shadow">Rated 4.9/5 by our students</span>
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-3 xs:mb-5 leading-tight drop-shadow-lg tracking-normal animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent simple-hero-title">
              Achieve More
              <br className="hidden xs:block" /> with
              <span className="ml-2 animate-gradient-text bg-gradient-to-r from-[#E9762B] via-[#41644A] to-[#FFB823] bg-clip-text text-transparent simple-hero-title">Smart Preps</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-2xl mb-3 xs:mb-5 sm:mb-7 text-white opacity-90 drop-shadow">
              Unlock your success with high-quality, affordable coaching  offline 
              <br />
              Prepare for CLAT, BANK PO, BANK CLERICAL, SSC, and State Exams with
              structured courses and expert faculty.
            </p>
            <h2 className="font-medium mb-5 xs:mb-7 text-[#FFB823] drop-shadow text-base xs:text-lg">Start your journey to success with Smart Preps today!</h2>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-[#708A58] text-white rounded-full border-none shadow-lg hover:bg-[#E9762B] hover:text-white hover:scale-105 transition font-semibold inline-flex items-center px-6 xs:px-7 py-2.5 xs:py-3"
                >
                  <BookOpen className="mr-2 h-5 w-5" /> Explore Courses
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#708A58] text-[#708A58] bg-[color:rgb(var(--background))] rounded-full shadow hover:bg-[#41644A] hover:text-white font-semibold inline-flex items-center px-6 xs:px-7 py-2.5 xs:py-3 transition-colors duration-200"
                >
                  <Lightbulb className="mr-2 h-5 w-5" /> Learn More
                </Button>
              </Link>
            </div>
            {/* Feature badges below buttons */}
            <div className="flex flex-wrap justify-center gap-2 xs:gap-4 mt-6 xs:mt-8">
              <FeatureBadge icon={Star} className="static">Expert Tutors</FeatureBadge>
              <FeatureBadge icon={Award} className="static">Top Rated Courses</FeatureBadge>
              <FeatureBadge icon={Target} className="static">Goal-Oriented</FeatureBadge>
              <FeatureBadge icon={BookOpen} className="static">20+ Courses</FeatureBadge>
            </div>
          </motion.div>
        </div>
        {/* Decorative wave separator */}
        <div className="mx-auto -mb-4 mt-8 md:mt-14 max-w-2xl opacity-70 pointer-events-none select-none">
          <svg viewBox="0 0 1440 72" fill="none" className="w-full h-12 sm:h-16">
            <path
              fill="#708A58"
              fillOpacity="0.13"
              d="M0 17L48 29.8C96 43 192 69 288 63.7C384 57.7 480 18.3 576 8.5C672 0.5 768 21.1 864 37.3C960 52.9 1056 63 1152 63C1248 63 1344 53.1 1392 47.2L1440 41V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V17Z"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 xs:gap-7 max-w-2xl xs:max-w-4xl sm:max-w-6xl mx-auto z-10 relative mt-6 xs:mt-8 mb-8 xs:mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center shadow-lg rounded-2xl px-4 xs:px-8 py-6 xs:py-10 bg-[color:rgb(var(--card))] border-0 hover:scale-105 hover:shadow-2xl transition backdrop-blur-md bg-opacity-70 text-white drop-shadow"
              style={{ boxShadow: "0 6px 24px rgba(112,138,88,0.13)", border: "1.5px solid #708A5833", backgroundColor: "rgba(var(--card),0.70)" }}
            >
              <span
                className="rounded-full p-2 xs:p-3 shadow mb-2 gradient-green"
              >
                <stat.icon className="text-white h-6 w-6 xs:h-7 xs:w-7" />
              </span>
              <div className="text-2xl xs:text-3xl font-bold mt-1 xs:mt-2 text-white drop-shadow">
                {stat.number}
              </div>
              <div className="text-sm xs:text-base font-medium mt-0.5 xs:mt-1 text-[#FFB823] drop-shadow">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => {
              const el = document.getElementById("carousel");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="animate-bounce text-[#708A58]"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </section>

      {/* Carousel */}
      <section
        id="carousel"
        className="relative z-10 py-14 sm:py-20 animate-fade-in bg-[color:rgb(var(--card))]"
      >
        <div className="w-full px-0 sm:px-0 flex flex-col items-center">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up tracking-tight animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Experience <span className="text-[#FFB823]">Modern Learning</span>
            </h2>
            <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up text-[color:rgb(var(--primary))]">
              Discover how our innovative approach to education transforms the way
              you learn.
            </p>
          </div>
          {/* Custom Crossfade Carousel */}
          <div className="relative w-full max-w-5xl h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg border border-[color:rgb(var(--border))] bg-white/90"
            onMouseDown={e => {
              dragStartX.current = e.clientX;
              setIsDragging(true);
            }}
            onMouseMove={e => {
              if (isDragging && dragStartX.current !== null) {
                const delta = e.clientX - dragStartX.current;
                if (Math.abs(delta) > dragThreshold) {
                  if (delta < 0) setSelectedIndex(prev => prev === carouselImages.length - 1 ? 0 : prev + 1);
                  else setSelectedIndex(prev => prev === 0 ? carouselImages.length - 1 : prev - 1);
                  setIsDragging(false);
                  dragStartX.current = null;
                }
              }
            }}
            onMouseUp={() => {
              setIsDragging(false);
              dragStartX.current = null;
            }}
            onMouseLeave={() => {
              setIsDragging(false);
              dragStartX.current = null;
            }}
            onTouchStart={e => {
              dragStartX.current = e.touches[0].clientX;
              setIsDragging(true);
            }}
            onTouchMove={e => {
              if (isDragging && dragStartX.current !== null && e.touches.length > 0) {
                const delta = e.touches[0].clientX - dragStartX.current;
                if (Math.abs(delta) > dragThreshold) {
                  if (delta < 0) setSelectedIndex(prev => prev === carouselImages.length - 1 ? 0 : prev + 1);
                  else setSelectedIndex(prev => prev === 0 ? carouselImages.length - 1 : prev - 1);
                  setIsDragging(false);
                  dragStartX.current = null;
                }
              }
            }}
            onTouchEnd={() => {
              setIsDragging(false);
              dragStartX.current = null;
            }}
          >
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.title}
                className={`absolute top-0 left-0 w-full h-full object-contain bg-white transition-opacity duration-700 ease-in-out ${selectedIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ transitionProperty: 'opacity' }}
              />
            ))}
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 w-full flex flex-col items-start p-8 sm:p-10 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-xl">
              <span className="inline-block px-4 py-1 mb-2 rounded-full text-xs font-bold tracking-widest bg-[color:rgb(var(--secondary))] text-[color:rgb(var(--secondary-foreground))] shadow-md uppercase">
                {carouselImages[selectedIndex].title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 drop-shadow-lg text-white">
                {carouselImages[selectedIndex].description}
              </h3>
            </div>
            {/* Controls */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[color:rgb(var(--primary))] text-white rounded-full p-2 shadow hover:bg-[color:rgb(var(--secondary))] transition z-30"
              onClick={() => setSelectedIndex((prev) => prev === 0 ? carouselImages.length - 1 : prev - 1)}
              aria-label="Previous"
            >
              <ChevronDown className="rotate-90 w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[color:rgb(var(--primary))] text-white rounded-full p-2 shadow hover:bg-[color:rgb(var(--secondary))] transition z-30"
              onClick={() => setSelectedIndex((prev) => prev === carouselImages.length - 1 ? 0 : prev + 1)}
              aria-label="Next"
            >
              <ChevronDown className="-rotate-90 w-6 h-6" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full border transition-all duration-200 cursor-pointer ${selectedIndex === idx ? 'bg-[color:rgb(var(--primary))]' : 'bg-white opacity-50'} border-[color:rgb(var(--primary))]`}
                  onClick={() => setSelectedIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section Below Carousel (moved above Why Choose Us) */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-8">
          {/* Text Left */}
          <div className="flex-1 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">

            Empowering Futures
            </h3>
            <p className="text-lg sm:text-xl mb-6 text-[color:rgb(var(--foreground))] font-light font-sans max-w-xl">
            At SmartPreps, we combine innovative teaching with a nurturing environment to unlock every student’s full potential. Our passionate mentors, up-to-date resources, and personalized guidance help learners excel—in exams and in life.            </p>
            <ul className="list-disc pl-5 space-y-2 text-[color:rgb(var(--primary))] font-sans">
              <li>Personalized learning paths</li>
              <li>Supportive, growth-focused community</li>
              <li>Cutting-edge digital resources</li>
              <li>Workshops, events, and more!</li>
            </ul>
            <div className="mt-8">
              <Link to="/about">
                <Button size="lg" className="bg-[#E9762B] text-white rounded-full shadow hover:bg-[#41644A] font-semibold px-8 py-3">Learn More</Button>
              </Link>
            </div>
          </div>
          {/* Image Right */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/jk97s1NY/Admissions-OPEN-NOW-Join-SMART-an-initiative-by-Smartpreps-and-access-ONE-PLATFORM-for-Banking-Railw.webp"
              alt="SmartPreps"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-[color:rgb(var(--primary))]"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-8">
          {/* Image Left */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="/public/Screenshot 2025-06-18 042727.png"
              alt="Who We Are"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-[color:rgb(var(--primary))]"
            />
          </div>
          {/* Text Right */}
          <div className="flex-1 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Who We Are
            </h3>
            <p className="text-lg sm:text-xl mb-6 text-[color:rgb(var(--foreground))] font-light font-sans max-w-xl">
            Smart Preps, based in Guwahati, Assam, offers quality, affordable coaching for CLAT, BANK PO, BANK CLERICAL, SSC, and STATE EXAMS. Choose online or offline classes—our caring expert faculty is committed to your success.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[color:rgb(var(--primary))] font-sans">
              <li>Structured courses & regular classes</li>
              <li>Inclusive, diverse learning environment</li>
              <li>Mock tests & doubt-clearing support</li>
              <li>Trusted by thousands of families</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--card))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Featured Courses
            </h2>
            <p className="text-lg sm:text-xl text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
              Explore our most popular and impactful courses, designed to help you achieve your academic and career goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Law Entrances",
                description: "CLAT, AILET, SLAT & OLET preparations. Apply now to avail 7 day trial classes.",
                duration: "1 Year",
                students: "500+",
                level: "Beginner",
                image: "https://i.ibb.co/YTXbnGtw/Screenshot-2025-06-18-052048.png",
                rating: 4.9,
                tags: ["CLAT", "AILET", "Trial"],
              },
              {
                title: "CUET Exams",
                description: "The classes start soon. Apply now to avail 7 day trial classes.",
                duration: "1 Year",
                students: "500+",
                level: "Intermediate",
                image: "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png",
                rating: 4.8,
                tags: ["CUET", "UG"],
              },
              {
                title: "ADRE 3.0",
                description: "The classes start soon. Apply now to avail 7 day trial classes.",
                duration: "1 Year",
                students: "500+",
                level: "Advanced",
                image: "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png",
                rating: 4.7,
                tags: ["ADRE", "Govt"],
              }
            ].map((course, idx) => (
              <CourseCard
                key={idx}
                title={course.title}
                description={course.description}
                duration={course.duration}
                students={course.students}
                level={course.level}
                image={course.image}
                rating={course.rating}
                tags={course.tags}
                onInquire={() => window.location.href = '/contact'}
                onDetails={() => setModalCourse(course)}
              />
            ))}
          </div>
          {/* Modal for course details */}
          {modalCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in-up">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                  onClick={() => setModalCourse(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <img src={modalCourse.image} alt={modalCourse.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#41644A]">{modalCourse.title}</h3>
                <div className="flex gap-2 mb-2">
                  {modalCourse.tags && modalCourse.tags.map((tag, i) => (
                    <span key={i} className="bg-[#FFB823] text-white text-xs px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500 font-bold">{modalCourse.rating}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                </div>
                <p className="mb-4 text-gray-700">{modalCourse.description}</p>
                <div className="flex gap-4 mb-4">
                  <span className="flex items-center gap-1 text-gray-600"><Clock className="w-4 h-4" /> {modalCourse.duration}</span>
                  <span className="flex items-center gap-1 text-gray-600"><Users className="w-4 h-4" /> {modalCourse.students}</span>
                </div>
                <Button onClick={() => { window.location.href = '/contact'; }} className="w-full gradient-green">Inquire Now</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-0 py-14 sm:py-20 animate-fade-in-up bg-[color:rgb(var(--background))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up tracking-tight animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent font-serif">
              Why Choose <span className="text-[#FFB823]">EduGreen</span>
            </h2>
            <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up text-[color:rgb(var(--primary))]">
              We're committed to providing the best learning experience with proven
              results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">
            {whyChooseUs.map((feature, idx) => (
              <Card
                key={idx}
                className="border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 bg-[color:rgb(var(--card))]"
                style={{
                  animationDelay: `${idx * 0.1 + 0.2}s`,
                  boxShadow: '0 6px 24px rgba(112,138,88,0.09)',
                  borderRadius: '1.5rem',
                  border: '1.5px solid #708A5822',
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                }}
              >
                <CardContent className="p-0 text-center flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md gradient-green"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 text-[color:rgb(var(--primary))]">
                    {feature.title}
                  </h4>
                  <p className="text-base sm:text-lg text-[color:rgb(var(--foreground))]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[#FFB823] text-white rounded-full hover:scale-105 transition px-8 py-3 font-semibold shadow-md text-lg"
              >
                <Target className="inline mr-2 w-6 h-6" /> Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Elegant Divider */}
      <div className="w-full flex justify-center items-center my-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
          <path d="M0 30 Q 360 0 720 30 T 1440 30 V60 H0Z" fill="#708A58" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Testimonials Section */}
      <section className="relative z-9 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
              Hear from our students and their journey to success with SmartPreps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[{
              name: "Priya Sharma",
              text: "SmartPreps helped me crack CLAT with confidence. The mentors are amazing!",
              image: "https://randomuser.me/api/portraits/women/68.jpg",
              course: "CLAT"
            }, {
              name: "Rahul Das",
              text: "The personal attention and mock tests made all the difference. Highly recommended!",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              course: "BANK PO"
            }, {
              name: "Ananya Roy",
              text: "I loved the flexible learning options and the supportive community.",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
              course: "SSC"
            }].map((t, idx) => (
              <div key={idx} className="rounded-2xl shadow-xl bg-white/80 backdrop-blur-md p-8 flex flex-col items-center text-center border border-[color:rgb(var(--primary))]">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#FFB823]" />
                <p className="text-lg font-medium text-[color:rgb(var(--foreground))] mb-3">“{t.text}”</p>
                <div className="font-bold text-[#41644A]">{t.name}</div>
                <div className="text-sm text-[#E9762B] font-semibold">{t.course} Success</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Elegant Divider */}
      <div className="w-full flex justify-center items-center my-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
          <path d="M0 30 Q 360 60 720 30 T 1440 30 V60 H0Z" fill="#FFB823" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Partner Logos Section */}
      <section className="relative z-0 py-10 bg-[color:rgb(var(--card))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-base sm:text-lg text-[color:rgb(var(--primary))] max-w-xl mx-auto">
              Trusted by leading organizations and educational partners.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* <img src="/public/placeholder.svg" alt="Partner 1" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" /> */}
            {/* <img src="/public/placeholder.svg" alt="Partner 2" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" /> */}
            {/* <img src="/public/placeholder.svg" alt="Partner 3" className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 transition" /> */}
            <img src="https://smartiasfoundation.com/wp-content/uploads/2024/05/Main-2D.png" alt="Partner 4" className="h-12 w-auto opacity-80  " />
          </div>
        </div>
      </section>
      {/* Elegant Divider */}
      <div className="w-full flex justify-center items-center my-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
          <path d="M0 30 Q 360 0 720 30 T 1440 30 V60 H0Z" fill="#41644A" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Floating CTA Button */}
      <a
        href="/contact"
        className="fixed bottom-8 right-8 z-50 bg-[#FFB823] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#41644A] hover:scale-105 transition-all font-bold text-lg flex items-center gap-2 animate-bounce"
        style={{ boxShadow: '0 4px 24px rgba(255,184,35,0.18)' }}
        aria-label="Contact Us CTA"
      >
        <Target className="w-6 h-6" /> Get Free Counseling
      </a>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 300% 300%;
          animation: gradientMove 4s linear infinite;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-family: 'Poppins', 'Montserrat', 'Nunito', 'Lato', 'Open Sans', Arial, Helvetica, sans-serif !important;
        }
        .font-serif, h2.font-serif, h3.font-serif, h1.font-serif {
          font-family: 'Poppins', 'Montserrat', 'Nunito', 'Lato', 'Open Sans', Arial, Helvetica, sans-serif !important;
        }
        body, .font-sans, .text-base, .text-lg, .text-xl, .text-2xl, .text-3xl, .text-4xl, .text-5xl, .text-6xl, .text-7xl, .text-8xl, .text-9xl {
          font-family: 'Poppins', 'Montserrat', 'Nunito', 'Lato', 'Open Sans', Arial, Helvetica, sans-serif !important;
          letter-spacing: 0.01em;
        }
        .font-light, .font-normal, .font-medium, .font-semibold, .font-bold, .font-extrabold {
          font-family: 'Poppins', 'Montserrat', 'Nunito', 'Lato', 'Open Sans', Arial, Helvetica, sans-serif !important;
        }
        .simple-hero-title {
          font-family: 'Poppins', 'Montserrat', 'Nunito', 'Lato', 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
      `}</style>
    </div>
  );
};

export default Home;