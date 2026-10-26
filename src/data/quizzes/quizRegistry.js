// Import the quiz content stored in each course's JSON file.
import csharpBeginner from "./csharp-beginner.json";

// Connect each course ID from courses.js to its quiz content.
// Register additional quizzes here when their JSON files are ready.
const quizzes = {
  "csharp-beginner": csharpBeginner,
};

export default quizzes;