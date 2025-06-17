
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronDown, BookOpen, Users, Award, Target, Heart, Lightbulb, Star, Trophy, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { number: "2000+", label: "Students" },
    { number: "50+", label: "Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Expert Instructors",
      description: "Learn from industry professionals with 10+ years of experience in their respective fields."
    },
    {
      icon: Trophy,
      title: "Proven Success",
      description: "Our students consistently excel in CLET, BANK PO, BANK CLERICAL, SSC, and State Exams."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Choose online or offline classes, access updated study materials, and track your performance with analytics."
    },
    {
      icon: Globe,
      title: "Student-Centric Support",
      description: "Benefit from regular mock tests, doubt-clearing sessions, and comprehensive mentoring—whenever you need it."
    }
  ];

  const carouselImages = [
    {
      url: "https://i.ibb.co/SXNPPv7f/Screenshot-2025-06-18-042727.png",
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world scenarios"
    },
    {
      url: "https://i.ibb.co/tM1FV7gX/Screenshot-2025-06-18-042759.png",
      title: "Modern Technology",
      description: "Learn cutting-edge tools and technologies used in industry"
    },
    {
      url: "https://i.ibb.co/SXNPPv7f/Screenshot-2025-06-18-042727.png",
      title: "Expert Guidance",
      description: "Get personalized mentorship from industry professionals"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Achieve More with Smart Preps
                <span className="text-gradient block">Expert-Led Courses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock your success with high-quality, affordable coaching—online and offline—in Guwahati, Assam. Prepare for CLET, BANK PO, BANK CLERICAL, SSC, and State Exams with structured courses, expert faculty, and personalized mentoring.
              </p>
              <h1 className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Start your journey to success with Smart Preps today!</h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    className="gradient-green hover:opacity-90 transition-opacity text-lg px-8 py-3"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-green-300 text-green-600 hover:bg-green-50 text-lg px-8 py-3"
                  >
                    Learn More
                  </Button>
                </Link>
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
              onClick={() => scrollToSection('carousel')}
              className="animate-bounce text-green-600 hover:text-green-700 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section id="carousel" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Experience <span className="text-gradient">Modern Learning</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Discover how our innovative approach to education transforms the way you learn
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                          <p className="text-lg opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Why Choose <span className="text-gradient">EduGreen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              We're committed to providing the best learning experience with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="gradient-green hover:opacity-90 transition-opacity">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
