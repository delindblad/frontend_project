// Import each course's quiz content from its JSON file.
import csharpBeginner from "./csharp-beginner.json";
import csharpExpert from "./csharp-expert.json";

// Load the Advanced Web Development quiz.
import webAdvanced from "./web-advanced.json";

// Load the Python foundations and introductory AI quiz.
import aiBeginner from "./ai-beginner.json";

// Load the C++ fundamentals quiz.
import cppBeginner from "./cpp-beginner.json";

// Load the cloud concepts, deployment, and security quiz.
import cloudBeginner from "./cloud-beginner.json";

// Load the quiz on Kubernetes clusters, Pods, Deployments, and Services.
import kubernetesBeginner from "./kubernetes-beginner.json";

// Load the quiz on Helm, environment configuration, and release delivery.
import kubernetesIntermediate from "./kubernetes-intermediate.json";

// Load the quiz on Kubernetes security, observability, and scaling.
import kubernetesExpert from "./kubernetes-expert.json";

// Load the quiz on Rust syntax, ownership, borrowing, and data structures.
import rustBeginner from "./rust-beginner.json";

// Load the quiz on Rust traits, generics, iterators, and error handling.
import rustIntermediate from "./rust-intermediate.json";

// Load the quiz on Rust concurrency, async, unsafe code, and profiling.
import rustExpert from "./rust-expert.json";

// Match quiz content to the corresponding course IDs in courses.js.
const quizzes = {
  "csharp-beginner": csharpBeginner,
  "csharp-expert": csharpExpert,
  "web-advanced": webAdvanced,
  "ai-beginner": aiBeginner,
  "cpp-beginner": cppBeginner,
  "cloud-beginner": cloudBeginner,
  "kubernetes-beginner": kubernetesBeginner,
  "kubernetes-intermediate": kubernetesIntermediate,
  "kubernetes-expert": kubernetesExpert,
  "rust-beginner": rustBeginner,
  "rust-intermediate": rustIntermediate,
  "rust-expert": rustExpert,
};

export default quizzes;
