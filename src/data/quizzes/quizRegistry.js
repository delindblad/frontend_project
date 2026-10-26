// Import each course's quiz content from its JSON file.
import csharpBeginner from "./csharp-beginner.json";
import csharpExpert from "./csharp-expert.json";

// Match quiz content to the corresponding course IDs in courses.js.
const quizzes = {
  "csharp-beginner": csharpBeginner,
  "csharp-expert": csharpExpert,
};

export default quizzes;