
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { X, Send } from 'lucide-react';

interface InquiryFormProps {
  courseName: string;
  isOpen: boolean;
  onClose: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ courseName, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Inquiry Sent Successfully!",
      description: `Thank you for your interest in ${courseName}. We'll get back to you soon.`,
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md animate-scale-in">
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
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-green-200 focus:border-green-400"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-green-200 focus:border-green-400"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-green-200 focus:border-green-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your learning goals..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-green-200 focus:border-green-400 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full gradient-green hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Inquiry
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiryForm;
