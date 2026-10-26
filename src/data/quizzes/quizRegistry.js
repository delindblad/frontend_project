// Import each course's quiz content from its JSON file.
import csharpBeginner from "./csharp-beginner.json";
import csharpExpert from "./csharp-expert.json";

// Load the Advanced Web Development quiz.
import webAdvanced from "./web-advanced.json";

// Match quiz content to the corresponding course IDs in courses.js.
const quizzes = {
  "csharp-beginner": csharpBeginner,
  "csharp-expert": csharpExpert,
  "web-advanced": webAdvanced,
};

export default quizzes;
