// import "bootstrap-icons/font/bootstrap-icons.css";

import BestCoaching from "../../Components/BestCoaching/BestCoaching";

const AboutPage = () => {
  const categories = ["All", "SSC", "CBSC", "Groups", "RRB", "Civil Services"];

  const courseCards = [
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Science",
      title: "How To Understand Women?",
      students: 250,
      lessons: 8,
      mentor: "Archana Sabba",
      mentorRole: "Mentor",
    },
    {
      subject: "Subject",
      title: "I Dont Know What To Say",
      students: 100,
      lessons: 12,
      mentor: "Surender Reddy",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
    {
      subject: "Maths",
      title: "How To Solve This Problem?",
      students: 150,
      lessons: 14,
      mentor: "Maths",
      mentorRole: "Mentor",
    },
  ];

  return <BestCoaching />;
};

export default AboutPage;
