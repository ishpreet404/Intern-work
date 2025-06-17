
import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import InquiryForm from '@/components/InquiryForm';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const courses = [
    {
      title: "Web Development Mastery",
      description: "Learn modern web development with React, Node.js, and MongoDB. Build real-world projects from scratch and deploy them to production.",
      duration: "12 weeks",
      students: "500+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Data Science Fundamentals",
      description: "Master Python, statistics, machine learning, and data visualization to become a data scientist. Work with real datasets and build predictive models.",
      duration: "16 weeks",
      students: "300+",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      title: "Digital Marketing Pro",
      description: "Complete digital marketing course covering SEO, social media, PPC, and content marketing strategies. Learn to drive traffic and conversions.",
      duration: "8 weeks",
      students: "750+",
      level: "All Levels",
      image: "/placeholder.svg"
    },
    {
      title: "UI/UX Design Studio",
      description: "Create beautiful, user-centered designs using Figma, Adobe XD, and design thinking principles. Build a professional portfolio.",
      duration: "10 weeks",
      students: "400+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter. Learn to deploy to app stores and monetize your applications.",
      duration: "14 weeks",
      students: "250+",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      title: "Cloud Computing AWS",
      description: "Master Amazon Web Services, cloud architecture, and DevOps practices for modern applications. Get AWS certified.",
      duration: "12 weeks",
      students: "350+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Cybersecurity Essentials",
      description: "Learn ethical hacking, network security, and risk assessment. Protect organizations from cyber threats and vulnerabilities.",
      duration: "10 weeks",
      students: "200+",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Artificial Intelligence",
      description: "Explore machine learning, deep learning, and neural networks. Build AI applications and understand the future of technology.",
      duration: "18 weeks",
      students: "180+",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      title: "Business Analytics",
      description: "Learn to analyze business data, create insights, and make data-driven decisions. Master Excel, SQL, and Tableau.",
      duration: "8 weeks",
      students: "320+",
      level: "Beginner",
      image: "/placeholder.svg"
    }
  ];

  const handleCourseInquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Choose from our carefully curated selection of courses designed by industry experts 
            to give you the skills employers are looking for.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CourseCard
                {...course}
                onInquire={() => handleCourseInquiry(course.title)}
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
  );
};

export default Courses;
