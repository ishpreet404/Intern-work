import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CourseCard from '@/components/CourseCard';
import InquiryForm from '@/components/InquiryForm';
import { ChevronDown, BookOpen, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';

const COLORS = {
  black: "#181818",
  white: "#F8F8F8",
  gray: "#232323",
  faintGreen: "#1B5E20",
  accentGreen: "#00A64F",
  faintOrange: "#FFB74D",
  accentOrange: "#FF9800",
};

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
          border: `2px solid #00A64F`,
          borderRadius: "50%",
          background: `#00A64F10`,
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
          background: "#00A64F",
          borderRadius: "50%",
          boxShadow: `0 2px 6px 1px #00A64F24`,
          willChange: "transform"
        }}
        aria-hidden="true"
      />
    </>
  );
};

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const courses = [
    {
      title: "Web Development Mastery",
      description: "Learn modern web development with React, Node.js, and MongoDB. Build real-world projects from scratch.",
      duration: "12 weeks",
      students: "500+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Data Science Fundamentals",
      description: "Master Python, statistics, machine learning, and data visualization to become a data scientist.",
      duration: "16 weeks",
      students: "300+",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      title: "Digital Marketing Pro",
      description: "Complete digital marketing course covering SEO, social media, PPC, and content marketing strategies.",
      duration: "8 weeks",
      students: "750+",
      level: "All Levels",
      image: "/placeholder.svg"
    },
    {
      title: "UI/UX Design Studio",
      description: "Create beautiful, user-centered designs using Figma, Adobe XD, and design thinking principles.",
      duration: "10 weeks",
      students: "400+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter. Deploy to app stores.",
      duration: "14 weeks",
      students: "250+",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      title: "Cloud Computing AWS",
      description: "Master Amazon Web Services, cloud architecture, and DevOps practices for modern applications.",
      duration: "12 weeks",
      students: "350+",
      level: "Intermediate",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "2000+", label: "Students" },
    { number: "50+", label: "Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Structured curriculum designed to achieve specific career outcomes"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description: "Join a vibrant community of learners and get peer support"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Earn certificates recognized by top companies worldwide"
    }
  ];

  const handleCourseInquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsInquiryOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CursorRing />
      <div className="min-h-screen w-full overflow-x-hidden pt-20" style={{background: `linear-gradient(120deg, ${COLORS.black} 0%, ${COLORS.gray} 60%, ${COLORS.faintGreen} 100%)`}}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 border-b" style={{background: `${COLORS.gray}CC`, borderColor: COLORS.accentGreen}}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: COLORS.accentGreen}}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold" style={{color: COLORS.accentGreen}}>EduGreen</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="transition-colors" style={{color: COLORS.white}}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="transition-colors" style={{color: COLORS.white}}
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="transition-colors" style={{color: COLORS.white}}
                >
                  Courses
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16 animate-fade-in-up">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{color: COLORS.white}}>
                  Transform Your Future with
                  <span style={{color: COLORS.accentGreen, display: 'block'}}>Expert-Led Courses</span>
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: COLORS.accentGreen}}>
                  Join thousands of learners who've advanced their careers through our comprehensive, industry-focused online courses. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => scrollToSection('courses')}
                    size="lg" 
                    className="hover:opacity-90 transition-opacity text-lg px-8 py-3"
                    style={{background: COLORS.accentGreen, color: COLORS.white}}
                  >
                    Explore Courses
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('about')}
                    variant="outline" 
                    size="lg"
                    className="text-lg px-8 py-3"
                    style={{borderColor: COLORS.accentGreen, color: COLORS.accentGreen, background: COLORS.gray}}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, color: COLORS.white }}>
                  <div className="text-3xl font-bold mb-2" style={{color: COLORS.accentGreen}}>{stat.number}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-16">
              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce transition-colors"
                style={{color: COLORS.accentGreen}}
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 animate-fade-in-up" style={{background: COLORS.gray}}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{color: COLORS.white}}>
                  About <span style={{color: COLORS.accentGreen}}>EduGreen</span>
                </h2>
                <p className="text-xl max-w-3xl mx-auto animate-fade-in-up" style={{color: COLORS.accentGreen}}>
                  We're dedicated to making quality education accessible to everyone. Our mission is to empower learners with practical skills and knowledge that drive real career growth.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-slide-in-left">
                  <h3 className="text-2xl font-bold mb-4" style={{color: COLORS.white}}>Our Story</h3>
                  <p className="mb-6" style={{color: COLORS.white}}>
                    Founded in 2020, EduGreen emerged from a simple belief: everyone deserves access to world-class education. We've partnered with industry experts to create courses that bridge the gap between learning and real-world application.
                  </p>
                  <p style={{color: COLORS.accentGreen}}>
                    Today, we're proud to have helped over 2,000 students achieve their career goals through our comprehensive learning platform.
                  </p>
                </div>
                <div className="rounded-2xl p-8 flex items-center justify-center" style={{background: COLORS.gray}}>
                  <Lightbulb className="w-32 h-32" style={{color: COLORS.accentGreen}} />
                </div>
              </div>
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, background: COLORS.gray, border: `1.5px solid ${COLORS.accentGreen}33` }}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{background: COLORS.accentGreen}}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2" style={{color: COLORS.white}}>{feature.title}</h4>
                      <p className="text-sm" style={{color: COLORS.accentGreen}}>{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 animate-fade-in-up" style={{background: COLORS.black}}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{color: COLORS.white}}>
                Our <span style={{color: COLORS.accentGreen}}>Courses</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto animate-fade-in-up" style={{color: COLORS.accentGreen}}>
                Choose from our carefully curated selection of courses designed by industry experts to give you the skills employers are looking for.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CourseCard
                    {...course}
                    onInquire={() => handleCourseInquiry(course.title)}
                    style={{background: COLORS.gray, color: COLORS.white, border: `1.5px solid ${COLORS.accentGreen}33`}}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12" style={{background: COLORS.gray}}>
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: COLORS.accentGreen}}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold" style={{color: COLORS.accentGreen}}>EduGreen</span>
              </div>
              <p className="mb-6" style={{color: COLORS.white}}>
                Empowering learners worldwide with quality education
              </p>
              <p className="text-sm" style={{color: COLORS.faintOrange}}>
                © 2024 EduGreen. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Inquiry Form Modal */}
        <InquiryForm
          courseName={selectedCourse || ''}
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
        />
      </div>
    </>
  );
};

export default Index;
