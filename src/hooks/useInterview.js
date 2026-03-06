import { useState, useCallback, useEffect } from 'react';
import { mockAiService } from '../services/mockAi';

export function useInterview() {
    // Initialize state from localStorage if available
    const [config, setConfig] = useState(() => {
        const saved = localStorage.getItem('interview_config');
        return saved ? JSON.parse(saved) : null;
    });
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('interview_messages');
        return saved ? JSON.parse(saved) : [];
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [score, setScore] = useState(() => {
        const saved = localStorage.getItem('interview_score');
        return saved ? JSON.parse(saved) : 0;
    });
    const [questionCount, setQuestionCount] = useState(() => {
        const saved = localStorage.getItem('interview_questionCount');
        return saved ? JSON.parse(saved) : 0;
    });
    const [currentQuestionText, setCurrentQuestionText] = useState(() => {
        const saved = localStorage.getItem('interview_currentQuestionText');
        return saved ? JSON.parse(saved) : null;
    });

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('interview_config', JSON.stringify(config));
    }, [config]);

    useEffect(() => {
        localStorage.setItem('interview_messages', JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem('interview_score', JSON.stringify(score));
    }, [score]);

    useEffect(() => {
        localStorage.setItem('interview_questionCount', JSON.stringify(questionCount));
    }, [questionCount]);

    useEffect(() => {
        localStorage.setItem('interview_currentQuestionText', JSON.stringify(currentQuestionText));
    }, [currentQuestionText]);


    const startInterview = useCallback(async (setupData) => {
        setIsProcessing(true);
        setConfig(setupData);
        try {
            const response = await mockAiService.startInterview(setupData);
            setMessages([{ sender: 'ai', text: response.message }]);
            setQuestionCount(1);
            setCurrentQuestionText(response.initialQuestion); // New state to track the active question
        } catch (error) {
            console.error("Failed to start interview", error);
        } finally {
            setIsProcessing(false);
        }
    }, []);

    const sendMessage = useCallback(async ({ text, source = 'text' }) => {
        if (!config) return;

        // Add user message immediately
        setMessages(prev => [...prev, { sender: 'user', text }]);
        setIsProcessing(true);

        try {
            const response = await mockAiService.submitAnswer(currentQuestionText, text, config, source);

            // Update the tracked question text to the next question the AI just asked
            if (response.nextQuestionText) {
                setCurrentQuestionText(response.nextQuestionText);
            }

            setMessages(prev => [
                ...prev,
                {
                    sender: 'ai',
                    text: response.nextMessage,
                    // Only include feedback/score if the user was actually answering
                    feedback: response.isQuestion ? null : response.feedback,
                    score: response.isQuestion ? null : response.score,
                }
            ]);

            if (!response.isQuestion && response.score != null) {
                setScore(prev => {
                    const newTotal = (prev * (questionCount - 1)) + response.score;
                    return Math.round(newTotal / questionCount * 10) / 10;
                });
                setQuestionCount(prev => prev + 1);
            }

        } catch (error) {
            console.error("Failed to get response", error);
            setMessages(prev => [...prev, { sender: 'ai', text: "Sorry, I encountered an error processing your answer." }]);
        } finally {
            setIsProcessing(false);
        }
    }, [config, questionCount, currentQuestionText]);

    const resetInterview = useCallback(() => {
        setConfig(null);
        setMessages([]);
        setScore(0);
        setQuestionCount(0);
        setCurrentQuestionText(null);

        // Clear localStorage on reset
        localStorage.removeItem('interview_config');
        localStorage.removeItem('interview_messages');
        localStorage.removeItem('interview_score');
        localStorage.removeItem('interview_questionCount');
        localStorage.removeItem('interview_currentQuestionText');
    }, []);

    return {
        config,
        messages,
        isProcessing,
        score,
        startInterview,
        sendMessage,
        resetInterview
    };
}
