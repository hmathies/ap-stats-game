import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Target, Lightbulb } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import topics from '../data/topics';

export default function Progress() {
  const { progress, resetProgress } = useProgress();

  const totalQuestions = topics.reduce((sum, topic) => sum + topic.questions.length, 0);
  const attemptedQuestions = Object.values(progress.topics)
    .reduce((sum, topic) => sum + topic.questionsAttempted.length, 0);
  const correctQuestions = Object.values(progress.topics)
    .reduce((sum, topic) => sum + topic.questionsCorrect.length, 0);
  const overallAccuracy = attemptedQuestions > 0 
    ? Math.round((correctQuestions / attemptedQuestions) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Topics</span>
        </Link>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Progress</h1>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="card text-center">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">{progress.totalScore}</div>
            <div className="text-sm text-gray-600">Total Points</div>
          </div>
          <div className="card text-center">
            <Target className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">{overallAccuracy}%</div>
            <div className="text-sm text-gray-600">Overall Accuracy</div>
          </div>
          <div className="card text-center">
            <Lightbulb className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">{progress.hintsUsed}</div>
            <div className="text-sm text-gray-600">Hints Used</div>
          </div>
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Topic Mastery</h2>
          <div className="space-y-4">
            {topics.map(topic => {
              const topicProgress = progress.topics[topic.topicId] || {
                questionsAttempted: [],
                questionsCorrect: [],
                masteryLevel: 0
              };
              return (
                <div key={topic.topicId}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{topic.title}</span>
                    <span className="text-sm text-gray-600">
                      {topicProgress.questionsCorrect.length}/{topic.questions.length} correct
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all"
                        style={{ width: `${topicProgress.masteryLevel}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-700 w-12">
                      {topicProgress.masteryLevel}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all progress?')) {
                resetProgress();
              }
            }}
            className="btn-secondary"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}