const FAQItem = ({ question, answer, index }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-[#0A6EA1] mb-2">
        {index + 1}. {question}
      </h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default FAQItem;
