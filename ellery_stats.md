# AP Statistics Adventure - Complete Setup Guide

## Step 1: Initial Setup Commands

Run these commands in your terminal:

```bash
npm create vite@latest ap-stats-game -- --template react
cd ap-stats-game
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest jsdom
```

## Step 2: Create Configuration Files

### File: `tailwind.config.js` (root directory)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
```

### File: `postcss.config.js` (root directory)

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### File: `vite.config.js` (root directory)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
```

### File: `src/index.css` (replace existing)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply antialiased;
  }
}

@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors;
  }
  
  .btn-secondary {
    @apply bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}
```

### File: `index.html` (replace existing)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Learn AP Statistics through story-driven quizzes and adventures" />
    <title>AP Statistics Adventure</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### File: `.gitignore` (add to existing or create new)

```
# Logs
logs
*.log
npm-debug.log*

# Dependencies
node_modules/

# Production
dist/
build/

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

## Step 3: Create Directory Structure

```bash
mkdir -p src/components src/contexts src/data src/pages tests public/images
```

## Step 4: Create Data File

### File: `src/data/topics.js`

```javascript
export const topics = [
  {
    topicId: "intro_sampling",
    title: "Introduction: Sampling",
    description: "Learn about populations, samples, and sampling methods",
    story: {
      title: "Beach Day Pick-up",
      narrative: `The sun is blazing and I'm itching to hit the waves, but first I need to pick players for tomorrow's field hockey scrimmage. Coach said to grab 10 players from the tryout list—totally random. I close my eyes, shuffle the names in my mind, and point at the list. Fair and square, right?\n\nLater, my teammate Emma asks why I didn't just pick the best players. I explain that we're trying to see how the whole tryout group performs on average, not just stack the deck. Random sampling keeps it honest.\n\nAs we paddle out on our boards, I think about how sampling works everywhere—from picking horses to train, to testing water quality at the beach. It's all about getting a fair snapshot of the bigger picture.`,
      imageUrl: "/images/beach-scene.jpg",
      imageAlt: "Teen surfer at the beach with a field hockey stick"
    },
    questions: [
      {
        id: "q1",
        type: "mcq",
        prompt: "When I pick 10 players from the tryout list at random, that's an example of:",
        choices: [
          { id: "a", text: "A biased sample" },
          { id: "b", text: "A random sample" },
          { id: "c", text: "A population" },
          { id: "d", text: "A parameter" }
        ],
        correctChoiceId: "b",
        explanation: "A random sample means each member of the population had an equal chance of being selected. By picking players randomly, you're ensuring fairness and avoiding bias.",
        remedialLesson: {
          title: "What makes a sample random?",
          content: [
            "**Population**: The entire group you want to study (all tryout players)",
            "**Sample**: A subset of the population you actually observe (the 10 selected players)",
            "**Random Sample**: Every member has an equal chance of being selected—like drawing names from a hat",
            "**Why it matters**: Random sampling helps avoid bias and makes your conclusions more reliable"
          ],
          followUpQuestion: {
            id: "q1_retry",
            prompt: "If I only picked players whose last names start with A-M, would that be a random sample?",
            choices: [
              { id: "a", text: "Yes, because some randomness is involved" },
              { id: "b", text: "No, because not everyone has an equal chance" }
            ],
            correctChoiceId: "b",
            explanation: "Players with last names N-Z have zero chance of being selected, so this is NOT random—it's a systematic (and biased) sample."
          }
        },
        hint: "Think about fairness—does everyone have an equal shot?"
      },
      {
        id: "q2",
        type: "mcq",
        prompt: "The entire group of players who tried out is called the:",
        choices: [
          { id: "a", text: "Sample" },
          { id: "b", text: "Population" },
          { id: "c", text: "Statistic" },
          { id: "d", text: "Variable" }
        ],
        correctChoiceId: "b",
        explanation: "The population is the complete group you're interested in studying. In this case, it's ALL the players who tried out for the team.",
        remedialLesson: {
          title: "Population vs. Sample",
          content: [
            "**Population**: The complete set of individuals/items you want to understand",
            "**Sample**: A subset selected from the population for actual study",
            "**Example**: If 50 players tried out (population), and you select 10 (sample), you're using the sample to learn about the population",
            "**Key insight**: We study samples because studying entire populations is often impractical or impossible"
          ],
          followUpQuestion: {
            id: "q2_retry",
            prompt: "If you survey 5 out of 30 horses at the stable about their favorite treat, the 30 horses are the:",
            choices: [
              { id: "a", text: "Sample" },
              { id: "b", text: "Population" }
            ],
            correctChoiceId: "b",
            explanation: "The 30 horses are the complete group (population), while the 5 surveyed horses are your sample."
          }
        },
        hint: "Which term describes the WHOLE group?"
      },
      {
        id: "q3",
        type: "mcq",
        prompt: "I want to know the average height of all players. If I calculate the average for my 10 selected players, that number is a:",
        choices: [
          { id: "a", text: "Parameter" },
          { id: "b", text: "Statistic" },
          { id: "c", text: "Population" },
          { id: "d", text: "Census" }
        ],
        correctChoiceId: "b",
        explanation: "A statistic is a numerical measure calculated from a SAMPLE. Since you calculated the average from your 10 selected players (a sample), it's a statistic.",
        remedialLesson: {
          title: "Parameters vs. Statistics",
          content: [
            "**Parameter**: A number that describes the entire POPULATION (usually unknown)",
            "**Statistic**: A number calculated from a SAMPLE (what we can actually measure)",
            "**Memory trick**: PopulaTION → ParametER (both have weird letters), Sample → StatiSTic (both start with 'S')",
            "**Example**: The TRUE average height of all tryout players is a parameter. Your calculated average from 10 players is a statistic that ESTIMATES the parameter"
          ],
          followUpQuestion: {
            id: "q3_retry",
            prompt: "The actual average jumping height of ALL horses at your stable (if you could measure them all) would be a:",
            choices: [
              { id: "a", text: "Statistic" },
              { id: "b", text: "Parameter" }
            ],
            correctChoiceId: "b",
            explanation: "Since this describes the entire population of horses (not just a sample), it's a parameter."
          }
        },
        hint: "Are you working with the whole group or just a sample?"
      }
    ]
  },
  {
    topicId: "probability_basics",
    title: "Probability Basics",
    description: "Understanding probability, events, and outcomes",
    story: {
      title: "Jump Day Decisions",
      narrative: `Jumping day! My horse, Apollo, is feeling frisky this morning. I've got three jumps set up: the vertical, the oxer, and the scary-looking combination. Based on our training sessions, Apollo clears the vertical 90% of the time, the oxer 75%, and the combination about 60%.\n\nAs I walk the course, I start thinking about my chances. What's the probability we nail all three? What if we mess up just one? My coach always says, "Plan for success, but understand your odds."\n\nThis is exactly like the probability problems in AP Stats—except with higher stakes and a thousand-pound animal who has his own opinions about jump day.`,
      imageUrl: "/images/horse-jumping.jpg",
      imageAlt: "Horse and rider clearing a jump"
    },
    questions: [
      {
        id: "q4",
        type: "mcq",
        prompt: "If Apollo clears the vertical 90% of the time, what's the probability he knocks it down?",
        choices: [
          { id: "a", text: "0.10" },
          { id: "b", text: "0.90" },
          { id: "c", text: "0.50" },
          { id: "d", text: "1.00" }
        ],
        correctChoiceId: "a",
        explanation: "The probability of the complement event (knocking down) is 1 - 0.90 = 0.10 or 10%. Together, success and failure probabilities must add to 1.",
        remedialLesson: {
          title: "Complementary Events",
          content: [
            "**Complement**: The opposite outcome of an event",
            "**Rule**: P(event) + P(complement) = 1",
            "**Example**: If P(clear) = 0.90, then P(knock down) = 1 - 0.90 = 0.10",
            "**Why it works**: One of these two outcomes MUST happen, so their probabilities cover all possibilities (100%)"
          ],
          followUpQuestion: {
            id: "q4_retry",
            prompt: "If there's a 25% chance of rain tomorrow, what's the probability it won't rain?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.75" }
            ],
            correctChoiceId: "b",
            explanation: "P(no rain) = 1 - 0.25 = 0.75 or 75%"
          }
        },
        hint: "What must the two outcomes add up to?"
      },
      {
        id: "q5",
        type: "mcq",
        prompt: "Assuming each jump is independent, what's the probability Apollo clears ALL three jumps? (vertical: 0.90, oxer: 0.75, combination: 0.60)",
        choices: [
          { id: "a", text: "0.225" },
          { id: "b", text: "0.405" },
          { id: "c", text: "0.75" },
          { id: "d", text: "2.25" }
        ],
        correctChoiceId: "b",
        explanation: "For independent events, multiply their probabilities: 0.90 × 0.75 × 0.60 = 0.405 or 40.5%",
        remedialLesson: {
          title: "Independent Events & Multiplication Rule",
          content: [
            "**Independent events**: One outcome doesn't affect the other",
            "**Multiplication rule**: P(A AND B) = P(A) × P(B) when events are independent",
            "**Example**: Three independent jumps → multiply: 0.90 × 0.75 × 0.60 = 0.405",
            "**Common mistake**: Don't add probabilities for 'AND'—that's for 'OR' with mutually exclusive events"
          ],
          followUpQuestion: {
            id: "q5_retry",
            prompt: "If you flip a coin twice, what's P(heads on first flip AND heads on second flip)?",
            choices: [
              { id: "a", text: "0.25" },
              { id: "b", text: "0.50" },
              { id: "c", text: "1.00" }
            ],
            correctChoiceId: "a",
            explanation: "P(H and H) = 0.5 × 0.5 = 0.25"
          }
        },
        hint: "For 'AND' with independent events, multiply the probabilities"
      }
    ]
  },
  {
    topicId: "data_collection",
    title: "Data Collection Methods",
    description: "Observational studies, experiments, and survey design",
    story: {
      title: "Field Hockey Strategy Session",
      narrative: `Coach pulled me aside after practice. "We need to figure out if the new training drill actually improves shot accuracy," she said. I suggested we track everyone's shots for a week, but she shook her head.\n\n"That's observational—we need a real experiment. Split the team randomly: half do the new drill, half stick with the old one. Then we compare." It clicked. Just watching isn't enough if we want to prove cause and effect.\n\nLater at the beach, I thought about all the times I've confused correlation with causation. Like how I always see more surfers when there's good weather—but good weather doesn't cause more surfers to exist. They just come out when conditions are right. Understanding the difference between observation and experimentation is huge.`,
      imageUrl: "/images/field-hockey.jpg",
      imageAlt: "Field hockey team practicing"
    },
    questions: [
      {
        id: "q6",
        type: "mcq",
        prompt: "Coach's plan to randomly assign players to different drills and compare results is an example of:",
        choices: [
          { id: "a", text: "An observational study" },
          { id: "b", text: "An experiment" },
          { id: "c", text: "A survey" },
          { id: "d", text: "A census" }
        ],
        correctChoiceId: "b",
        explanation: "This is an experiment because the coach is actively imposing treatments (different drills) on randomly assigned groups. Random assignment and treatment control are hallmarks of experiments.",
        remedialLesson: {
          title: "Experiments vs. Observational Studies",
          content: [
            "**Experiment**: Researchers actively impose treatments on subjects and observe outcomes. Can establish cause-and-effect.",
            "**Observational study**: Researchers observe without intervention. Can find associations but NOT causation.",
            "**Key difference**: In experiments, YOU control who gets what treatment (through random assignment)",
            "**Example**: Assigning players to different drills (experiment) vs. watching which players naturally choose different drills (observational)"
          ],
          followUpQuestion: {
            id: "q6_retry",
            prompt: "Surveying students about their study habits and comparing their grades is:",
            choices: [
              { id: "a", text: "An experiment" },
              { id: "b", text: "An observational study" }
            ],
            correctChoiceId: "b",
            explanation: "You're not assigning study habits—you're just observing existing behaviors. This is observational."
          }
        },
        hint: "Is someone actively controlling who gets which treatment?"
      }
    ]
  }
];

export default topics;
```

## Step 5: Create Context

### File: `src/contexts/ProgressContext.jsx`

```javascript
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
```

## Step 6: Create Components

### File: `src/components/StoryPlayer.jsx`

```javascript
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
```

### File: `src/components/QuestionCard.jsx`

```javascript
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
```

### File: `src/components/RemedialModal.jsx`

```javascript
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
```

## Step 7: Create Pages

### File: `src/pages/Home.jsx`

```javascript
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
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AP Statistics Adventure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Ellery on her journey through stats—from beach days to horse jumps, 
            learn AP Statistics through real-life stories
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">{progress.totalScore} pts</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">
                {Object.keys(progress.topics).length} topics started
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map(topic => {
            const topicProgress = progress.topics[topic.topicId] || { masteryLevel: 0 };
            return (
              <Link
                key={topic.topicId}
                to={`/topic/${topic.topicId}`}
                className="card hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
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
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
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

        <div className="mt-12 text-center">
          <Link
            to="/progress"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <Trophy className="w-5 h-5" />
            View Your Progress & Achievements
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### File: `src/pages/TopicPage.jsx`

```javascript
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import topics from '../data/topics.jsx';
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
```

### File: `src/pages/Progress.jsx`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Target, Lightbulb } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import topics from '../data/topics.jsx';

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
```

## Step 8: Create Main App Files

### File: `src/App.jsx` (replace existing)

```javascript
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import Progress from './pages/Progress';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
```

### File: `src/main.jsx` (replace existing)

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Step 9: Create Tests

### File: `tests/setup.js`

```javascript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(() => {
  cleanup()
})
```

### File: `tests/QuestionCard.test.jsx`

```javascript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionCard from '../src/components/QuestionCard';
import { ProgressProvider } from '../src/contexts/ProgressContext';

const mockQuestion = {
  id: 'q1',
  type: 'mcq',
  prompt: 'Test question?',
  choices: [
    { id: 'a', text: 'Choice A' },
    { id: 'b', text: 'Choice B' }
  ],
  correctChoiceId: 'b',
  explanation: 'B is correct',
  hint: 'Think carefully'
};

describe('QuestionCard', () => {
  it('renders question prompt', () => {
    render(
      <ProgressProvider>
        <QuestionCard
          question={mockQuestion}
          topicId="test"
          questionNumber={1}
          totalQuestions={3}
          onNext={vi.fn()}
          isLastQuestion={false}
        />
      </ProgressProvider>
    );
    
    expect(screen.getByText('Test question?')).toBeInTheDocument();
  });

  it('allows selecting an answer', () => {
    render(
      <ProgressProvider>
        <QuestionCard
          question={mockQuestion}
          topicId="test"
          questionNumber={1}
          totalQuestions={3}
          onNext={vi.fn()}
          isLastQuestion={false}
        />
      </ProgressProvider>
    );
    
    const choiceB = screen.getByLabelText(/Choice b: Choice B/i);
    fireEvent.click(choiceB);
    
    expect(choiceB).toHaveClass('border-blue-500');
  });
});
```

## Step 10: Create Deployment Files

### File: `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### File: `netlify.toml`

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build]
  command = "npm run build"
  publish = "dist"
```

## Step 11: Update package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

## Step 12: Test & Deploy

```bash
# Test locally
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod

# OR Deploy to Netlify
npx netlify-cli deploy --prod
```

## Notes

- Images in `public/images/` are optional - the app handles missing images gracefully
- Progress is saved to localStorage automatically
- All 3 topics are complete with stories, questions, and remedial lessons
- The app is fully responsive and accessible

## Troubleshooting

If you encounter issues:
1. Delete `node_modules` and run `npm install` again
2. Clear browser cache and localStorage
3. Check browser console for errors
4. Ensure all files are in the correct directories

---

**You're all set!** Run `npm run dev` to start developing.