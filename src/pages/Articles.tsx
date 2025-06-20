import React from 'react';

const Articles = () => {
  return (
    <div className="min-h-screen w-full bg-[color:rgb(var(--background))] text-[color:rgb(var(--foreground))] pt-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[color:rgb(var(--primary))]">Articles</h1>
        <p className="text-lg text-center mb-10 text-[color:rgb(var(--foreground))]">
          Explore our latest articles, insights, and resources to help you on your learning journey.
        </p>
        {/* Example article cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">How to Prepare for Competitive Exams</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">Tips and strategies to help you succeed in your next big exam.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">Balancing School and Coaching</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">Learn how to manage your time and energy for maximum results.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">Effective Note-Taking Techniques</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">Discover methods to take better notes and retain more information.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">Staying Motivated During Exam Prep</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">Simple ways to keep your motivation high throughout your studies.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">Time Management for Students</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">Master your schedule and make the most of your study hours.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
          <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-[color:rgb(var(--primary))]">Healthy Habits for Exam Success</h2>
            <p className="text-base text-[color:rgb(var(--foreground))] mb-4">How sleep, nutrition, and exercise can boost your performance.</p>
            <a href="#" className="text-[color:rgb(var(--secondary))] font-medium hover:underline self-end">Read More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
