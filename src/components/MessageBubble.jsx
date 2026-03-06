import React from 'react';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function MessageBubble({ message }) {
    const isAi = message.sender === 'ai';

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={clsx(
                "flex gap-3 max-w-3xl",
                isAi ? "self-start" : "self-end flex-row-reverse"
            )}
        >
            {/* Avatar */}
            <div className={clsx(
                "w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-lg",
            )}
                style={isAi
                    ? { background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', boxShadow: '0 0 12px rgba(124,58,237,0.5)' }
                    : { background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', boxShadow: '0 0 12px rgba(6,182,212,0.4)' }
                }
            >
                {isAi ? <Bot size={18} className="text-white" /> : <User size={18} className="text-white" />}
            </div>

            {/* Bubble */}
            <div
                className="rounded-2xl px-5 py-4 shadow-md space-y-2 text-sm md:text-base leading-relaxed"
                style={isAi
                    ? {
                        background: '#1e1b4b',
                        color: '#e0e7ff',
                        borderLeft: '3px solid #7c3aed',
                        borderRadius: '4px 18px 18px 18px'
                    }
                    : {
                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                        color: '#fff',
                        borderRadius: '18px 4px 18px 18px'
                    }
                }
            >
                <div className="whitespace-pre-wrap">
                    {message.text.split('\n').map((line, i) => (
                        <div key={i} className="min-h-[1rem]">
                            {line.startsWith('**') ? <strong>{line.replace(/\*\*/g, '')}</strong> : line}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
