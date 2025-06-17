
import React from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              About <span className="text-gradient">SmartPreps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            We're committed to making exam preparation accessible, affordable, and effective for every learner. Our mission is to empower students with practical skills, expert guidance, and confidence for real academic success.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in Guwahati, Assam, Smart Preps began with a vision: enabling every student to conquer competitive exams, both online and offline. Our dedicated faculty, structured courses, and personalized mentoring have helped thousands of learners prepare for CLET, BANK PO, BANK CLERICAL, SSC, and State Exams.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Today, we provide not just updated study materials and regular mock tests, but also performance analytics and continuous support—ensuring students stay ahead and achieve their dreams.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
              We believe in a student-centric approach, blending technology and mentoring, so every Smart Preps learner is equipped for a brighter future.
              </p>
            </div>
            <div className="gradient-green-light rounded-2xl p-8 flex items-center justify-center">
              <Lightbulb className="w-40 h-40 text-green-600 animate-float" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Makes Us Different</h2>
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

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
