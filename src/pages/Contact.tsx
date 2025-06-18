import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/meokzggo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast({
          title: "Submission Failed",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "smartpreps.official@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9287987525",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "2nd Floor, Parnil Complex, Zoo Road Tiniali , RG Baruah Road, Guwahati, Assam 781024",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-6pm",
      description: "Weekend support available"
    }
  ];

  return (
    <>
      <CursorRing />
      <div className="min-h-screen w-full overflow-x-hidden pt-20" style={{background: `linear-gradient(120deg, ${COLORS.black} 0%, ${COLORS.gray} 60%, ${COLORS.faintGreen} 100%)`}}>
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-16">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up" style={{color: COLORS.white}}>
                Contact <span style={{color: COLORS.accentGreen}}>Us</span>
              </h1>
              <p className="text-base sm:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{color: COLORS.accentGreen}}>
                Have questions about our courses? Need help choosing the right path for your career? We're here to help you succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <Card className="animate-fade-in-up shadow-lg border-0 rounded-[2rem]" style={{background: COLORS.gray}}>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl" style={{color: COLORS.accentGreen}}>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-[#232323] placeholder-gray-400 text-white shadow-sm transition-all duration-200"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-[#232323] placeholder-gray-400 text-white shadow-sm transition-all duration-200"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-[#232323] placeholder-gray-400 text-white shadow-sm transition-all duration-200"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-[#232323] placeholder-gray-400 text-white shadow-sm transition-all duration-200"
                    />
                    <textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border border-green-200 focus:border-green-400 rounded-2xl px-6 py-4 bg-[#232323] placeholder-gray-400 text-white shadow-sm transition-all duration-200"
                      rows={5}
                    />
                    <Button type="submit" className="w-full py-3 rounded-full font-bold" style={{background: COLORS.accentGreen, color: COLORS.white}}>
                      <Send className="inline mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-6 rounded-2xl shadow-lg" style={{background: COLORS.gray}}>
                    <info.icon className="w-8 h-8" style={{color: COLORS.accentGreen}} />
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{color: COLORS.white}}>{info.title}</h3>
                      <p className="text-sm" style={{color: COLORS.accentGreen}}>{info.details}</p>
                      <p className="text-xs" style={{color: COLORS.faintOrange}}>{info.description}</p>
                    </div>
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

export default Contact;
