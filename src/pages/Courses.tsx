import React, { useState } from 'react';
import CourseCard from '@/components/CourseCard';
import InquiryForm from '@/components/InquiryForm';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const courses = [
    {
      "title": "Law Entrances",
      "description": "CLAT, AILET, SLAT & OLET preparations. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/YTXbnGtw/Screenshot-2025-06-18-052048.png"
    },
    {
      "title": "CUET Exams",
      "description": "The classes start soon. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png"
    },
    {
      "title": "ADRE 3.0",
      "description": "The classes start soon. Apply now to avail 7 day trial classes.",
      "duration": "1 Year",
      "students": "500",
      "level": null,
      "image": "https://i.ibb.co/xt1s4wSx/Screenshot-2025-06-18-052125.png"
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden pt-20 bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))]">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 xs:mb-10 text-center text-[color:rgb(var(--foreground))]">
            Our <span className="text-[color:rgb(var(--primary))]">Courses</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-10 mb-10 xs:mb-16">
            {courses.map((course, idx) => (
              <CourseCard
                key={idx}
                title={course.title}
                description={course.description}
                duration={course.duration}
                students={course.students}
                level={course.level}
                image={course.image}
                onInquire={() => {
                  setSelectedCourse(course.title);
                  setIsInquiryOpen(true);
                }}
              />
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <InquiryForm
              courseName={selectedCourse || ''}
              isOpen={isInquiryOpen}
              onClose={() => setIsInquiryOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
