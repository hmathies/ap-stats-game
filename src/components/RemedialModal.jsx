import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2, XCircle } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';

export default function RemedialModal({ remedialLesson, onClose, topicId }) {
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { recordAnswer } = useProgress();

  const handleSubmit = () => {
    if (!selectedChoice || !remedialLesson.followUpQuestion) return;
    
    const isCorrect = selectedChoice === remedialLesson.followUpQuestion.correctChoiceId;
    setShowFeedback(true);
    recordAnswer(topicId, remedialLesson.followUpQuestion.id, isCorrect, 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-bold text-gray-800">{remedialLesson.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close remedial lesson"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {!showFollowUp ? (
            <>
              <div className="space-y-4 mb-6">
                {remedialLesson.content.map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 p-4 rounded-lg">
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>

              {remedialLesson.followUpQuestion ? (
                <button
                  onClick={() => setShowFollowUp(true)}
                  className="btn-primary w-full"
                >
                  Try a Practice Question
                </button>
              ) : (
                <button onClick={onClose} className="btn-primary w-full">
                  Got it!
                </button>
              )}
            </>
          ) : (
            <>
              <h4 className="font-bold text-gray-800 mb-4">
                {remedialLesson.followUpQuestion.prompt}
              </h4>

              <div className="space-y-3 mb-6">
                {remedialLesson.followUpQuestion.choices.map((choice) => {
                  const isSelected = selectedChoice === choice.id;
                  const isCorrect = choice.id === remedialLesson.followUpQuestion.correctChoiceId;
                  const showCorrect = showFeedback && isCorrect;
                  const showIncorrect = showFeedback && isSelected && !isCorrect;

                  return (
                    <button
                      key={choice.id}
                      onClick={() => !showFeedback && setSelectedChoice(choice.id)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
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
                        </div>
                        <span className="font-medium text-gray-800">{choice.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showFeedback && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
                  <p className="text-gray-700 text-sm">
                    {remedialLesson.followUpQuestion.explanation}
                  </p>
                </div>
              )}

              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedChoice}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  Check Answer
                </button>
              ) : (
                <button onClick={onClose} className="btn-primary w-full">
                  Continue
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}