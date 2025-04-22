import React, { useState } from 'react';
import { X, Send } from 'lucide-react'; // Send icon from lucide-react

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    {
      sender: 'bot',
      text: 'Thank you for contacting Udemy Support.',
    },
    {
      sender: 'bot',
      text: 'Please note you are corresponding with Udemy’s virtual agent, powered by Ultimate. This conversation may be recorded.',
    },
    {
      sender: 'bot',
      text: 'For security purposes, please log out after use if you\'re on a shared device.',
    },
  ]);

  const handleSend = () => {
    if (message.trim() === '') return;

    const newChat = [...chat, { sender: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    // Simulate bot reply
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'This is an automated response. We will get back to you shortly.',
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {isOpen && (
        <div
          className="position-fixed bottom-0 end-0 m-4 border rounded shadow bg-white"
          style={{ width: '22rem', zIndex: 1050 }}
        >
          {/* Header */}
          <div className="bg-primary text-white d-flex justify-content-between align-items-center px-3 py-2">
            <strong>Support</strong>
            <button
              className="btn btn-sm btn-light"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="p-3 overflow-auto"
            style={{ maxHeight: '300px', fontSize: '0.9rem' }}
          >
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${
                  msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'
                } mb-2`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-light text-dark'
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* File/Image Buttons */}
          {/* <div className="px-3 py-2 border-top d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm w-100">📄 File</button>
            <button className="btn btn-outline-secondary btn-sm w-100">🖼️ Image</button>
          </div> */}

          {/* Input and Send */}
          <div className="border-top p-2 d-flex align-items-center">
            <input
              type="text"
              className="form-control form-control-sm me-2"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="btn btn-sm btn-primary"
              onClick={handleSend}
              disabled={message.trim() === ''}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportChat;
