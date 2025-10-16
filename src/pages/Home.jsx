import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Zap } from 'lucide-react';
import topics from '../data/topics.jsx';
import { useProgress } from '../contexts/ProgressContext';

export default function Home() {
  const { progress } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AP Statistics Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Ellery on her journey through stats—from beach days to horse jumps, 
            learn AP Statistics through real-life stories
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 animate-slideInLeft">
              <Trophy className="w-5 h-5 text-yellow-500 animate-bounce-gentle" />
              <span className="font-semibold">{progress.totalScore} pts</span>
            </div>
            <div className="flex items-center gap-2 animate-slideInRight">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">
                {Object.keys(progress.topics).length} topics started
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic, index) => {
            const topicProgress = progress.topics[topic.topicId] || { masteryLevel: 0 };
            return (
              <Link
                key={topic.topicId}
                to={`/topic/${topic.topicId}`}
                className="card card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg transition-transform hover:rotate-12">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {topic.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-green-500 h-2 rounded-full progress-bar-fill"
                          style={{ width: `${topicProgress.masteryLevel}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {topicProgress.masteryLevel}%
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/progress"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-transform hover:scale-105"
          >
            <Trophy className="w-5 h-5" />
            View Your Progress & Achievements
          </Link>
        </div>
      </div>
    </div>
  );
}