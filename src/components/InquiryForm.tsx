import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { X, Send } from 'lucide-react';

interface InquiryFormProps {
  courseName: string;
  isOpen: boolean;
  onClose: () => void;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meokzggo"; // <-- Replace with your Formspree endpoint

const InquiryForm: React.FC<InquiryFormProps> = ({ courseName, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, course: courseName }),
      });
      if (response.ok) {
        toast({
          title: 'Inquiry Sent Successfully!',
          description: `Thank you for your interest in ${courseName}. We'll get back to you soon.`,
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
      } else {
        toast({
          title: 'Submission Failed',
          description: 'There was an error sending your inquiry. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error sending your inquiry. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <Card className="w-full max-w-md animate-scale-in rounded-[2rem] shadow-lg border-0 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-green-600">Course Inquiry</CardTitle>
              <CardDescription>{courseName}</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
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
              <textarea
                placeholder="Tell us about your learning goals..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-green-200 focus:border-green-400 rounded-3xl px-6 py-4 bg-green-50 placeholder-gray-400 shadow-sm resize-none transition-all duration-200"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center shadow-md"
              disabled={loading}
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiryForm;
