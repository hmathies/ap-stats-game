import React, { useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import RemedialModal from './RemedialModal';

export default function QuestionCard({
  question,
  topicId,
  questionNumber,
  totalQuestions,
  onNext,
  isLastQuestion
}) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showRemedial, setShowRemedial] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const { recordAnswer, useHint } = useProgress();

  const handleChoiceSelect = (choiceId) => {
    if (showFeedback) return;
    setSelectedChoice(choiceId);
  };

  const handleSubmit = () => {
    if (!selectedChoice) return;
    
    const isCorrect = selectedChoice === question.correctChoiceId;
    const currentAttempt = attempts + 1;
    setAttempts(currentAttempt);
    setShowFeedback(true);
    
    recordAnswer(topicId, question.id, isCorrect, currentAttempt);
    
    if (!isCorrect && question.remedialLesson) {
      setTimeout(() => setShowRemedial(true), 1000);
    }
  };

  const handleRetry = () => {
    setSelectedChoice(null);
    setShowFeedback(false);
    setShowHint(false);
  };

  const handleShowHint = () => {
    setShowHint(true);
    useHint();
  };

  const isCorrect = showFeedback && selectedChoice === question.correctChoiceId;
  const isIncorrect = showFeedback && selectedChoice !== question.correctChoiceId;

  return (
    <>
      <div className="card">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-500">
              Question {questionNumber} of {totalQuestions}
            </span>
            {question.hint && !showHint && !showFeedback && (
              <button
                onClick={handleShowHint}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                aria-label="Show hint"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Hint</span>
              </button>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {question.prompt}
          </h3>
          
          {showHint && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
              <p className="text-sm text-blue-900">
                <strong>Hint:</strong> {question.hint}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-3 mb-6">
          {question.choices.map((choice) => {
            const isSelected = selectedChoice === choice.id;
            const isCorrectChoice = choice.id === question.correctChoiceId;
            const showCorrect = showFeedback && isCorrectChoice;
            const showIncorrect = showFeedback && isSelected && !isCorrectChoice;

            return (
              <button
                key={choice.id}
                onClick={() => handleChoiceSelect(choice.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showCorrect
                    ? 'border-green-500 bg-green-50'
                    : showIncorrect
                    ? 'border-red-500 bg-red-50'
                    : isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                aria-label={`Choice ${choice.id}: ${choice.text}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      showCorrect
                        ? 'border-green-500 bg-green-500'
                        : showIncorrect
                        ? 'border-red-500 bg-red-500'
                        : isSelected
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {showCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                    {showIncorrect && <XCircle className="w-4 h-4 text-white" />}
                    {isSelected && !showFeedback && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-800">{choice.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
            }`}
          >
            <p className="font-semibold text-gray-800 mb-2">
              {isCorrect ? '✓ Correct!' : '✗ Not quite right'}
            </p>
            <p className="text-gray-700 text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="flex gap-3">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedChoice}
              className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit answer"
            >
              Submit Answer
            </button>
          ) : isCorrect ? (
            <button
              onClick={onNext}
              className="btn-primary flex-1 flex items-center justify-center gap-2"
              aria-label={isLastQuestion ? 'Finish topic' : 'Next question'}
            >
              {isLastQuestion ? 'Finish Topic' : 'Next Question'}
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <>
              <button
                onClick={handleRetry}
                className="btn-secondary flex-1"
                aria-label="Try again"
              >
                Try Again
              </button>
              <button
                onClick={onNext}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
                aria-label="Continue anyway"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {showRemedial && (
        <RemedialModal
          remedialLesson={question.remedialLesson}
          onClose={() => setShowRemedial(false)}
          topicId={topicId}
        />
      )}
    </>
  );
}
