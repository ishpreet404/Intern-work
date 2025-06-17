
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CourseCard from '@/components/CourseCard';
import InquiryForm from '@/components/InquiryForm';
import { ChevronDown, BookOpen, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-green-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">EduGreen</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Courses
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Transform Your Future with
                <span className="text-gradient block">Expert-Led Courses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who've advanced their careers through our comprehensive, 
                industry-focused online courses. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => scrollToSection('courses')}
                  size="lg" 
                  className="gradient-green hover:opacity-90 transition-opacity text-lg px-8 py-3"
                >
                  Explore Courses
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline" 
                  size="lg"
                  className="border-green-300 text-green-600 hover:bg-green-50 text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce text-green-600 hover:text-green-700 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                About <span className="text-gradient">EduGreen</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                We're dedicated to making quality education accessible to everyone. Our mission is to 
                empower learners with practical skills and knowledge that drive real career growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-6">
                  Founded in 2020, EduGreen emerged from a simple belief: everyone deserves access to 
                  world-class education. We've partnered with industry experts to create courses that 
                  bridge the gap between learning and real-world application.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped over 2,000 students achieve their career goals 
                  through our comprehensive learning platform.
                </p>
              </div>
              <div className="gradient-green-light rounded-2xl p-8 flex items-center justify-center">
                <Lightbulb className="w-32 h-32 text-green-600 animate-float" />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-green rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-br from-green-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Our <span className="text-gradient">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Choose from our carefully curated selection of courses designed by industry experts 
              to give you the skills employers are looking for.
            </p>
          </div>

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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-green rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EduGreen</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering learners worldwide with quality education
            </p>
            <p className="text-gray-500 text-sm">
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
  );
};

export default Index;
