import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  image: string;
  onInquire: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  level,
  image,
  onInquire
}) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100 overflow-hidden">
      <div className="relative h-48 bg-gradient-green-light overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-green-600 opacity-50 animate-float" />
          </div>
        )}
        <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
          {level}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-gray-800 group-hover:text-green-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
        </div>
        
        <Button 
          onClick={onInquire}
          className="w-full gradient-green hover:opacity-90 transition-opacity"
        >
          Inquire Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
