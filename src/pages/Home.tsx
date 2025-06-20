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
  },
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

// Gallery images for the gallery carousel
const galleryImages = [
  { src: "https://i.ibb.co/nN6JmJmv/IMG-8504.jpg", alt: "Classroom Session" },
  { src: "https://i.ibb.co/chN9FL2g/IMG-8512.jpg", alt: "Student Event" },
  { src: "https://i.ibb.co/sv4KdRJ5/IMG-8514.jpg", alt: "Award Ceremony" },
  { src: "https://i.ibb.co/tMDKkF7B/IMG-8533.jpg", alt: "Award Ceremony" },
  { src: "https://i.ibb.co/zHHjp529/IMG-8542.jpg", alt: "Award Ceremony" },
  { src: "https://i.ibb.co/hR5gfNg4/IMG-8550.jpg", alt: "Award Ceremony" },
  { src: "https://i.ibb.co/cS7VY7Pg/IMG-8553.jpg", alt: "Mentor Session" },
];

// Split carouselImages into two arrays
const carouselImages1 = carouselImages.slice(0, Math.ceil(carouselImages.length / 2));
const carouselImages2 = carouselImages.slice(Math.ceil(carouselImages.length / 2));

// Split galleryImages into three arrays
const galleryImages1 = galleryImages.slice(0, Math.ceil(galleryImages.length / 3));
const galleryImages2 = galleryImages.slice(Math.ceil(galleryImages.length / 3), Math.ceil(galleryImages.length * 2 / 3));
const galleryImages3 = galleryImages.slice(Math.ceil(galleryImages.length * 2 / 3));

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

  // Gallery carousel state
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const galleryPrev = () => setGalleryIndex(i => (i === 0 ? galleryImages.length - 1 : i - 1));
  const galleryNext = () => setGalleryIndex(i => (i === galleryImages.length - 1 ? 0 : i + 1));

  // Gallery carousel 1 state
  const [galleryIndex1, setGalleryIndex1] = useState(0);
  const galleryTimeout1 = useRef<NodeJS.Timeout | null>(null);
  // Gallery carousel 2 state
  const [galleryIndex2, setGalleryIndex2] = useState(0);
  const galleryTimeout2 = useRef<NodeJS.Timeout | null>(null);
  // Gallery carousel 3 state
  const [galleryIndex3, setGalleryIndex3] = useState(0);
  const galleryTimeout3 = useRef<NodeJS.Timeout | null>(null);

  // Auto-move carousel
  useEffect(() => {
    if (isGalleryPaused) return;
    galleryTimeout.current = setTimeout(() => {
      setGalleryIndex(i => (i === galleryImages.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => {
      if (galleryTimeout.current) clearTimeout(galleryTimeout.current);
    };
  }, [galleryIndex, isGalleryPaused]);

  // Auto-move for gallery carousel 1
  useEffect(() => {
    if (galleryTimeout1.current) clearTimeout(galleryTimeout1.current);
    galleryTimeout1.current = setTimeout(() => {
      setGalleryIndex1(i => (i === galleryImages1.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => { if (galleryTimeout1.current) clearTimeout(galleryTimeout1.current); };
  }, [galleryIndex1]);

  // Auto-move for gallery carousel 2
  useEffect(() => {
    if (galleryTimeout2.current) clearTimeout(galleryTimeout2.current);
    galleryTimeout2.current = setTimeout(() => {
      setGalleryIndex2(i => (i === galleryImages2.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => { if (galleryTimeout2.current) clearTimeout(galleryTimeout2.current); };
  }, [galleryIndex2]);

  // Auto-move for gallery carousel 3
  useEffect(() => {
    if (galleryTimeout3.current) clearTimeout(galleryTimeout3.current);
    galleryTimeout3.current = setTimeout(() => {
      setGalleryIndex3(i => (i === galleryImages3.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => { if (galleryTimeout3.current) clearTimeout(galleryTimeout3.current); };
  }, [galleryIndex3]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Carousel 1 state
  const [carousel1Index, setCarousel1Index] = useState(0);
  const carousel1Timeout = useRef<NodeJS.Timeout | null>(null);
  // Carousel 2 state
  const [carousel2Index, setCarousel2Index] = useState(0);
  const carousel2Timeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-move for carousel 1
  useEffect(() => {
    if (carousel1Timeout.current) clearTimeout(carousel1Timeout.current);
    carousel1Timeout.current = setTimeout(() => {
      setCarousel1Index(i => (i === carouselImages1.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => { if (carousel1Timeout.current) clearTimeout(carousel1Timeout.current); };
  }, [carousel1Index]);

  // Auto-move for carousel 2
  useEffect(() => {
    if (carousel2Timeout.current) clearTimeout(carousel2Timeout.current);
    carousel2Timeout.current = setTimeout(() => {
      setCarousel2Index(i => (i === carouselImages2.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => { if (carousel2Timeout.current) clearTimeout(carousel2Timeout.current); };
  }, [carousel2Index]);

  // Enquiry modal state
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryError, setEnquiryError] = useState('');
  const [enquiryDismissed, setEnquiryDismissed] = useState(false);

  // Auto-popup after 12 seconds if not already shown or dismissed
  useEffect(() => {
    if (showEnquiry || enquiryDismissed) return;
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, [showEnquiry, enquiryDismissed]);

  const handleEnquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiryForm({ ...enquiryForm, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitting(true);
    setEnquiryError('');
    setEnquirySuccess(false);
    // Simulate async submit
    setTimeout(() => {
      setEnquirySubmitting(false);
      setEnquirySuccess(true);
      setEnquiryForm({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  const handleEnquiryClose = () => {
    setShowEnquiry(false);
    setEnquirySuccess(false);
    setEnquiryError('');
    setEnquiryDismissed(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))]" style={{ fontFamily: 'Montserrat, Nunito, Lato, Open Sans, Poppins, sans-serif' }}>
      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-3xl w-full flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up border-2 border-[#FFB823] bg-gradient-to-br from-[#fffbe6] via-[#f7f7f7] to-[#f0f4ec]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold z-10 transition"
              onClick={handleEnquiryClose}
              aria-label="Close"
            >
              ×
            </button>
            {/* Image side */}
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-[#FFB823]/80 to-[#41644A]/70 flex items-center justify-center">
              <img
                src="https://i.ibb.co/jk97s1NY/Admissions-OPEN-NOW-Join-SMART-an-initiative-by-Smartpreps-and-access-ONE-PLATFORM-for-Banking-Railw.webp"
                alt="Enquiry"
                className="w-full h-full object-cover scale-105 shadow-xl rounded-l-3xl"
                style={{ minHeight: 420 }}
              />
            </div>
            {/* Form side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white/90">
              <h3 className="text-3xl font-extrabold mb-2 text-[#41644A] font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">Enquire Now</h3>
              <p className="mb-4 text-gray-600 text-base font-medium">Fill out the form and our team will get in touch with you soon.</p>
              <form className="space-y-4" onSubmit={handleEnquirySubmit}>
                <div>
                  <label htmlFor="enquiry-name" className="block text-sm font-semibold text-[#41644A]">Name</label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={handleEnquiryChange}
                    className="mt-1 block w-full rounded-lg border border-[#FFB823] shadow-sm focus:border-[#41644A] focus:ring-[#41644A] text-base px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-email" className="block text-sm font-semibold text-[#41644A]">Email</label>
                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    value={enquiryForm.email}
                    onChange={handleEnquiryChange}
                    className="mt-1 block w-full rounded-lg border border-[#FFB823] shadow-sm focus:border-[#41644A] focus:ring-[#41644A] text-base px-3 py-2 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="block text-sm font-semibold text-[#41644A]">Phone</label>
                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    minLength={10}
                    value={enquiryForm.phone}
                    onChange={handleEnquiryChange}
                    className="mt-1 block w-full rounded-lg border border-[#FFB823] shadow-sm focus:border-[#41644A] focus:ring-[#41644A] text-base px-3 py-2 bg-white"
                    placeholder="Enter 10 digit phone number"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-message" className="block text-sm font-semibold text-[#41644A]">Message</label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    required
                    value={enquiryForm.message}
                    onChange={handleEnquiryChange}
                    className="mt-1 block w-full rounded-lg border border-[#FFB823] shadow-sm focus:border-[#41644A] focus:ring-[#41644A] text-base px-3 py-2 bg-white"
                  />
                </div>
                {enquiryError && <div className="text-red-500 text-sm">{enquiryError}</div>}
                {enquirySuccess && <div className="text-green-600 text-base font-semibold">Thank you! We have received your enquiry.</div>}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] text-white rounded-full py-2.5 font-bold shadow-lg hover:scale-105 transition disabled:opacity-60 text-lg mt-2"
                  disabled={enquirySubmitting}
                >
                  {enquirySubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
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
                <Star key={i} className="w-4 h-4 xs:w-5 xs:h-5 text-[#FFB823] fill-[#FFB823]" fill="#FFB823" />
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
              Prepare for <span className="animate-gradient-text bg-gradient-to-r from-[#E9762B] via-[#41644A] to-[#FFB823] bg-clip-text text-transparent font-bold">CLAT, BANK PO, BANK CLERICAL, SSC, Railways Exam and State Exams</span> with
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
          <div className="text-center mb-10 sm:mb-16 w-full">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 animate-fade-in-up tracking-tight animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Experience <span className="text-[#FFB823]">Modern Learning</span>
            </h2>
            <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up text-[color:rgb(var(--primary))]">
              Discover how our innovative approach to education transforms the way
              you learn.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 w-full justify-center items-center">
            {/* Carousel 1 */}
            <div className="relative w-full max-w-3xl h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg border border-[color:rgb(var(--border))] bg-white/90">
              {carouselImages1.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img.title}
                  className={`absolute top-0 left-0 w-full h-full object-contain bg-white transition-opacity duration-700 ease-in-out ${carousel1Index === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start p-8 sm:p-10 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-xl">
                <span className="inline-block px-4 py-1 mb-2 rounded-full text-xs font-bold tracking-widest bg-[color:rgb(var(--secondary))] text-[color:rgb(var(--secondary-foreground))] shadow-md uppercase">
                  {carouselImages1[carousel1Index].title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 drop-shadow-lg text-white">
                  {carouselImages1[carousel1Index].description}
                </h3>
              </div>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {carouselImages1.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border transition-all duration-200 cursor-pointer ${carousel1Index === idx ? 'bg-[color:rgb(var(--primary))]' : 'bg-white opacity-50'} border-[color:rgb(var(--primary))]`}
                    onClick={() => setCarousel1Index(idx)}
                  />
                ))}
              </div>
            </div>
            {/* Carousel 2 */}
            <div className="relative w-full max-w-3xl h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg border border-[color:rgb(var(--border))] bg-white/90">
              {carouselImages2.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img.title}
                  className={`absolute top-0 left-0 w-full h-full object-contain bg-white transition-opacity duration-700 ease-in-out ${carousel2Index === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start p-8 sm:p-10 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-xl">
                <span className="inline-block px-4 py-1 mb-2 rounded-full text-xs font-bold tracking-widest bg-[color:rgb(var(--secondary))] text-[color:rgb(var(--secondary-foreground))] shadow-md uppercase">
                  {carouselImages2[carousel2Index].title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 drop-shadow-lg text-white">
                  {carouselImages2[carousel2Index].description}
                </h3>
              </div>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {carouselImages2.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full border transition-all duration-200 cursor-pointer ${carousel2Index === idx ? 'bg-[color:rgb(var(--primary))]' : 'bg-white opacity-50'} border-[color:rgb(var(--primary))]`}
                    onClick={() => setCarousel2Index(idx)}
                  />
                ))}
              </div>
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
              Why Choose <span className="text-[#FFB823]">SmartPreps</span>
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

      {/* Student Testimonials Section (updated with real testimonials, no images or YouTube placeholders) */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Student Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
              Hear from our students about their learning experience at SmartPreps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CLAT/Law Entrance */}
            <div className="rounded-2xl shadow-lg bg-white/90 p-8 flex flex-col items-start text-left border border-[color:rgb(var(--primary))]">
              <div className="mb-4">
                <span className="inline-block bg-[#41644A] text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">CLAT / Law Entrance</span>
              </div>
              <p className="text-lg font-medium text-[color:rgb(var(--foreground))] mb-3">“I wanted to be a lawyer since Class 10 but had no clue how to crack CLAT. Smart Preps’ logical reasoning drills and legal GK sessions from Kaushik Kalita made all the difference! Their mock tests were tougher than the actual exam—got into NLU Guwahati with a top 500 rank. Still can’t believe it!”</p>
              <div className="font-bold text-[#41644A]">Devasmita</div>
              <div className="text-sm text-[#E9762B] font-semibold">CLAT 2024</div>
            </div>
            {/* CUET */}
            <div className="rounded-2xl shadow-lg bg-white/90 p-8 flex flex-col items-start text-left border border-[color:rgb(var(--primary))]">
              <div className="mb-4">
                <span className="inline-block bg-[#E9762B] text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">CUET</span>
              </div>
              <p className="text-lg font-medium text-[color:rgb(var(--foreground))] mb-3">“CUET was a mess—too many subjects, zero direction. Smart Preps’ subject-wise strategy and NCERT-focused notes saved me! Scored 98%ile in Pol Science and got into DU. Shoutout to the teachers especially Ashirvad Kumar for tolerating my endless doubts!”</p>
              <div className="font-bold text-[#41644A]">Rishav</div>
              <div className="text-sm text-[#E9762B] font-semibold">CUET 2024</div>
            </div>
            {/* Banking Exams */}
            <div className="rounded-2xl shadow-lg bg-white/90 p-8 flex flex-col items-start text-left border border-[color:rgb(var(--primary))]">
              <div className="mb-4">
                <span className="inline-block bg-[#FFB823] text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">Banking Exams</span>
              </div>
              <p className="text-lg font-medium text-[color:rgb(var(--foreground))] mb-3">“After failing IBPS prelims twice, I joined Smart Preps’ <span className='italic'>4-month intensive batch</span>. Their daily Quant shortcuts and current affairs PDFs were gold. Cleared PO and RRB Clerk in the same year! Now working at Canara Bank, Guwahati.”</p>
              <div className="font-bold text-[#41644A]">Manash</div>
              <div className="text-sm text-[#E9762B] font-semibold">IBPS PO 2023</div>
            </div>
            {/* SSC Exams */}
            <div className="rounded-2xl shadow-lg bg-white/90 p-8 flex flex-col items-start text-left border border-[color:rgb(var(--primary))]">
              <div className="mb-4">
                <span className="inline-block bg-[#708A58] text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">SSC Exams</span>
              </div>
              <p className="text-lg font-medium text-[color:rgb(var(--foreground))] mb-3">“SSC CGL’s syllabus felt like climbing Everest—until Smart Preps’ teachers especially Nilav Kalita cut it down to the essentials. Their answer writing practice was a game-changer. Selected as Tax Assistant in my very first try! Still using their GK notes for promotions.”</p>
              <div className="font-bold text-[#41644A]">Priyanka</div>
              <div className="text-sm text-[#E9762B] font-semibold">SSC CGL 2024</div>
            </div>
          </div>
        </div>
      </section>
      {/* Elegant Divider */}
      <div className="w-full flex justify-center items-center my-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
          <path d="M0 30 Q 360 0 720 30 T 1440 30 V60 H0Z" fill="#41644A" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Article Grid Section */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-lg sm:text-xl text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
              Stay updated with our latest insights, tips, and educational resources.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {/* Example article cards */}
            {[
              {
                image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
                title: "How to Crack CLAT 2025: Top Strategies",
                description: "Discover proven strategies and tips to ace the CLAT exam from our expert mentors.",
                link: "/articles/how-to-crack-clat-2025"
              },
              {
                image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
                title: "Balancing Board Exams & Entrance Prep",
                description: "Learn how to manage your time and stress while preparing for both board and entrance exams.",
                link: "/articles/balancing-board-exams"
              },
              {
                image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
                title: "Why Mock Tests Matter",
                description: "Understand the importance of mock tests and how they boost your exam performance.",
                link: "/articles/why-mock-tests-matter"
              }
            ].map((article, idx) => (
              <div key={idx} className="rounded-2xl shadow-lg bg-white/90 p-6 flex flex-col border border-[color:rgb(var(--primary))] hover:scale-105 hover:shadow-2xl transition-all">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#41644A]">{article.title}</h3>
                <p className="text-base text-gray-700 mb-4">{article.description}</p>
                <a href={article.link} className="text-[#E9762B] font-semibold hover:underline">Read More →</a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/articles">
              <Button size="lg" className="bg-[#FFB823] text-white rounded-full hover:scale-105 transition px-8 py-3 font-semibold shadow-md text-lg">
                View All Articles
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Study Material Section */}
      <section className="relative z-10 py-16 bg-[color:rgb(var(--background))]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-serif animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent">
              Study Material
            </h2>
            <p className="text-lg sm:text-xl text-[color:rgb(var(--foreground))] max-w-2xl mx-auto">
              Get access to high-quality books, notes, and exclusive Smart Preps bags for all your exam needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            {/* Example study material cards */}
            {[
              {
                image: "https://i.ibb.co/dwnwnZN5/book1.jpg",
                title: "Comprehensive Guidebooks",
                description: "Subject-wise books for CLAT, CUET, SSC, Banking, and more."
              },
              {
                image: "https://i.ibb.co/k2k95htS/book.jpg",
                title: "Practice Workbooks",
                description: "Mock test booklets and practice sets for every exam."
              },
              {
                image: "https://i.ibb.co/cKr5F7dn/bag.jpg",
                title: "Smart Preps Bag",
                description: "Durable, stylish bags for all enrolled students."
              },
              {
                image: "https://www.educomiq.com/wp-content/uploads/2022/04/S.S-Bharti-Elementary-Maths-Optional-Class-Notes-in-English-for-SSC-CGL-Entrance-b.jpg",
                title: "Handwritten Notes",
                description: "Exclusive notes and quick revision material from our expert faculty."
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl shadow-lg bg-white/90 p-6 flex flex-col border border-[color:rgb(var(--primary))] hover:scale-105 hover:shadow-2xl transition-all">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[#41644A]">{item.title}</h3>
                <p className="text-base text-gray-700 mb-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <img src="https://smartiasfoundation.com/wp-content/uploads/2024/05/Main-2D.png" alt="Partner 4" className="h-16 w-auto bg-[#41644A] p-2 rounded-xl border border-[#708A58] shadow-md" style={{opacity: 1}} />
          </div>
        </div>
      </section>
      {/* Elegant Divider */}
      <div className="w-full flex justify-center items-center my-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
          <path d="M0 30 Q 360 0 720 30 T 1440 30 V60 H0Z" fill="#41644A" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Floating CTA Button (now opens enquiry modal) */}
      <button
        onClick={() => setShowEnquiry(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#FFB823] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#41644A] hover:scale-105 transition-all font-bold text-lg flex items-center gap-2 animate-bounce"
        style={{ boxShadow: '0 4px 24px rgba(255,184,35,0.18)' }}
        aria-label="Enquire Now CTA"
      >
        <Target className="w-6 h-6" /> Get Free Counseling
      </button>

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