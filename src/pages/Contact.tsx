import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

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
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 to-green-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fade-in-up">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              Have questions about our courses? Need help choosing the right path for your career? 
              We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in-up shadow-lg border-0 bg-white rounded-[2rem]">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-green-600">Send us a Message</CardTitle>
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
                        className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-green-50 placeholder-gray-400 shadow-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-green-50 placeholder-gray-400 shadow-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-green-50 placeholder-gray-400 shadow-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full border border-green-200 focus:border-green-400 rounded-full px-6 py-3 bg-green-50 placeholder-gray-400 shadow-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border border-green-200 focus:border-green-400 rounded-3xl px-6 py-4 bg-green-50 placeholder-gray-400 shadow-sm resize-none transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center shadow-md"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Get in Touch</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Ready to start your learning journey? Our team is here to guide you every step of the way.
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-green-600 font-medium mb-1">{item.details}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Additional Info */}
              <Card className="border-green-100 bg-gradient-green-light">
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-600 text-xs sm:text-base">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    call us directly during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
