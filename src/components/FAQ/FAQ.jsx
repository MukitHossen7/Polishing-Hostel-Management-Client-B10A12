import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What meal plans are available?",
      answer:
        "We offer weekly and monthly meal plans, including vegetarian and non-vegetarian options.",
    },
    {
      question: "What facilities are included in the hostel?",
      answer:
        "Our hostel provides WiFi, laundry service, study rooms, and a gym for students.",
    },
    {
      question: "What is the payment and refund policy?",
      answer:
        "Payments must be made at the beginning of the month. Refunds are available within the first 7 days of payment if cancellation is requested.",
    },
    {
      question: "Are guests allowed in the hostel?",
      answer:
        "Guests are allowed only during visiting hours and must be registered at the reception.",
    },
    {
      question: "Is there a curfew for hostel residents?",
      answer: "Yes, the hostel has a curfew of 10 PM for security reasons.",
    },
    {
      question: "Can I change my meal plan after selecting one?",
      answer:
        "Yes, you can change your meal plan at the beginning of each month by contacting the hostel administration.",
    },
    {
      question: "How do I report maintenance issues?",
      answer:
        "You can report maintenance issues through the hostel's online portal or inform the warden directly.",
    },
    {
      question: "Are there study rooms available?",
      answer:
        "Yes, we have dedicated quiet study rooms open 24/7 for students.",
    },
    // {
    //   question: "How can I book the hostel dining hall for events?",
    //   answer:
    //     "Students can book the dining hall for events by submitting a request to the hostel administration at least one week in advance.",
    // },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto mt-10 md:mt-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow rounded-md p-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
