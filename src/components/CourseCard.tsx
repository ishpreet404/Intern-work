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
  rating?: number;
  tags?: string[];
  onDetails?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  level,
  image,
  onInquire,
  rating = 4.8,
  tags = [],
  onDetails
}) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100 overflow-hidden relative">
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
        {level && (
          <Badge className="absolute top-4 right-4 bg-green-600 hover:bg-green-700">
            {level}
          </Badge>
        )}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {tags.map((tag, i) => (
            <Badge key={i} className="bg-[#FFB823] text-white text-xs px-2 py-0.5 mr-1">{tag}</Badge>
          ))}
        </div>
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/80 rounded-full px-3 py-1 shadow">
          <span className="text-yellow-500 font-bold">{rating.toFixed(1)}</span>
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        </div>
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
        <div className="flex gap-2">
          <Button 
            onClick={onInquire}
            className="w-1/2 gradient-green hover:opacity-90 transition-opacity"
          >
            Inquire Now
          </Button>
          {onDetails && (
            <Button 
              onClick={onDetails}
              variant="outline"
              className="w-1/2 border-[#708A58] text-[#708A58] hover:bg-[#41644A] hover:text-white"
            >
              Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
