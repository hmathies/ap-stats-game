import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ProgressProvider, useProgress } from '../src/contexts/ProgressContext';

describe('ProgressContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('records correct answers', () => {
    const wrapper = ({ children }) => <ProgressProvider>{children}</ProgressProvider>;
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.recordAnswer('topic1', 'q1', true, 1);
    });

    const topicProgress = result.current.getTopicProgress('topic1');
    expect(topicProgress.questionsCorrect).toContain('q1');
    expect(result.current.progress.totalScore).toBe(10);
  });

  it('calculates mastery level', () => {
    const wrapper = ({ children }) => <ProgressProvider>{children}</ProgressProvider>;
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.recordAnswer('topic1', 'q1', true, 1);
      result.current.recordAnswer('topic1', 'q2', false, 1);
    });

    const topicProgress = result.current.getTopicProgress('topic1');
    expect(topicProgress.masteryLevel).toBe(50);
  });

  it('persists to localStorage', () => {
    const wrapper = ({ children }) => <ProgressProvider>{children}</ProgressProvider>;
    const { result } = renderHook(() => useProgress(), { wrapper });

    act(() => {
      result.current.recordAnswer('topic1', 'q1', true, 1);
    });

    const saved = JSON.parse(localStorage.getItem('apStatsProgress'));
    expect(saved.topics.topic1.questionsCorrect).toContain('q1');
  });
});