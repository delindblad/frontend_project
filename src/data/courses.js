function createLesson(id, title, content = {}) {
  return {
    id,
    title,
    explanation: "",
    codeExample: null,
    practiceActivity: "",
    resources: [],
    ...content,
  };
}

const placeholderResource = {
  title: "Example resource (placeholder)",
  url: "https://example.com",
};

export const courses = [
  {
    id: "web-advanced",
    title: "Advanced Web Development",
    description:
      "Build modern web applications with React, React Router and Vite, including configuration, production builds and deployment.",
    level: "Expert",
    estimatedMinutes: 480,
    objective: "Build and deploy a multi-page React application.",
    prerequisites: "Basic knowledge of JavaScript and React.",
    modules: [
      {
        id: "web-advanced-react",
        title: "Advanced React",
        learningObjectives: [
          "Compose reusable components for larger applications.",
          "Choose appropriate patterns for sharing and updating state.",
        ],
        lessons: [
          createLesson(
            "web-advanced-component-composition",
            "Component composition",
            {
              explanation:
                "Dummy content: Components can be combined to build larger interfaces. A parent component can place smaller components inside it and pass data through props.",
              codeExample: {
                language: "jsx",
                code: `function CourseCard({ title, children }) {
  return (
    <article>
      <h2>{title}</h2>
      {children}
    </article>
  );
}`,
              },
              practiceActivity:
                "Dummy activity: Create a CourseCard component that displays a title and content passed in through props.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "web-advanced-state-patterns",
            "State and component patterns",
          ),
        ],
      },
      {
        id: "web-advanced-routing-vite",
        title: "Routing and Vite",
        learningObjectives: [
          "Build multi-page experiences with React Router.",
          "Configure, build and deploy a React application with Vite.",
        ],
        lessons: [
          createLesson(
            "web-advanced-react-router",
            "Routing with React Router",
          ),
          createLesson(
            "web-advanced-vite-deployment",
            "Vite production builds and deployment",
          ),
        ],
      },
    ],
  },
  {
    id: "ai-beginner",
    title: "AI for Beginners with Python",
    description:
      "Learn Python fundamentals and explore basic AI concepts, data and simple models.",
    level: "Beginner",
    estimatedMinutes: 360,
    objective:
      "Write basic Python programs and explain how simple AI models use data.",
    prerequisites: "No prior programming experience required.",
    modules: [
      {
        id: "ai-beginner-python",
        title: "Python Foundations",
        learningObjectives: [
          "Use variables and basic data types in Python.",
          "Control program flow with conditions, loops and functions.",
        ],
        lessons: [
          createLesson(
            "ai-beginner-python-values",
            "Variables and data types",
            {
              explanation:
                "Dummy content: A variable gives a name to a value. Python can work with different types of values, such as text and numbers.",
              codeExample: {
                language: "python",
                code: `name = "Alex"
age = 25

print(name)
print(age)`,
              },
              practiceActivity:
                "Dummy activity: Create variables for a learner's name and course, then print a short introduction.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "ai-beginner-python-control-flow",
            "Conditions, loops and functions",
          ),
        ],
      },
      {
        id: "ai-beginner-ai",
        title: "Introduction to AI",
        learningObjectives: [
          "Describe common AI concepts and uses.",
          "Explain how data can be used by a simple model.",
        ],
        lessons: [
          createLesson(
            "ai-beginner-ai-concepts",
            "What is artificial intelligence?",
          ),
          createLesson(
            "ai-beginner-ai-data",
            "Data and simple models",
          ),
        ],
      },
    ],
  },
  {
    id: "csharp-beginner",
    title: "C# for Beginners",
    description:
      "Learn variables, data types, conditions, loops, classes and collections in C#.",
    level: "Beginner",
    estimatedMinutes: 420,
    objective:
      "Write small C# programs using core language features and objects.",
    prerequisites: "No prior C# experience required.",
    modules: [
      {
        id: "csharp-beginner-fundamentals",
        title: "C# Fundamentals",
        learningObjectives: [
          "Declare variables and work with common data types.",
          "Use conditions and loops to control program flow.",
        ],
        lessons: [
          createLesson(
            "csharp-beginner-data-types",
            "Variables and data types",
            {
              explanation:
                "Dummy content: A variable stores a value that a program can use. In C#, the type tells the program what kind of value is stored.",
              codeExample: {
                language: "csharp",
                code: `string name = "Alex";
int age = 25;

Console.WriteLine(name);
Console.WriteLine(age);`,
              },
              practiceActivity:
                "Dummy activity: Create variables for a course title and its duration, then print both values.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "csharp-beginner-control-flow",
            "Conditions and loops",
          ),
        ],
      },
      {
        id: "csharp-beginner-methods-objects",
        title: "Methods and Objects",
        learningObjectives: [
          "Organize code into methods with parameters and return values.",
          "Create classes and use objects in a program.",
        ],
        lessons: [
          createLesson(
            "csharp-beginner-methods",
            "Methods and parameters",
          ),
          createLesson(
            "csharp-beginner-classes",
            "Classes and objects",
          ),
        ],
      },
    ],
  },
  {
    id: "csharp-expert",
    title: "Advanced C#",
    description:
      "Explore LINQ, asynchronous programming, error handling and unit testing.",
    level: "Expert",
    estimatedMinutes: 540,
    objective:
      "Build more robust C# applications using LINQ, async programming and tests.",
    prerequisites:
      "Experience with C#, classes, collections and methods.",
    modules: [
      {
        id: "csharp-expert-linq",
        title: "LINQ and Data Processing",
        learningObjectives: [
          "Filter and transform collections with LINQ.",
          "Compose queries that group and order data.",
        ],
        lessons: [
          createLesson(
            "csharp-expert-linq-filtering",
            "Filtering and projecting data with LINQ",
            {
              explanation:
                "Dummy content: LINQ lets you query collections in a readable way. A query can select only the items that match a condition.",
              codeExample: {
                language: "csharp",
                code: `var passingScores = scores
    .Where(score => score >= 60)
    .ToList();`,
              },
              practiceActivity:
                "Dummy activity: Use LINQ to select all course scores that are at least 70.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "csharp-expert-linq-grouping",
            "Grouping and ordering query results",
          ),
        ],
      },
      {
        id: "csharp-expert-async-quality",
        title: "Asynchronous Programming and Quality",
        learningObjectives: [
          "Use async and await to write asynchronous code.",
          "Handle errors and verify behavior with unit tests.",
        ],
        lessons: [
          createLesson(
            "csharp-expert-async-await",
            "Tasks, async and await",
          ),
          createLesson(
            "csharp-expert-testing-errors",
            "Unit testing and error handling",
          ),
        ],
      },
    ],
  },
  {
    id: "cpp-beginner",
    title: "C++ for Beginners",
    description:
      "Get started with program structure, variables, conditions, loops and functions.",
    level: "Beginner",
    estimatedMinutes: 360,
    objective:
      "Write small C++ programs using basic syntax, functions and collections.",
    prerequisites: "No prior C++ experience required.",
    modules: [
      {
        id: "cpp-beginner-syntax",
        title: "Program Structure and Syntax",
        learningObjectives: [
          "Understand the structure of a basic C++ program.",
          "Declare variables and use common data types.",
        ],
        lessons: [
          createLesson(
            "cpp-beginner-program-structure",
            "Program structure and syntax",
            {
              explanation:
                "Dummy content: A C++ program starts by including any needed libraries. The main function is where the program begins running.",
              codeExample: {
                language: "cpp",
                code: `#include <iostream>

int main() {
    std::cout << "Hello, world!";
    return 0;
}`,
              },
              practiceActivity:
                "Dummy activity: Change the program so it prints the name of your course.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "cpp-beginner-variables",
            "Variables and data types",
          ),
        ],
      },
      {
        id: "cpp-beginner-control-functions",
        title: "Control Flow and Functions",
        learningObjectives: [
          "Use conditions and loops to control program flow.",
          "Create and call functions to organize code.",
        ],
        lessons: [
          createLesson(
            "cpp-beginner-control-flow",
            "Conditions and loops",
          ),
          createLesson(
            "cpp-beginner-functions",
            "Functions and parameters",
          ),
        ],
      },
    ],
  },
  {
    id: "cloud-beginner",
    title: "Cloud Computing Fundamentals",
    description:
      "Understand cloud service models, platforms, application deployment and basic security.",
    level: "Beginner",
    estimatedMinutes: 300,
    objective:
      "Explain core cloud concepts and describe a basic cloud deployment.",
    prerequisites: "Basic computer and internet knowledge.",
    modules: [
      {
        id: "cloud-beginner-concepts",
        title: "Cloud Concepts",
        learningObjectives: [
          "Compare common cloud service models.",
          "Describe cloud platforms, regions and availability zones.",
        ],
        lessons: [
          createLesson(
            "cloud-beginner-service-models",
            "Cloud service models",
            {
              explanation:
                "Dummy content: Cloud services are often grouped into IaaS, PaaS and SaaS. These models offer different levels of control over infrastructure and software.",
              codeExample: null,
              practiceActivity:
                "Dummy activity: Choose a familiar online service and decide whether it is best described as SaaS, PaaS or IaaS.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "cloud-beginner-platforms",
            "Cloud platforms and regions",
          ),
        ],
      },
      {
        id: "cloud-beginner-deployment",
        title: "Deployment and Security",
        learningObjectives: [
          "Outline the steps for deploying an application to the cloud.",
          "Recognize basic cloud security practices.",
        ],
        lessons: [
          createLesson(
            "cloud-beginner-deploy",
            "Deploying an application",
          ),
          createLesson(
            "cloud-beginner-security",
            "Identity, access and basic cloud security",
          ),
        ],
      },
    ],
  },
  {
    id: "kubernetes-beginner",
    title: "Kubernetes Fundamentals",
    description:
      "Learn about clusters, nodes, pods, deployments, services and basic configuration.",
    level: "Beginner",
    estimatedMinutes: 360,
    objective:
      "Describe Kubernetes building blocks and deploy a basic application.",
    prerequisites:
      "Basic command-line and container concepts are helpful.",
    modules: [
      {
        id: "kubernetes-beginner-cluster",
        title: "Clusters, Nodes and Pods",
        learningObjectives: [
          "Describe the purpose of a Kubernetes cluster and its nodes.",
          "Explain how pods run containerized workloads.",
        ],
        lessons: [
          createLesson(
            "kubernetes-beginner-clusters",
            "Clusters and nodes",
            {
              explanation:
                "Dummy content: A Kubernetes cluster coordinates the machines that run applications. Nodes provide the compute resources for those workloads.",
              codeExample: {
                language: "bash",
                code: "kubectl get nodes",
              },
              practiceActivity:
                "Dummy activity: Run the command in a Kubernetes environment and identify the nodes listed.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "kubernetes-beginner-pods",
            "Containers and pods",
          ),
        ],
      },
      {
        id: "kubernetes-beginner-workloads",
        title: "Deployments and Services",
        learningObjectives: [
          "Use a deployment to manage an application workload.",
          "Explain how a service makes an application available.",
        ],
        lessons: [
          createLesson(
            "kubernetes-beginner-deployments",
            "Deployments and replicas",
          ),
          createLesson(
            "kubernetes-beginner-services",
            "Services and application access",
          ),
        ],
      },
    ],
  },
  {
    id: "kubernetes-intermediate",
    title: "Kubernetes Application Delivery",
    description:
      "Package and configure applications with Helm, manage environments and use Kubernetes in a CI/CD pipeline.",
    level: "Intermediate",
    estimatedMinutes: 480,
    objective:
      "Package and deliver applications across Kubernetes environments.",
    prerequisites:
      "Basic Kubernetes knowledge, including pods, deployments and services.",
    modules: [
      {
        id: "kubernetes-intermediate-helm",
        title: "Helm and Application Configuration",
        learningObjectives: [
          "Structure an application as a Helm chart.",
          "Configure chart values for different environments.",
        ],
        lessons: [
          createLesson(
            "kubernetes-intermediate-charts",
            "Helm charts and templates",
            {
              explanation:
                "Dummy content: A Helm chart packages Kubernetes configuration so it can be reused and installed consistently.",
              codeExample: {
                language: "yaml",
                code: `apiVersion: v2
name: sample-app
description: A placeholder Helm chart
version: 0.1.0`,
              },
              practiceActivity:
                "Dummy activity: Identify the chart name and version in the sample Chart.yaml content.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "kubernetes-intermediate-values",
            "Values and environment configuration",
          ),
        ],
      },
      {
        id: "kubernetes-intermediate-cicd",
        title: "CI/CD and Release Delivery",
        learningObjectives: [
          "Describe how a CI/CD pipeline can deploy to Kubernetes.",
          "Promote and roll back application releases safely.",
        ],
        lessons: [
          createLesson(
            "kubernetes-intermediate-pipeline",
            "Building a Kubernetes delivery pipeline",
          ),
          createLesson(
            "kubernetes-intermediate-releases",
            "Release promotion and rollback",
          ),
        ],
      },
    ],
  },
  {
    id: "kubernetes-expert",
    title: "Kubernetes Production Operations",
    description:
      "Work with workload security, RBAC, network policies, observability and scaling.",
    level: "Expert",
    estimatedMinutes: 600,
    objective:
      "Operate Kubernetes workloads with stronger security, visibility and resilience.",
    prerequisites:
      "Solid Kubernetes administration and production operations experience.",
    modules: [
      {
        id: "kubernetes-expert-security",
        title: "Security and Network Policies",
        learningObjectives: [
          "Apply role-based access control to cluster resources.",
          "Use security settings and network policies to limit workload access.",
        ],
        lessons: [
          createLesson(
            "kubernetes-expert-rbac",
            "RBAC and service accounts",
            {
              explanation:
                "Dummy content: Role-based access control (RBAC) assigns permissions to users or service accounts through roles and role bindings.",
              codeExample: {
                language: "yaml",
                code: `kind: Role
metadata:
  name: read-pods
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list"]`,
              },
              practiceActivity:
                "Dummy activity: Find which resource and actions the sample role allows.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "kubernetes-expert-network-policies",
            "Workload security and network policies",
          ),
        ],
      },
      {
        id: "kubernetes-expert-observability",
        title: "Observability and Scaling",
        learningObjectives: [
          "Use metrics and logs to investigate workload health.",
          "Choose scaling approaches for production workloads.",
        ],
        lessons: [
          createLesson(
            "kubernetes-expert-observability",
            "Metrics, logs and workload health",
          ),
          createLesson(
            "kubernetes-expert-scaling",
            "Autoscaling and capacity planning",
          ),
        ],
      },
    ],
  },
  {
    id: "rust-beginner",
    title: "Rust Fundamentals",
    description:
      "Learn Rust syntax, functions, ownership, borrowing, structs and enums.",
    level: "Beginner",
    estimatedMinutes: 420,
    objective:
      "Write small Rust programs and understand ownership and borrowing.",
    prerequisites:
      "Basic programming concepts are helpful, but prior Rust experience is not required.",
    modules: [
      {
        id: "rust-beginner-syntax",
        title: "Rust Syntax and Functions",
        learningObjectives: [
          "Write Rust statements and declare variables.",
          "Create functions with parameters and return values.",
        ],
        lessons: [
          createLesson(
            "rust-beginner-variables",
            "Variables, mutability and data types",
            {
              explanation:
                "Dummy content: Rust variables are immutable by default. Use `mut` when a value needs to change.",
              codeExample: {
                language: "rust",
                code: `let course = "Rust";
let mut progress = 0;
progress += 1;

println!("{course}: {progress}");`,
              },
              practiceActivity:
                "Dummy activity: Create an immutable course name and a mutable lesson counter.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "rust-beginner-functions",
            "Functions and control flow",
          ),
        ],
      },
      {
        id: "rust-beginner-ownership",
        title: "Ownership and Data Structures",
        learningObjectives: [
          "Explain ownership and borrowing in Rust.",
          "Represent structured data with structs and enums.",
        ],
        lessons: [
          createLesson(
            "rust-beginner-ownership-borrowing",
            "Ownership and borrowing",
          ),
          createLesson(
            "rust-beginner-structs-enums",
            "Structs and enums",
          ),
        ],
      },
    ],
  },
  {
    id: "rust-intermediate",
    title: "Intermediate Rust",
    description:
      "Use traits, generics, iterators, closures and Rust’s error-handling patterns.",
    level: "Intermediate",
    estimatedMinutes: 480,
    objective:
      "Use Rust abstractions and standard library tools to write idiomatic programs.",
    prerequisites:
      "Comfort with Rust syntax, ownership, borrowing, structs and enums.",
    modules: [
      {
        id: "rust-intermediate-abstractions",
        title: "Traits and Generics",
        learningObjectives: [
          "Define and implement traits for shared behavior.",
          "Write generic functions and data structures.",
        ],
        lessons: [
          createLesson(
            "rust-intermediate-traits",
            "Traits and trait implementations",
            {
              explanation:
                "Dummy content: A trait describes behavior that different types can implement.",
              codeExample: {
                language: "rust",
                code: `trait Describe {
    fn describe(&self) -> String;
}`,
              },
              practiceActivity:
                "Dummy activity: Add a `Describe` implementation for a simple struct.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "rust-intermediate-generics",
            "Generics and bounds",
          ),
        ],
      },
      {
        id: "rust-intermediate-idioms",
        title: "Iterators, Closures and Errors",
        learningObjectives: [
          "Transform collections using iterators and closures.",
          "Handle recoverable errors with Rust’s result types.",
        ],
        lessons: [
          createLesson(
            "rust-intermediate-iterators",
            "Iterators and closures",
          ),
          createLesson(
            "rust-intermediate-errors",
            "Option, Result and error handling",
          ),
        ],
      },
    ],
  },
  {
    id: "rust-expert",
    title: "Advanced Rust Systems Programming",
    description:
      "Explore concurrency, asynchronous Rust, unsafe code and performance profiling.",
    level: "Expert",
    estimatedMinutes: 600,
    objective:
      "Build and analyze systems software using advanced Rust capabilities.",
    prerequisites:
      "Strong Rust experience, including traits, generics, ownership and error handling.",
    modules: [
      {
        id: "rust-expert-concurrency",
        title: "Concurrency and Async Rust",
        learningObjectives: [
          "Coordinate concurrent work using threads and message passing.",
          "Build asynchronous workflows with Rust futures.",
        ],
        lessons: [
          createLesson(
            "rust-expert-threads",
            "Threads, shared state and channels",
            {
              explanation:
                "Dummy content: Threads allow work to run concurrently. Message passing can help threads communicate without directly sharing mutable data.",
              codeExample: {
                language: "rust",
                code: `use std::thread;

let handle = thread::spawn(|| {
    println!("Running in another thread");
});

handle.join().unwrap();`,
              },
              practiceActivity:
                "Dummy activity: Identify where the new thread starts and where the main thread waits for it.",
              resources: [placeholderResource],
            },
          ),
          createLesson(
            "rust-expert-async",
            "Async Rust and futures",
          ),
        ],
      },
      {
        id: "rust-expert-systems",
        title: "Unsafe Rust and Performance",
        learningObjectives: [
          "Explain when unsafe Rust may be needed and how to isolate it.",
          "Measure and investigate performance bottlenecks.",
        ],
        lessons: [
          createLesson(
            "rust-expert-unsafe",
            "Unsafe Rust and safety boundaries",
          ),
          createLesson(
            "rust-expert-profiling",
            "Performance profiling and optimization",
          ),
        ],
      },
    ],
  },
];