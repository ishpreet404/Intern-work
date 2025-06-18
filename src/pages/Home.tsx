import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  ChevronDown, Star, Trophy, Clock, Globe,
  Users, BookOpen, Award, Target, Heart, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ----- COLOR PALETTE -----
const COLORS = {
  black: "#181818",
  white: "#F8F8F8",
  gray: "#232323",
  faintGreen: "#1B5E20",
  accentGreen: "#00A64F",
  faintOrange: "#FFB74D",
  accentOrange: "#FF9800",
};

// Custom cursor: ring and dot
const CursorRing: React.FC = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let frame: number;

    const animate = () => {
      dotX += (mouseX - dotX) * 0.28;
      dotY += (mouseY - dotY) * 0.28;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (dot.current) dot.current.style.transform = `translate(-50%, -50%) translate(${dotX}px,${dotY}px)`;
      if (ring.current) ring.current.style.transform = `translate(-50%, -50%) translate(${ringX}px,${ringY}px)`;
      frame = requestAnimationFrame(animate);
    };

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", move);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", move);
    };
  }, []);

  if ("ontouchstart" in window) return null;

  return (
    <>
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[100] pointer-events-none"
        style={{
          width: 38,
          height: 38,
          border: `2px solid ${COLORS.accentGreen}`,
          borderRadius: "50%",
          background: `${COLORS.accentGreen}10`,
          transition: "border .2s",
          willChange: "transform"
        }}
        aria-hidden="true"
      />
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[101] pointer-events-none"
        style={{
          width: 9,
          height: 9,
          background: COLORS.accentGreen,
          borderRadius: "50%",
          boxShadow: `0 2px 6px 1px ${COLORS.accentGreen}24`,
          willChange: "transform"
        }}
        aria-hidden="true"
      />
    </>
  );
};

const FeatureBadge: React.FC<{
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ icon: Icon, children, className = "", style }) => (
  <div
    className={`flex items-center gap-3 border rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-300 ${className}`}
    style={{
      background: `rgba(24,24,24,0.85)`,
      borderColor: COLORS.accentGreen,
      ...style
    }}
  >
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center shadow"
      style={{
        background: `linear-gradient(135deg, ${COLORS.accentGreen} 0%, ${COLORS.faintGreen} 100%)`
      }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <span className="font-semibold text-sm" style={{ color: COLORS.accentGreen }}>{children}</span>
  </div>
);

const BgBlob = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 600 600" fill="none">
    <g filter="url(#filter0_f_692_37)">
      <ellipse
        cx="300"
        cy="300"
        rx="200"
        ry="100"
        fill={COLORS.accentGreen}
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
        <stop stopColor={COLORS.accentGreen} stopOpacity="0.30" />
        <stop offset="1" stopColor={COLORS.black} stopOpacity="0.05" />
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
    url: "https://i.ibb.co/SXNPPv7/Screenshot-2025-06-18-042727.png",
    title: "Interactive Learning",
    description: "Engage with hands-on projects and real-world scenarios"
  },
  {
    url: "https://i.ibb.co/tM1FV7gX/Screenshot-2025-06-18-042759.png",
    title: "Modern Technology",
    description: "Learn cutting-edge tools and technologies used in industry"
  },
  {
    url: "https://i.ibb.co/SXNPPv7/Screenshot-2025-06-18-042727.png",
    title: "Expert Guidance",
    description: "Get personalized mentorship from industry professionals"
  }
] as const;

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const Home: React.FC = () => (
  <div
    style={{
      background: `linear-gradient(120deg, ${COLORS.black} 0%, ${COLORS.gray} 60%, ${COLORS.faintGreen} 100%)`,
      backgroundAttachment: "fixed"
    }}
    className="relative w-full overflow-x-hidden bg-fixed font-sans pt-20"
  >
    {/* Decorative SVG background overlays for extra depth */}
    <svg className="absolute top-0 left-0 w-[60vw] h-[40vw] opacity-20 z-0 pointer-events-none" viewBox="0 0 600 400" fill="none">
      <ellipse cx="300" cy="200" rx="300" ry="200" fill={COLORS.accentGreen} fillOpacity="0.10" />
    </svg>
    <svg className="absolute bottom-0 right-0 w-[50vw] h-[30vw] opacity-10 z-0 pointer-events-none" viewBox="0 0 500 300" fill="none">
      <ellipse cx="250" cy="150" rx="250" ry="150" fill={COLORS.accentOrange} fillOpacity="0.10" />
    </svg>
    <BgGradientSvg />
    <CursorRing />
    <BgBlob className="absolute blur-3xl opacity-40 top-[-100px] left-[-150px] w-[400px] h-[300px] z-1 pointer-events-none" />
    <BgBlob className="absolute blur-2xl opacity-40 bottom-[-100px] right-[-120px] w-[350px] h-[300px] z-1 pointer-events-none" />

    {/* Hero */}
    <section
      id="home"
      className="relative z-10 pt-10 pb-8 sm:pt-16 sm:pb-12" // Reduced padding
    >
      <div className="container mx-auto px-4 sm:px-8 relative">
        {/* Hero Card with aligned badges inside */}
        <div
          className="rounded-3xl shadow-2xl max-w-6xl w-full mx-auto p-0 text-center flex flex-col items-stretch overflow-visible relative border-0 mt-4 mb-8" // Reduced margin
          style={{
            background: `linear-gradient(135deg, ${COLORS.gray} 70%, ${COLORS.black} 100%)`,
            boxShadow: `0 12px 48px ${COLORS.accentGreen}22`,
            border: `1.5px solid ${COLORS.faintGreen}55`,
          }}
        >
          {/* Main hero content with image section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex-1 px-4 sm:px-14 py-10 flex flex-col justify-center items-center relative z-20 min-w-[320px]" // Reduced py
          >
            <div
              className="flex justify-center items-center gap-1 mb-4"
              style={{ animationDelay: "0.1s" }}
            >
              <Star className="w-5 h-5" style={{ color: COLORS.accentOrange }} />
              <Star className="w-5 h-5" style={{ color: COLORS.accentOrange }} />
              <Star className="w-5 h-5" style={{ color: COLORS.accentOrange }} />
              <Star className="w-5 h-5" style={{ color: COLORS.accentOrange }} />
              <Star className="w-5 h-5" style={{ color: COLORS.accentOrange }} />
              <span className="ml-2 text-sm font-medium" style={{ color: COLORS.accentGreen }}>
                Rated 4.9/5 by our students
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-extrabold mb-5 leading-tight drop-shadow-lg"
              style={{
                color: COLORS.white,
                letterSpacing: 1.5,
                textShadow: `0 2px 16px ${COLORS.faintGreen}55`
              }}
            >
              Achieve More
              <br className="hidden sm:block" /> with
              <span
                style={{
                  color: COLORS.accentGreen,
                  textShadow: `0 2px 16px ${COLORS.accentGreen}55`
                }}
              >{" "}Smart Preps</span>
            </h1>
            <p className="text-lg sm:text-2xl mb-5 sm:mb-7" style={{ color: COLORS.white, opacity: 0.85 }}>
              Unlock your success with high-quality, affordable coaching—online
              and offline—in Guwahati, Assam.
              <br />
              Prepare for CLET, BANK PO, BANK CLERICAL, SSC, and State Exams with
              structured courses and expert faculty.
            </p>
            <h2 className="font-medium mb-7" style={{ color: COLORS.accentGreen }}>
              Start your journey to success with Smart Preps today!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button
                  size="lg"
                  style={{
                    background: COLORS.accentGreen,
                    color: COLORS.white,
                    borderRadius: "9999px",
                    border: "none",
                    boxShadow: `0 2px 12px ${COLORS.accentGreen}33`
                  }}
                  className="hover:scale-105 transition font-semibold inline-flex items-center px-7 py-3 shadow-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" /> Explore Courses
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  style={{
                    borderColor: COLORS.accentGreen,
                    color: COLORS.accentGreen,
                    background: COLORS.black,
                    borderRadius: "9999px",
                    boxShadow: `0 2px 12px ${COLORS.accentGreen}11`
                  }}
                  className="hover:bg-[#232323] font-semibold inline-flex items-center px-7 py-3"
                >
                  <Lightbulb className="mr-2 h-5 w-5" /> Learn More
                </Button>
              </Link>
            </div>
            {/* Feature badges below buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <FeatureBadge icon={Star} className="static">Expert Tutors</FeatureBadge>
              <FeatureBadge icon={Award} className="static">Top Rated Courses</FeatureBadge>
              <FeatureBadge icon={Target} className="static">Goal-Oriented</FeatureBadge>
              <FeatureBadge icon={BookOpen} className="static">20+ Courses</FeatureBadge>
            </div>
          </motion.div>
        </div>
        {/* Decorative wave separator */}
        <div className="mx-auto -mb-4 mt-8 md:mt-14 max-w-2xl opacity-70 pointer-events-none select-none"> {/* Reduced margin */}
          <svg viewBox="0 0 1440 72" fill="none" className="w-full h-12 sm:h-16">
            <path
              fill={COLORS.accentGreen}
              fillOpacity="0.13"
              d="M0 17L48 29.8C96 43 192 69 288 63.7C384 57.7 480 18.3 576 8.5C672 0.5 768 21.1 864 37.3C960 52.9 1056 63 1152 63C1248 63 1344 53.1 1392 47.2L1440 41V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V17Z"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 max-w-6xl mx-auto z-10 relative mt-8 mb-10"> {/* Reduced margin */}
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center shadow-lg rounded-2xl px-8 py-10 bg-[#232323]/95 border-0 hover:scale-105 hover:shadow-2xl transition backdrop-blur-md"
              style={{
                boxShadow: `0 6px 24px ${COLORS.accentGreen}22`,
                border: `1.5px solid ${COLORS.faintGreen}33`,
              }}
            >
              <span
                className="rounded-full p-3 shadow mb-2"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accentGreen} 0%, ${COLORS.faintGreen} 100%)`,
                }}
              >
                <stat.icon className="text-white h-7 w-7" />
              </span>
              <div className="text-3xl font-bold mt-2" style={{ color: COLORS.white }}>
                {stat.number}
              </div>
              <div className="text-base font-medium mt-1" style={{ color: COLORS.accentGreen }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8"> {/* Reduced margin */}
          <button
            onClick={() => {
              const el = document.getElementById("carousel");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 60; // Offset for navbar
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="animate-bounce"
            style={{ color: COLORS.accentGreen }}
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>

    {/* Carousel */}
    <section
      id="carousel"
      className="relative z-10 py-14 sm:py-20 animate-fade-in-up"
      style={{ background: `linear-gradient(120deg, ${COLORS.gray} 80%, ${COLORS.black} 100%)` }}
    >
      <div className="container mx-auto px-2 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up tracking-tight"
              style={{ color: COLORS.white, letterSpacing: 1 }}>
            Experience <span style={{
              color: COLORS.accentGreen
            }}>Modern Learning</span>
          </h2>
          <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up"
            style={{ color: COLORS.accentGreen }}>
            Discover how our innovative approach to education transforms the way
            you learn.
          </p>
        </div>
        <div className="w-full max-w-[99vw] sm:max-w-[92vw] md:max-w-[80vw] lg:max-w-6xl mx-auto rounded-3xl shadow-2xl p-2 sm:p-6 relative bg-[#232323]/95 border-0"
          style={{
            background: `linear-gradient(120deg, ${COLORS.gray} 70%, ${COLORS.black} 100%)`,
            boxShadow: `0 16px 64px ${COLORS.accentGreen}22`,
            border: `1.5px solid ${COLORS.faintGreen}22`
          }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative h-64 sm:h-[28rem] rounded-3xl shadow-xl overflow-hidden group transition-all hover:scale-[1.03] hover:shadow-2xl duration-300 bg-gradient-to-br from-[#232323] via-[#181818] to-[#232323]">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 grayscale"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1B5E20]/80 via-[#232323]/30 to-transparent pointer-events-none">
                      <div className="p-6 sm:p-10 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                          {img.title}
                        </h3>
                        <p className="text-lg sm:text-xl opacity-90 drop-shadow">
                          {img.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, idx) => (
                <span key={idx}
                  className={`w-3 h-3 rounded-full border opacity-70`}
                  style={{
                    background: idx === 0 ? COLORS.accentGreen : COLORS.gray,
                    borderColor: COLORS.accentOrange,
                  }} />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="relative z-10 py-14 sm:py-20 animate-fade-in-up"
      style={{ background: `linear-gradient(120deg, ${COLORS.black} 80%, ${COLORS.gray} 100%)` }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in-up tracking-tight"
            style={{ color: COLORS.white, letterSpacing: 1 }}>
            Why Choose <span style={{
              color: COLORS.accentOrange
            }}>EduGreen</span>
          </h2>
          <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up"
            style={{ color: COLORS.accentGreen }}>
            We're committed to providing the best learning experience with proven
            results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">
          {whyChooseUs.map((feature, idx) => (
            <Card
              key={idx}
              className="border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 bg-[#232323]/95"
              style={{
                animationDelay: `${idx * 0.1 + 0.2}s`,
                boxShadow: `0 6px 24px ${COLORS.accentGreen}18`,
                borderRadius: '1.5rem',
                border: `1.5px solid ${COLORS.faintGreen}22`,
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
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.accentGreen} 0%, ${COLORS.faintGreen} 100%)`,
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3"
                  style={{ color: COLORS.accentGreen }}>
                  {feature.title}
                </h4>
                <p className="text-base sm:text-lg" style={{ color: COLORS.white }}>
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
              style={{
                background: COLORS.accentOrange,
                color: COLORS.white,
                borderRadius: "9999px"
              }}
              className="hover:scale-105 transition px-8 py-3 font-semibold shadow-md text-lg"
            >
              <Target className="inline mr-2 w-6 h-6" /> Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;