import React from 'react';
import { BookOpen } from 'lucide-react';

export default function StoryPlayer({ story, onContinue }) {
  return (
    <div className="card max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">{story.title}</h2>
      </div>
      
      {story.imageUrl && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src={story.imageUrl}
            alt={story.imageAlt}
            className="w-full h-64 object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <div className="prose max-w-none mb-8">
        {story.narrative.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      
      <button
        onClick={onContinue}
        className="btn-primary w-full"
        aria-label="Continue to questions"
      >
        Continue to Questions →
      </button>
    </div>
  );
}