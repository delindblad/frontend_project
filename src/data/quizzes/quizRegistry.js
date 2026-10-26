// Import each course's quiz content from its JSON file.
import csharpBeginner from "./csharp-beginner.json";
import csharpExpert from "./csharp-expert.json";

// Load the Advanced Web Development quiz.
import webAdvanced from "./web-advanced.json";

// Load the Python foundations and introductory AI quiz.
import aiBeginner from "./ai-beginner.json";

// Load the C++ fundamentals quiz.
import cppBeginner from "./cpp-beginner.json";

// Match quiz content to the corresponding course IDs in courses.js.
const quizzes = {
  "csharp-beginner": csharpBeginner,
  "csharp-expert": csharpExpert,
  "web-advanced": webAdvanced,
  "ai-beginner": aiBeginner,
  "cpp-beginner": cppBeginner,
};

export default quizzes;
