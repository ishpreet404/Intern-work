import React, { useEffect, useRef, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import InquiryForm from '@/components/InquiryForm';

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

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const courses = [
    {
      "title": "Law Entrances",
      "description": "CLAT, AILET, SLAT & OLET preparations. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/YTXbnGtw/Screenshot-2025-06-18-052048.png"
    },
    {
      "title": "CUET Exams",
      "description": "The classes start soon. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png"
    },
    {
      "title": "ADRE 3.0",
      "description": "The classes start soon. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png"
    }
    // {
    //   title: "UI/UX Design Studio",
    //   description: "Create beautiful, user-centered designs using Figma, Adobe XD, and design thinking principles. Build a professional portfolio.",
    //   duration: "10 weeks",
    //   students: "400+",
    //   level: "Intermediate",
    //   image: "/placeholder.svg"
    // },
    // {
    //   title: "Mobile App Development",
    //   description: "Build iOS and Android apps using React Native and Flutter. Learn to deploy to app stores and monetize your applications.",
    //   duration: "14 weeks",
    //   students: "250+",
    //   level: "Advanced",
    //   image: "/placeholder.svg"
    // },
    // {
    //   title: "Cloud Computing AWS",
    //   description: "Master Amazon Web Services, cloud architecture, and DevOps practices for modern applications. Get AWS certified.",
    //   duration: "12 weeks",
    //   students: "350+",
    //   level: "Intermediate",
    //   image: "/placeholder.svg"
    // },
    // {
    //   title: "Cybersecurity Essentials",
    //   description: "Learn ethical hacking, network security, and risk assessment. Protect organizations from cyber threats and vulnerabilities.",
    //   duration: "10 weeks",
    //   students: "200+",
    //   level: "Intermediate",
    //   image: "/placeholder.svg"
    // },
    // {
    //   title: "Artificial Intelligence",
    //   description: "Explore machine learning, deep learning, and neural networks. Build AI applications and understand the future of technology.",
    //   duration: "18 weeks",
    //   students: "180+",
    //   level: "Advanced",
    //   image: "/placeholder.svg"
    // },
    // {
    //   title: "Business Analytics",
    //   description: "Learn to analyze business data, create insights, and make data-driven decisions. Master Excel, SQL, and Tableau.",
    //   duration: "8 weeks",
    //   students: "320+",
    //   level: "Beginner",
    //   image: "/placeholder.svg"
    // }
  ];

  const handleCourseInquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsInquiryOpen(true);
  };

  return (
    <>
      <CursorRing />
      <div className="min-h-screen w-full overflow-x-hidden pt-20" style={{background: `linear-gradient(120deg, ${COLORS.black} 0%, ${COLORS.gray} 60%, ${COLORS.faintGreen} 100%)`}}>
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up" style={{color: COLORS.white}}>
              Our <span style={{color: COLORS.accentGreen}}>Courses</span>
            </h1>
            <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{color: COLORS.accentGreen}}>
              Choose from our carefully curated selection of courses designed by industry experts to give you the skills employers are looking for.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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

export default Courses;
