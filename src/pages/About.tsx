import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Heart, Award, Lightbulb, CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

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

  const instructors = [
    {
      name: 'Rohit Sharma',
      role: 'Founder & Lead Mentor',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: '10+ years in competitive exam coaching. Passionate about student success.'
    },
    {
      name: 'Priya Das',
      role: 'Senior Faculty',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Expert in logical reasoning and current affairs. Inspires confidence.'
    },
    {
      name: 'Amitav Baruah',
      role: 'Quantitative Aptitude Mentor',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
      bio: 'Makes math fun and accessible for all learners.'
    }
  ];

  const faqs = [
    {
      q: 'What makes SmartPreps unique?',
      a: 'Personalized mentoring, updated study material, and a vibrant student community.'
    },
    {
      q: 'Are your certificates recognized?',
      a: 'Yes, our certificates are recognized by top companies and institutions.'
    },
    {
      q: 'Do you offer online and offline classes?',
      a: 'Yes, we offer both modes to suit every learner’s needs.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden pt-20 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))]">
      {/* Decorative background blob */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[color:rgb(var(--primary))]/20 via-[color:rgb(var(--secondary))]/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none z-0" />
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-up" style={{ color: '#41644A' }}>
              About <span style={{ color: '#E9762B' }}>SmartPreps</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ color: '#0D4715', background: '#F1F0E9CC', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px #41644A22' }}>
              We're committed to making exam preparation accessible, affordable, and effective for every learner. Our mission is to empower students with practical skills, expert guidance, and confidence for real academic success.
            </p>
          </div>
          {/* Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#41644A' }}>Our Story</h2>
              <p className="mb-6 text-lg leading-relaxed text-[color:rgb(var(--foreground))] bg-white/60 rounded-lg px-4 py-2 shadow-sm">
                Founded in Guwahati, Assam, Smart Preps began with a vision: enabling every student to conquer competitive exams, both online and offline. Our dedicated faculty, structured courses, and personalized mentoring have helped thousands of learners prepare for CLET, BANK PO, BANK CLERICAL, SSC, and State Exams.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-[color:rgb(var(--primary))] bg-[color:rgb(var(--secondary))]/10 rounded-lg px-4 py-2">
                Today, we provide not just updated study materials and regular mock tests, but also performance analytics and continuous support—ensuring students stay ahead and achieve their dreams.
              </p>
              <p className="text-lg leading-relaxed text-[color:rgb(var(--secondary))] bg-[color:rgb(var(--primary))]/10 rounded-lg px-4 py-2">
                We believe in a student-centric approach, blending technology and mentoring, so every Smart Preps learner is equipped for a brighter future.
              </p>
            </div>
            <div className="rounded-3xl p-10 flex items-center justify-center bg-gradient-to-br from-[color:rgb(var(--primary))]/10 to-[color:rgb(var(--secondary))]/10 shadow-xl border-2 border-[color:rgb(var(--primary))]/20">
              <Lightbulb className="w-40 h-40 text-[color:rgb(var(--primary))] drop-shadow-lg" />
            </div>
          </div>
          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#41644A' }}>What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow animate-fade-in-up bg-white/80 backdrop-blur-md border-2 border-[#41644A] rounded-2xl card-glass" style={{ animationDelay: `${index * 0.1}s`, boxShadow: '0 4px 24px #E9762B22' }}>
                  <CardContent className="p-7 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#41644A] to-[#E9762B] shadow-lg border-2 border-[#E9762B]">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-[color:rgb(var(--foreground))] text-lg">{feature.title}</h4>
                    <p className="text-sm text-[color:rgb(var(--primary))]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Meet Our Instructors Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#41644A' }}>Meet Our Instructors</h2>
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-6 xs:gap-8">
              {instructors.map((inst, idx) => (
                <Card key={idx} className="w-72 p-6 flex flex-col items-center bg-white/90 border-2 border-[#41644A] shadow-xl rounded-2xl hover:scale-105 transition-transform">
                  <Avatar className="w-20 h-20 mb-4 shadow-lg">
                    <AvatarImage src={inst.img} alt={inst.name} />
                    <AvatarFallback>{inst.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="font-bold text-lg mb-1" style={{ color: '#41644A' }}>{inst.name}</div>
                  <div className="text-sm text-[#E9762B] mb-2">{inst.role}</div>
                  <div className="text-center text-[color:rgb(var(--foreground))] text-sm">{inst.bio}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements List */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#41644A' }}>Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 max-w-5xl mx-auto">
              {achievements.map((item, idx) => (
                <Card key={idx} className="flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF1CA] to-[#F1F0E9] border-2 border-[#E9762B] rounded-2xl px-6 py-8 shadow-lg animate-fade-in-up hover:scale-105 transition-transform" style={{ boxShadow: '0 4px 24px #E9762B22' }}>
                  <div className="mb-4">
                    <CheckCircle className="w-10 h-10 text-[#E9762B] drop-shadow" />
                  </div>
                  <span className="text-lg text-center font-semibold text-[color:rgb(var(--foreground))]">{item}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-24 max-w-3xl mx-auto px-2 xs:px-0">
            <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight" style={{ color: '#41644A' }}>Frequently Asked Questions</h2>
            <div className="rounded-3xl bg-gradient-to-br from-[#FFF1CA] via-[#F1F0E9] to-[#FFF1CA] shadow-2xl border-2 border-[#41644A] p-1">
              <Accordion type="single" collapsible className="rounded-3xl overflow-hidden">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="group border-b last:border-b-0 border-[#E9762B] bg-white/95 transition-all duration-300">
                    <AccordionTrigger className="flex items-center gap-2 xs:gap-3 px-4 xs:px-8 py-4 xs:py-6 text-lg xs:text-xl font-semibold text-left text-[#41644A] transition-all duration-300 hover:bg-[#FFF1CA]/60 group-data-[state=open]:bg-[#E9762B]/10 group-data-[state=open]:text-[#E9762B]">
                      <span className="flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#E9762B] text-white font-bold text-base xs:text-lg shadow-md transition-all duration-300 group-data-[state=open]:bg-[#41644A] group-data-[state=open]:scale-110">
                        {idx + 1}
                      </span>
                      <span className="flex-1">{faq.q}</span>
                      <svg className="w-4 h-4 xs:w-5 xs:h-5 ml-1 xs:ml-2 transition-transform duration-300 group-data-[state=open]:rotate-180 text-[#41644A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-12 py-6 text-base text-[#0D4715] bg-[#FFF1CA]/80 rounded-b-3xl animate-fade-in-up transition-all duration-500 shadow-inner">
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <style>{`
              .animate-fade-in-up {
                animation: fadeInUp 0.5s cubic-bezier(.39,.575,.565,1) both;
              }
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
