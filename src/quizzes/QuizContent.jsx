import ReactMarkdown from "react-markdown";

// Render quiz text and Markdown formatting.
function QuizContent({ children }) {
  return <ReactMarkdown>{children ?? ""}</ReactMarkdown>;
}

export default QuizContent;