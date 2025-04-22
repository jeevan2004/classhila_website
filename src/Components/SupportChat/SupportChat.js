import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import "./support.css";
import CustomInput from "../common/Input/Input";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";

const SupportPage = () => {
  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [course, setCourse] = useState([]);
  const [activeTicketId, setActiveTicketId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const { currUserData } = useAuthContext();
  const activeTicket = ticket?.find((t) => t._id === activeTicketId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const newTicket = {
      id: Date.now(),
      ...data,
      conversation: [
        {
          sender: "user",
          text: data.message,
        },
      ],
    };
    setTickets([...tickets, newTicket]);

    const payload = {
      userId: currUserData?.id,
      courseId: data?.course,
      question: data.message,
    };
    const res = await api(
      "api/v1/tickets/createTicket",
      payload,
      "post",
      currUserData?.token,
      "Ticket Created"
    );
    if (res && res.success) {
      reset();
      console.log(data, "data");
    }
  };

  const handleSendReply = async () => {
    if (!newMessage.trim() || activeTicketId === null) return;

    const payload = {
      senderId: currUserData?.id,
      message: newMessage,
    };
    const res = await api(
      `api/v1/tickets/addConversation/${activeTicket?.ticketId}`,
      payload,
      "post",
      currUserData?.token,
      ""
    );
    if (res && res.success) {
      setNewMessage("");
      const updated = ticket.map((ticket) =>
        ticket._id === activeTicketId
          ? {
              ...ticket,
              conversations: [
                ...ticket.conversations,
                {
                  senderId: currUserData?.id,
                  message: newMessage,
                },
              ],
            }
          : ticket
      );
      setTicket(updated);
    }
    // setTickets(updated);
    // setNewMessage("");
  };

  const getAllCourse = async () => {
    let res = await api(
      `api/v1/student/getMyCourses?page=1&limit=10`,
      "",
      "get",
      currUserData.token,
      ""
    );

    if (res?.success) {
      console.log(res, "resauth");
      const roleOptions = res.data.map((item) => ({
        label: item.title, // Show "name" in dropdown
        value: item._id, // Return "_id" on select
      }));

      setCourse(roleOptions);
    }
  };

  const getTicket = async () => {
    let res = await api(
      `api/v1/tickets/getTicketByUserId/${currUserData?.id}`,
      "",
      "post",
      currUserData.token,
      ""
    );

    if (res?.success) {
      console.log(res, "ticket");

      setTicket(res.data);
    }
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div className="container support_page my-4">
      <h2>🛠️ Support Page</h2>

      {/* Create Ticket */}
      <div className="card my-4">
        <div className="card-header">Create Ticket</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Select Course"
              name="course"
              id="course"
              type="select"
              register={register}
              validation={{ required: "Please select a course" }}
              isRequired
              options={course}
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
              validation={{ required: "Message is required" }}
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
          {ticket?.map((ticket) => (
            <li
              key={ticket._id}
              className={`list-group-item ${
                ticket._id === activeTicketId ? "bg-light" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveTicketId(ticket._id)}
            >
              <strong>{ticket.ticketId}</strong> — {ticket.question}
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
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            {activeTicket?.conversations?.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${
                  msg.senderId === currUserData?.id
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.senderId === currUserData?.id
                      ? "bg-light text-dark"
                      : "bg-light text-dark"
                  }`}
                  style={{ maxWidth: "75%" }}
                >
                  {msg.message}
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
              onKeyPress={(e) => e.key === "Enter" && handleSendReply()}
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
