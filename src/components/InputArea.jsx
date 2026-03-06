import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Mic, MicOff, AlertCircle } from 'lucide-react';

export default function InputArea({ onSendMessage, disabled }) {
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [micStatus, setMicStatus] = useState(''); // status label shown to user
    const [micError, setMicError] = useState('');
    const usedMicRef = useRef(false);

    // For Web Speech API mode
    const recognitionRef = useRef(null);
    const isListeningRef = useRef(false);
    const inputRef = useRef(input);
    const baseTextRef = useRef('');

    useEffect(() => {
        inputRef.current = input;
    }, [input]);

    useEffect(() => {
        return () => {
            isListeningRef.current = false;
            if (recognitionRef.current) recognitionRef.current.abort();
        };
    }, []);

    // ─── WEB SPEECH API ─────────────────────────────────────────────
    const startWebSpeech = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setMicError('Speech recognition not supported in this browser. Please use Chrome or Edge.');
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                stream.getTracks().forEach(t => t.stop()); // release before recognition

                const recognition = new SpeechRecognition();
                recognitionRef.current = recognition;
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = 'en-US';

                recognition.onstart = () => {
                    setIsListening(true);
                    setMicStatus('🔴 Listening...');
                    usedMicRef.current = true;
                    baseTextRef.current = inputRef.current;
                };

                recognition.onresult = (event) => {
                    let final = '';
                    let interim = '';
                    for (let i = 0; i < event.results.length; i++) {
                        if (event.results[i].isFinal) final += event.results[i][0].transcript + ' ';
                        else interim += event.results[i][0].transcript;
                    }
                    const newText = final + interim;
                    const baseText = baseTextRef.current;
                    setInput(baseText ? baseText.trim() + ' ' + newText.trim() : newText.trim());
                };

                recognition.onend = () => {
                    if (isListeningRef.current) {
                        try {
                            baseTextRef.current = inputRef.current;
                            recognition.start();
                        } catch {
                            isListeningRef.current = false;
                            setIsListening(false);
                            setMicStatus('');
                        }
                    } else {
                        setIsListening(false);
                        setMicStatus('');
                    }
                };

                recognition.onerror = (event) => {
                    if (event.error === 'no-speech' || event.error === 'aborted') return;
                    isListeningRef.current = false;
                    setIsListening(false);
                    setMicStatus('');
                    const errors = {
                        'not-allowed': '🚫 Mic permission denied.',
                        'audio-capture': '🎙️ No microphone found.',
                        'network': '🌐 Network error during recognition.',
                    };
                    setMicError(errors[event.error] || `Mic error: ${event.error}`);
                };

                isListeningRef.current = true;
                recognition.start();
            })
            .catch((err) => {
                setMicError(err.name === 'NotAllowedError'
                    ? '🚫 Mic permission denied. Allow it in your browser address bar.'
                    : `❌ Mic error: ${err.message}`);
            });
    };

    const stopWebSpeech = () => {
        isListeningRef.current = false;
        setIsListening(false);
        setMicStatus('');
        if (recognitionRef.current) {
            recognitionRef.current.abort();
            recognitionRef.current = null;
        }
    };

    // ─── TOGGLE ───────────────────────────────────────────────────────────────
    const toggleListening = () => {
        setMicError('');
        if (isListening) {
            stopWebSpeech();
        } else {
            startWebSpeech();
        }
    };

    // ─── SUBMIT ───────────────────────────────────────────────────────────────
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || disabled) return;

        if (isListening) {
            stopWebSpeech();
        }

        onSendMessage({ text: input, source: usedMicRef.current ? 'voice' : 'text' });
        setInput('');
        setMicError('');
        setMicStatus('');
        usedMicRef.current = false;
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        alert('Copy-pasting is not allowed during interview practice.');
    };

    return (
        <div className="border-t border-white/10" style={{ background: '#13111c' }}>
            {/* Error banner */}
            {micError && (
                <div className="flex items-start gap-2 mx-4 mt-3 px-3 py-2 rounded-lg text-xs"
                    style={{ background: 'rgba(239,68,68,0.12)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)' }}>
                    <AlertCircle size={14} className="mt-0.5 shrink-0" />
                    <span>{micError}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="p-4">
                <div className="max-w-3xl mx-auto flex gap-3 relative">
                    <textarea
                        value={input}
                        onChange={(e) => { setInput(e.target.value); usedMicRef.current = false; }}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        disabled={disabled}
                        placeholder={
                            disabled ? 'Please wait...'
                                : isListening ? '🎙️ Listening — speak now...'
                                    : 'Type your answer or click 🎙️ to speak...'
                        }
                        rows={1}
                        className="w-full rounded-xl px-4 py-3 pr-16 resize-none min-h-[56px] max-h-[150px] outline-none transition-all text-sm"
                        style={{
                            background: '#1e1b4b',
                            color: '#e0e7ff',
                            border: isListening ? '1.5px solid #ef4444' : '1.5px solid rgba(124,58,237,0.4)',
                            boxShadow: isListening ? '0 0 14px rgba(239,68,68,0.35)' : 'none',
                            caretColor: '#a78bfa',
                        }}
                    />

                    <div className="absolute right-2 bottom-2 flex gap-1.5">
                        {/* Mic button */}
                        <button
                            type="button"
                            onClick={toggleListening}
                            disabled={disabled}
                            title={isListening ? 'Stop' : 'Start voice input'}
                            className={`p-2 rounded-lg transition-all ${isListening ? 'animate-pulse' : 'hover:scale-105'}`}
                            style={isListening
                                ? { background: 'rgba(239,68,68,0.25)', color: '#ef4444' }
                                : { background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }
                            }
                        >
                            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                        </button>

                        {/* Send button */}
                        <button
                            type="submit"
                            disabled={!input.trim() || disabled}
                            className="p-2 rounded-lg transition-all hover:opacity-90 active:scale-95 disabled:opacity-30"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: '#fff' }}
                        >
                            <SendHorizontal size={18} />
                        </button>
                    </div>
                </div>

                <p className="text-center text-xs mt-1.5" style={{ color: '#6b7280' }}>
                    {micStatus || 'Press Enter to send • Shift+Enter for new line'}
                </p>
            </form>
        </div>
    );
}
