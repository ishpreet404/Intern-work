import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Heart, Award, Lightbulb, CheckCircle } from 'lucide-react';

const About = () => {
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

  const achievements = [
    "Founded in 2020 with a mission to democratize education",
    "Over 2,000 successful graduates worldwide",
    "95% job placement rate within 6 months",
    "Partnerships with 50+ leading tech companies",
    "24/7 student support and mentorship programs",
    "Industry-recognized certification programs"
  ];

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

  return (
    <>
      <CursorRing />
      <div className="min-h-screen w-full overflow-x-hidden pt-20" style={{background: `linear-gradient(120deg, ${COLORS.black} 0%, ${COLORS.gray} 60%, ${COLORS.faintGreen} 100%)`}}>
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in-up" style={{color: COLORS.white}}>
                About <span style={{color: COLORS.accentGreen}}>SmartPreps</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto animate-fade-in-up" style={{color: COLORS.accentGreen}}>
                We're committed to making exam preparation accessible, affordable, and effective for every learner. Our mission is to empower students with practical skills, expert guidance, and confidence for real academic success.
              </p>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-6" style={{color: COLORS.white}}>Our Story</h2>
                <p className="mb-6 text-lg leading-relaxed" style={{color: COLORS.white}}>
                Founded in Guwahati, Assam, Smart Preps began with a vision: enabling every student to conquer competitive exams, both online and offline. Our dedicated faculty, structured courses, and personalized mentoring have helped thousands of learners prepare for CLET, BANK PO, BANK CLERICAL, SSC, and State Exams.
                </p>
                <p className="mb-6 text-lg leading-relaxed" style={{color: COLORS.accentGreen}}>
                Today, we provide not just updated study materials and regular mock tests, but also performance analytics and continuous support—ensuring students stay ahead and achieve their dreams.
                </p>
                <p className="text-lg leading-relaxed" style={{color: COLORS.faintOrange}}>
                We believe in a student-centric approach, blending technology and mentoring, so every Smart Preps learner is equipped for a brighter future.
                </p>
              </div>
              <div className="rounded-2xl p-8 flex items-center justify-center" style={{background: COLORS.gray}}>
                <Lightbulb className="w-40 h-40" style={{color: COLORS.accentGreen}} />
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12" style={{color: COLORS.white}}>What Makes Us Different</h2>
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

            {/* Achievements */}
            <div className="rounded-2xl p-8 shadow-lg" style={{background: COLORS.gray}}>
              <h2 className="text-3xl font-bold text-center mb-8" style={{color: COLORS.white}}>Our Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6" style={{color: COLORS.accentGreen}} />
                    <p style={{color: COLORS.white}}>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
