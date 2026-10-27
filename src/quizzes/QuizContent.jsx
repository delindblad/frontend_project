import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Load the styles required to display mathematical formulas.
import "katex/dist/katex.min.css";

// Render quiz text, Markdown code blocks, and LaTeX formulas.
// Reuse this component for questions, options, and explanations.
function QuizContent({ children }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {children ?? ""}
    </ReactMarkdown>
  );
}

export default QuizContent;