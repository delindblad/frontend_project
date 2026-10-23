export const courses = [
  {
    id: 'web-advanced',
    title: 'Advanced Web Development',
    description:
      'Build modern web applications with React, React Router and Vite, including configuration, production builds and deployment.',
    level: 'Expert',
    estimatedMinutes: 480,
    objective: 'Build and deploy a multi-page React application.',
    prerequisites: 'Basic knowledge of JavaScript and React.',
    modules: [
      {
        id: 'web-advanced-react',
        title: 'Advanced React',
        learningObjectives: [
          'Compose reusable components for larger applications.',
          'Choose appropriate patterns for sharing and updating state.',
        ],
        lessons: [
          { id: 'web-advanced-component-composition', title: 'Component composition' },
          { id: 'web-advanced-state-patterns', title: 'State and component patterns' },
        ],
      },
      {
        id: 'web-advanced-routing-vite',
        title: 'Routing and Vite',
        learningObjectives: [
          'Build multi-page experiences with React Router.',
          'Configure, build and deploy a React application with Vite.',
        ],
        lessons: [
          { id: 'web-advanced-react-router', title: 'Routing with React Router' },
          { id: 'web-advanced-vite-deployment', title: 'Vite production builds and deployment' },
        ],
      },
    ],
  },
  {
    id: 'ai-beginner',
    title: 'AI for Beginners with Python',
    description:
      'Learn Python fundamentals and explore basic AI concepts, data and simple models.',
    level: 'Beginner',
    estimatedMinutes: 360,
    objective: 'Write basic Python programs and explain how simple AI models use data.',
    prerequisites: 'No prior programming experience required.',
    modules: [
      {
        id: 'ai-beginner-python',
        title: 'Python Foundations',
        learningObjectives: [
          'Use variables and basic data types in Python.',
          'Control program flow with conditions, loops and functions.',
        ],
        lessons: [
          { id: 'ai-beginner-python-values', title: 'Variables and data types' },
          { id: 'ai-beginner-python-control-flow', title: 'Conditions, loops and functions' },
        ],
      },
      {
        id: 'ai-beginner-ai',
        title: 'Introduction to AI',
        learningObjectives: [
          'Describe common AI concepts and uses.',
          'Explain how data can be used by a simple model.',
        ],
        lessons: [
          { id: 'ai-beginner-ai-concepts', title: 'What is artificial intelligence?' },
          { id: 'ai-beginner-ai-data', title: 'Data and simple models' },
        ],
      },
    ],
  },
  {
    id: 'csharp-beginner',
    title: 'C# for Beginners',
    description:
      'Learn variables, data types, conditions, loops, classes and collections in C#.',
    level: 'Beginner',
    estimatedMinutes: 420,
    objective: 'Write small C# programs using core language features and objects.',
    prerequisites: 'No prior C# experience required.',
    modules: [
      {
        id: 'csharp-beginner-fundamentals',
        title: 'C# Fundamentals',
        learningObjectives: [
          'Declare variables and work with common data types.',
          'Use conditions and loops to control program flow.',
        ],
        lessons: [
          { id: 'csharp-beginner-data-types', title: 'Variables and data types' },
          { id: 'csharp-beginner-control-flow', title: 'Conditions and loops' },
        ],
      },
      {
        id: 'csharp-beginner-methods-objects',
        title: 'Methods and Objects',
        learningObjectives: [
          'Organize code into methods with parameters and return values.',
          'Create classes and use objects in a program.',
        ],
        lessons: [
          { id: 'csharp-beginner-methods', title: 'Methods and parameters' },
          { id: 'csharp-beginner-classes', title: 'Classes and objects' },
        ],
      },
    ],
  },
  {
    id: 'csharp-expert',
    title: 'Advanced C#',
    description:
        'Explore LINQ, asynchronous programming, error handling and unit testing.',
    level: 'Expert',
    estimatedMinutes: 540,
    objective: 'Build more robust C# applications using LINQ, async programming and tests.',
    prerequisites: 'Experience with C#, classes, collections and methods.',
    modules: [
      {
        id: 'csharp-expert-linq',
        title: 'LINQ and Data Processing',
        learningObjectives: [
          'Filter and transform collections with LINQ.',
          'Compose queries that group and order data.',
        ],
        lessons: [
          { id: 'csharp-expert-linq-filtering', title: 'Filtering and projecting data with LINQ' },
          { id: 'csharp-expert-linq-grouping', title: 'Grouping and ordering query results' },
        ],
      },
      {
        id: 'csharp-expert-async-quality',
        title: 'Asynchronous Programming and Quality',
        learningObjectives: [
          'Use async and await to write asynchronous code.',
          'Handle errors and verify behavior with unit tests.',
        ],
        lessons: [
          { id: 'csharp-expert-async-await', title: 'Tasks, async and await' },
          { id: 'csharp-expert-testing-errors', title: 'Unit testing and error handling' },
        ],
      },
    ],
  },
  {
    id: 'cpp-beginner',
    title: 'C++ for Beginners',
    description:
      'Get started with program structure, variables, conditions, loops and functions.',
    level: 'Beginner',
    estimatedMinutes: 360,
    objective: 'Write small C++ programs using basic syntax, functions and collections.',
    prerequisites: 'No prior C++ experience required.',
    modules: [
      {
        id: 'cpp-beginner-syntax',
        title: 'Program Structure and Syntax',
        learningObjectives: [
          'Understand the structure of a basic C++ program.',
          'Declare variables and use common data types.',
        ],
        lessons: [
          { id: 'cpp-beginner-program-structure', title: 'Program structure and syntax' },
          { id: 'cpp-beginner-variables', title: 'Variables and data types' },
        ],
      },
      {
        id: 'cpp-beginner-control-functions',
        title: 'Control Flow and Functions',
        learningObjectives: [
          'Use conditions and loops to control program flow.',
          'Create and call functions to organize code.',
        ],
        lessons: [
          { id: 'cpp-beginner-control-flow', title: 'Conditions and loops' },
          { id: 'cpp-beginner-functions', title: 'Functions and parameters' },
        ],
      },
    ],
  },
  {
    id: 'cloud-beginner',
    title: 'Cloud Computing Fundamentals',
    description:
      'Understand cloud service models, platforms, application deployment and basic security.',
    level: 'Beginner',
    estimatedMinutes: 300,
    objective: 'Explain core cloud concepts and describe a basic cloud deployment.',
    prerequisites: 'Basic computer and internet knowledge.',
    modules: [
      {
        id: 'cloud-beginner-concepts',
        title: 'Cloud Concepts',
        learningObjectives: [
          'Compare common cloud service models.',
          'Describe cloud platforms, regions and availability zones.',
        ],
        lessons: [
          { id: 'cloud-beginner-service-models', title: 'Cloud service models' },
          { id: 'cloud-beginner-platforms', title: 'Cloud platforms and regions' },
        ],
      },
      {
        id: 'cloud-beginner-deployment',
        title: 'Deployment and Security',
        learningObjectives: [
          'Outline the steps for deploying an application to the cloud.',
          'Recognize basic cloud security practices.',
        ],
        lessons: [
          { id: 'cloud-beginner-deploy', title: 'Deploying an application' },
          { id: 'cloud-beginner-security', title: 'Identity, access and basic cloud security' },
        ],
      },
    ],
  },
  {
    id: 'kubernetes-beginner',
    title: 'Kubernetes Fundamentals',
    description:
      'Learn about clusters, nodes, pods, deployments, services and basic configuration.',
    level: 'Beginner',
    estimatedMinutes: 360,
    objective: 'Describe Kubernetes building blocks and deploy a basic application.',
    prerequisites: 'Basic command-line and container concepts are helpful.',
    modules: [
      {
        id: 'kubernetes-beginner-cluster',
        title: 'Clusters, Nodes and Pods',
        learningObjectives: [
          'Describe the purpose of a Kubernetes cluster and its nodes.',
          'Explain how pods run containerized workloads.',
        ],
        lessons: [
          { id: 'kubernetes-beginner-clusters', title: 'Clusters and nodes' },
          { id: 'kubernetes-beginner-pods', title: 'Containers and pods' },
        ],
      },
      {
        id: 'kubernetes-beginner-workloads',
        title: 'Deployments and Services',
        learningObjectives: [
          'Use a deployment to manage an application workload.',
          'Explain how a service makes an application available.',
        ],
        lessons: [
          { id: 'kubernetes-beginner-deployments', title: 'Deployments and replicas' },
          { id: 'kubernetes-beginner-services', title: 'Services and application access' },
        ],
      },
    ],
  },
  {
    id: 'kubernetes-intermediate',
    title: 'Kubernetes Application Delivery',
    description:
      'Package and configure applications with Helm, manage environments and use Kubernetes in a CI/CD pipeline.',
    level: 'Intermediate',
    estimatedMinutes: 480,
    objective: 'Package and deliver applications across Kubernetes environments.',
    prerequisites: 'Basic Kubernetes knowledge, including pods, deployments and services.',
    modules: [
      {
        id: 'kubernetes-intermediate-helm',
        title: 'Helm and Application Configuration',
        learningObjectives: [
          'Structure an application as a Helm chart.',
          'Configure chart values for different environments.',
        ],
        lessons: [
          { id: 'kubernetes-intermediate-charts', title: 'Helm charts and templates' },
          { id: 'kubernetes-intermediate-values', title: 'Values and environment configuration' },
        ],
      },
      {
        id: 'kubernetes-intermediate-cicd',
        title: 'CI/CD and Release Delivery',
        learningObjectives: [
          'Describe how a CI/CD pipeline can deploy to Kubernetes.',
          'Promote and roll back application releases safely.',
        ],
        lessons: [
          { id: 'kubernetes-intermediate-pipeline', title: 'Building a Kubernetes delivery pipeline' },
          { id: 'kubernetes-intermediate-releases', title: 'Release promotion and rollback' },
        ],
      },
    ],
  },
  {
    id: 'kubernetes-expert',
    title: 'Kubernetes Production Operations',
    description:
      'Work with workload security, RBAC, network policies, observability and scaling.',
    level: 'Expert',
    estimatedMinutes: 600,
    objective: 'Operate Kubernetes workloads with stronger security, visibility and resilience.',
    prerequisites: 'Solid Kubernetes administration and production operations experience.',
    modules: [
      {
        id: 'kubernetes-expert-security',
        title: 'Security and Network Policies',
        learningObjectives: [
          'Apply role-based access control to cluster resources.',
          'Use security settings and network policies to limit workload access.',
        ],
        lessons: [
          { id: 'kubernetes-expert-rbac', title: 'RBAC and service accounts' },
          { id: 'kubernetes-expert-network-policies', title: 'Workload security and network policies' },
        ],
      },
      {
        id: 'kubernetes-expert-observability',
        title: 'Observability and Scaling',
        learningObjectives: [
          'Use metrics and logs to investigate workload health.',
          'Choose scaling approaches for production workloads.',
        ],
        lessons: [
          { id: 'kubernetes-expert-observability', title: 'Metrics, logs and workload health' },
          { id: 'kubernetes-expert-scaling', title: 'Autoscaling and capacity planning' },
        ],
      },
    ],
  },
  {
    id: 'rust-beginner',
    title: 'Rust Fundamentals',
    description:
      'Learn Rust syntax, functions, ownership, borrowing, structs and enums.',
    level: 'Beginner',
    estimatedMinutes: 420,
    objective: 'Write small Rust programs and understand ownership and borrowing.',
    prerequisites: 'Basic programming concepts are helpful, but prior Rust experience is not required.',
    modules: [
      {
        id: 'rust-beginner-syntax',
        title: 'Rust Syntax and Functions',
        learningObjectives: [
          'Write Rust statements and declare variables.',
          'Create functions with parameters and return values.',
        ],
        lessons: [
          { id: 'rust-beginner-variables', title: 'Variables, mutability and data types' },
          { id: 'rust-beginner-functions', title: 'Functions and control flow' },
        ],
      },
      {
        id: 'rust-beginner-ownership',
        title: 'Ownership and Data Structures',
        learningObjectives: [
          'Explain ownership and borrowing in Rust.',
          'Represent structured data with structs and enums.',
        ],
        lessons: [
          { id: 'rust-beginner-ownership-borrowing', title: 'Ownership and borrowing' },
          { id: 'rust-beginner-structs-enums', title: 'Structs and enums' },
        ],
      },
    ],
  },
  {
    id: 'rust-intermediate',
    title: 'Intermediate Rust',
    description:
      'Use traits, generics, iterators, closures and Rust’s error-handling patterns.',
    level: 'Intermediate',
    estimatedMinutes: 480,
    objective: 'Use Rust abstractions and standard library tools to write idiomatic programs.',
    prerequisites: 'Comfort with Rust syntax, ownership, borrowing, structs and enums.',
    modules: [
      {
        id: 'rust-intermediate-abstractions',
        title: 'Traits and Generics',
        learningObjectives: [
          'Define and implement traits for shared behavior.',
          'Write generic functions and data structures.',
        ],
        lessons: [
          { id: 'rust-intermediate-traits', title: 'Traits and trait implementations' },
          { id: 'rust-intermediate-generics', title: 'Generics and bounds' },
        ],
      },
      {
        id: 'rust-intermediate-idioms',
        title: 'Iterators, Closures and Errors',
        learningObjectives: [
          'Transform collections using iterators and closures.',
          'Handle recoverable errors with Rust’s result types.',
        ],
        lessons: [
          { id: 'rust-intermediate-iterators', title: 'Iterators and closures' },
          { id: 'rust-intermediate-errors', title: 'Option, Result and error handling' },
        ],
      },
    ],
  },
  {
    id: 'rust-expert',
    title: 'Advanced Rust Systems Programming',
    description:
      'Explore concurrency, asynchronous Rust, unsafe code and performance profiling.',
    level: 'Expert',
    estimatedMinutes: 600,
    objective: 'Build and analyze systems software using advanced Rust capabilities.',
    prerequisites: 'Strong Rust experience, including traits, generics, ownership and error handling.',
    modules: [
      {
        id: 'rust-expert-concurrency',
        title: 'Concurrency and Async Rust',
        learningObjectives: [
          'Coordinate concurrent work using threads and message passing.',
          'Build asynchronous workflows with Rust futures.',
        ],
        lessons: [
          { id: 'rust-expert-threads', title: 'Threads, shared state and channels' },
          { id: 'rust-expert-async', title: 'Async Rust and futures' },
        ],
      },
      {
        id: 'rust-expert-systems',
        title: 'Unsafe Rust and Performance',
        learningObjectives: [
          'Explain when unsafe Rust may be needed and how to isolate it.',
          'Measure and investigate performance bottlenecks.',
        ],
        lessons: [
          { id: 'rust-expert-unsafe', title: 'Unsafe Rust and safety boundaries' },
          { id: 'rust-expert-profiling', title: 'Performance profiling and optimization' },
        ],
      },
    ],
  },
];