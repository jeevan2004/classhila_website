import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import './support.css';
import CustomInput from '../common/Input/Input';

const SupportPage = () => {
  const [tickets, setTickets] = useState([]);
  const [activeTicketId, setActiveTicketId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTicket = {
      id: Date.now(),
      ...data,
      conversation: [
        {
          sender: 'user',
          text: data.message,
        },
      ],
    };
    setTickets([...tickets, newTicket]);
    reset();
    console.log(data , "data");
    
  };

  const handleSendReply = () => {
    if (!newMessage.trim() || activeTicketId === null) return;
    const updated = tickets.map((ticket) =>
      ticket.id === activeTicketId
        ? {
            ...ticket,
            conversation: [
              ...ticket.conversation,
              { sender: 'user', text: newMessage },
              { sender: 'support', text: 'We received your message.' },
            ],
          }
        : ticket
    );
    setTickets(updated);
    setNewMessage('');
  };

  const activeTicket = tickets.find((t) => t.id === activeTicketId);

  return (
    <div className="container support_page my-4">
      <h2>🛠️ Support Page</h2>

      {/* Create Ticket */}
      <div className="card my-4">
        <div className="card-header">Create Ticket</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Name"
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              register={register}
              errors={errors.name}
              validation={{ required: 'Name is required' }}
              isRequired
            />
            <CustomInput
              label="Email"
              name="email"
              id="email"
              type="text"
              placeholder="Enter your email"
              register={register}
              errors={errors.email}
              validation={{
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              }}
              isRequired
            />
            <CustomInput
              label="Subject"
              name="subject"
              id="subject"
              type="text"
              placeholder="Enter subject"
              register={register}
              errors={errors.subject}
              validation={{ required: 'Subject is required' }}
              isRequired
            />
            <CustomInput
  label="Select Course"
  name="course"
  id="course"
  type="select"
  register={register}
  validation={{ required: "Please select a course" }}
  isRequired
  options={[
    { label: "Select a course", value: "" },
    { label: "React JS", value: "react" },
    { label: "Node JS", value: "node" },
    { label: "Python", value: "python" },
  ]}
  errors={errors.course}
/>

            <CustomInput
              label="Message"
              name="message"
              id="message"
              type="textarea"
              placeholder="Enter your message"
              rows={4}
              register={register}
              errors={errors.message}
              validation={{ required: 'Message is required' }}
              isRequired
            />
            <button className="btn btn-primary mt-2" type="submit">
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      {/* Ticket List */}
      <div className="card my-4">
        <div className="card-header">Your Tickets</div>
        <ul className="list-group list-group-flush">
          {tickets.map((ticket) => (
            <li
              key={ticket.id}
              className={`list-group-item ${
                ticket.id === activeTicketId ? 'bg-light' : ''
              }`}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTicketId(ticket.id)}
            >
              <strong>{ticket.subject}</strong> — {ticket.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Conversation View */}
      {activeTicket && (
        <div className="card my-4">
          <div className="card-header">
            Conversation: <strong>{activeTicket.subject}</strong>
          </div>
          <div
            className="card-body"
            style={{ maxHeight: '300px', overflowY: 'auto' }}
          >
            {activeTicket.conversation.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${
                  msg.sender === 'user'
                    ? 'justify-content-end'
                    : 'justify-content-start'
                }`}
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

          {/* Reply Input */}
          <div className="card-footer d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Reply..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
            />
            <button className="btn btn-primary" onClick={handleSendReply}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;
