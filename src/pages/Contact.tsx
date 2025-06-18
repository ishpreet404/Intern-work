import React, { useEffect, useState } from 'react';
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
    <div className="min-h-screen w-full overflow-x-hidden pt-20 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))]">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-10 text-center animate-gradient-text bg-gradient-to-r from-[#41644A] via-[#E9762B] to-[#FFB823] bg-clip-text text-transparent font-serif">
            Contact <span className="text-[#FFB823]">Us</span>
          </h1>
          {/* Elegant Divider */}
          <div className="w-full flex justify-center items-center my-0 mb-10">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full h-10">
              <path d="M0 30 Q 360 0 720 30 T 1440 30 V60 H0Z" fill="#708A58" fillOpacity="0.10" />
            </svg>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="flex items-center gap-5 p-6 bg-[color:rgb(var(--card))] border border-[color:rgb(var(--primary))]/20 shadow-sm animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[color:rgb(var(--primary))]">
                    <info.icon className="w-7 h-7 text-[color:rgb(var(--primary-foreground))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[color:rgb(var(--foreground))]">{info.title}</h4>
                    <p className="text-[color:rgb(var(--primary))]">{info.details}</p>
                    <p className="text-sm text-[color:rgb(var(--secondary))]">{info.description}</p>
                  </div>
                </Card>
              ))}
              {/* Map Integration */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[color:rgb(var(--primary))]/20 mt-8 animate-fade-in-up">
                <iframe
                  title="Emerald Learning Garden Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.073073289889!2d91.7969643150342!3d26.16418498344506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a598b2e2b7e2b%3A0x6e2e2e2e2e2e2e2e!2sParnil%20Complex%2C%20Zoo%20Road%20Tiniali%2C%20RG%20Baruah%20Rd%2C%20Guwahati%2C%20Assam%20781024!5e0!3m2!1sen!2sin!4v1687080000000!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Contact Form */}
            <Card className="p-8 bg-[color:rgb(var(--card))] border border-[color:rgb(var(--primary))]/20 shadow-md animate-fade-in-up backdrop-blur-md bg-opacity-90">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[color:rgb(var(--foreground))] mb-2">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/90 border border-[color:rgb(var(--primary))]/20 text-[color:rgb(var(--foreground))] placeholder-[#708A58] focus:bg-white"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/90 border border-[color:rgb(var(--primary))]/20 text-[color:rgb(var(--foreground))] placeholder-[#708A58] focus:bg-white"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/90 border border-[color:rgb(var(--primary))]/20 text-[color:rgb(var(--foreground))] placeholder-[#708A58] focus:bg-white"
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/90 border border-[color:rgb(var(--primary))]/20 text-[color:rgb(var(--foreground))] placeholder-[#708A58] focus:bg-white"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/90 border border-[color:rgb(var(--primary))]/20 text-[color:rgb(var(--foreground))] placeholder-[#708A58] focus:bg-white"
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full bg-[color:rgb(var(--primary))] text-[color:rgb(var(--primary-foreground))] hover:bg-[color:rgb(var(--secondary))] hover:text-[color:rgb(var(--secondary-foreground))] transition-colors focus:ring-2 focus:ring-[#FFB823] focus:outline-none">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Social/Contact Links */}
        <div className="flex justify-center gap-6 mt-12 mb-4">
          <a href="mailto:smartpreps.official@gmail.com" aria-label="Email" className="text-[#708A58] hover:text-[#FFB823] text-2xl transition-colors"><Mail /></a>
          <a href="tel:+919287987525" aria-label="Phone" className="text-[#708A58] hover:text-[#FFB823] text-2xl transition-colors"><Phone /></a>
          <a href="https://goo.gl/maps/2Qw1k1k1k1k1k1k1A" target="_blank" rel="noopener noreferrer" aria-label="Map" className="text-[#708A58] hover:text-[#FFB823] text-2xl transition-colors"><MapPin /></a>
        </div>
        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#41644A] font-serif">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/80 rounded-xl p-4 shadow border-l-4 border-[#FFB823]">
              <div className="font-semibold text-[#708A58]">How soon will I get a response?</div>
              <div className="text-gray-700">We aim to respond to all queries within 24 hours on business days.</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow border-l-4 border-[#FFB823]">
              <div className="font-semibold text-[#708A58]">Can I visit your office without an appointment?</div>
              <div className="text-gray-700">Yes, you are welcome during business hours. For personalized counseling, booking an appointment is recommended.</div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow border-l-4 border-[#FFB823]">
              <div className="font-semibold text-[#708A58]">Is my information safe?</div>
              <div className="text-gray-700">Absolutely. We never share your details with third parties.</div>
            </div>
          </div>
        </section>
      </div>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 300% 300%;
          animation: gradientMove 4s linear infinite;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-family: Georgia, 'Times New Roman', Times, serif !important;
        }
        .font-serif, h2.font-serif, h3.font-serif, h1.font-serif {
          font-family: Georgia, 'Times New Roman', Times, serif !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
