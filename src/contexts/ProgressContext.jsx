import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('apStatsProgress');
    return saved ? JSON.parse(saved) : {
      topics: {},
      totalScore: 0,
      hintsUsed: 0,
      badges: []
    };
  });

  useEffect(() => {
    localStorage.setItem('apStatsProgress', JSON.stringify(progress));
  }, [progress]);

  const recordAnswer = (topicId, questionId, isCorrect, attempts = 1) => {
    setProgress(prev => {
      const topicProgress = prev.topics[topicId] || {
        questionsAttempted: [],
        questionsCorrect: [],
        masteryLevel: 0
      };

      if (!topicProgress.questionsAttempted.includes(questionId)) {
        topicProgress.questionsAttempted.push(questionId);
      }

      if (isCorrect && !topicProgress.questionsCorrect.includes(questionId)) {
        topicProgress.questionsCorrect.push(questionId);
      }

      const correctCount = topicProgress.questionsCorrect.length;
      const attemptedCount = topicProgress.questionsAttempted.length;
      topicProgress.masteryLevel = attemptedCount > 0 
        ? Math.round((correctCount / attemptedCount) * 100) 
        : 0;

      return {
        ...prev,
        topics: {
          ...prev.topics,
          [topicId]: topicProgress
        },
        totalScore: prev.totalScore + (isCorrect && attempts === 1 ? 10 : isCorrect ? 5 : 0)
      };
    });
  };

  const useHint = () => {
    setProgress(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1
    }));
  };

  const getTopicProgress = (topicId) => {
    return progress.topics[topicId] || {
      questionsAttempted: [],
      questionsCorrect: [],
      masteryLevel: 0
    };
  };

  const resetProgress = () => {
    setProgress({
      topics: {},
      totalScore: 0,
      hintsUsed: 0,
      badges: []
    });
    localStorage.removeItem('apStatsProgress');
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      recordAnswer,
      useHint,
      getTopicProgress,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}