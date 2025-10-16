import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import topics from '../data/topics';
import StoryPlayer from '../components/StoryPlayer';
import QuestionCard from '../components/QuestionCard';

export default function TopicPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = topics.find(t => t.topicId === topicId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showStory, setShowStory] = useState(true);

  if (!topic) {
    return <div className="p-4">Topic not found</div>;
  }

  const currentQuestion = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      navigate('/');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Topics</span>
        </button>

        {showStory ? (
          <StoryPlayer
            story={topic.story}
            onContinue={() => setShowStory(false)}
          />
        ) : (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            topicId={topicId}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={topic.questions.length}
            onNext={handleNext}
            isLastQuestion={isLastQuestion}
          />
        )}
      </div>
    </div>
  );
}