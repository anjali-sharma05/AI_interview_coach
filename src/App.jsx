import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MessageBubble from './components/MessageBubble';
import InputArea from './components/InputArea';
import SetupForm from './components/SetupForm';
import { useInterview } from './hooks/useInterview';

function App() {
  const {
    config,
    messages,
    isProcessing,
    score,
    startInterview,
    sendMessage,
    resetInterview
  } = useInterview();

  if (!config) {
    return <SetupForm onStart={startInterview} />;
  }

  return (
    <div className="flex h-screen font-sans overflow-hidden" style={{ background: '#0d0b1a' }}>
      <Sidebar
        config={config}
        score={score}
        onReset={resetInterview}
      />

      <main className="flex-1 flex flex-col h-full relative min-w-0">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))}
          {isProcessing && (
            <div className="flex items-center gap-2 text-gray-400 text-sm ml-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
              Thinking...
            </div>
          )}
        </div>

        {/* Input Area */}
        <InputArea
          onSendMessage={sendMessage}
          disabled={isProcessing}
        />
      </main>
    </div>
  );
}

export default App;
