# E-learning Project Planning Proposal

*E-learning platform | Group Project Weeks 4–5 | 12 October 2026*

## About this proposal

This document presents suggestions for developing the group’s agreed e-learning project. It separates the initial group plan from additional proposals that have not yet been discussed or approved by the group.

### Agreed starting point

The group agreed on an **e-learning platform** and produced an initial planning board containing:

- **Users:** students, instructors, an administrator and guests.
- **Core features:** guest access, user registration and login, available courses, available videos and progress tracking.
- **Content and page ideas:** syllabus information, objectives, assessments, policies, a schedule covering lectures, labs and exercises, a login and demo page, and useful links.

These are the starting points from the group’s board. The board does not yet define the final number of pages, technical implementation, detailed learning content or individual responsibilities.

### Additional proposals for group discussion

Everything below develops that starting point into a possible small first version. **These additions are proposals, not group decisions.** They include:

- Using **Vite and React** to build the website. React would build the interface from reusable components; Vite would provide the development environment and prepare the site for publication.
- Using **Introductory Web Development** as the example course, with HTML, CSS and JavaScript modules.
- Building **six website pages**: a shared home page and five feature pages, potentially one per participant.
- Keeping the initial version focused on learners and guests, with progress stored in the browser.
- Postponing real registration, login, instructor tools and administrator tools to keep the workload manageable.
- Using the suggested content quantities, file structure and identifiers in this document.

**The proposed reduction in scope changes parts of the initial board.** The group must decide whether to keep registration and login, instructor and administrator features, and videos in the first version or postpone them. No original feature is removed by agreement through this document.

No individual responsibilities have been assigned. The group also needs to agree on the final page structure, visual design, hosting, routing and division of work.

### Proposed example with one course and six website pages

For the proposed Introductory Web Development example, these terms describe different things:

| Term | Meaning in this project | Number |
| --- | --- | --- |
| Course | The complete learning subject: Introductory Web Development | 1 |
| Module | A topic within the course: HTML Basics, CSS Basics or JavaScript Basics | 3 |
| Lesson | A short unit of learning within a module | 2 per module, 6 in total |
| Quiz | A short assessment of a module | 1 per module, 3 in total |
| Website page | A screen with a specific purpose, such as Lessons or My Learning | 6 in total: Home plus 5 feature pages |

**The three modules do not mean three website pages.** The same Lessons page displays whichever HTML, CSS or JavaScript lesson the learner selects. Similarly, the same Assessments page displays the selected module’s quiz. We do not need a separate page component for every lesson or quiz.

HTML teaches the structure of webpage content, CSS teaches its appearance and responsive layout, and JavaScript teaches interaction. These are the subjects learners will study; Vite and React are the proposed tools for building the platform, subject to group agreement.

The six proposed website pages are **Home, Courses and Syllabus, Lessons and Resources, Schedule, Assessments, and My Learning**. Their contents are explained below. “Courses and Syllabus” is the proposed page name; the initial version offers only one course, containing the three modules.

## 1 Proposed purpose and audience

For this proposed course topic, the platform would help beginners learn HTML, CSS and JavaScript and practise building their first responsive webpage. Students can explore the course without registration, complete lessons, take short quizzes and view their progress.

The assignment assesses both the finished product and how we work together: planning, communication, GitHub collaboration, code review, testing and reflection. Everyone should help integrate and review the whole application, even when working mainly on one page.

## 2 Proposed scope of the first version

- One course with three modules: HTML Basics, CSS Basics and JavaScript Basics.

- Two lessons per module, six lessons in total, and one five-question quiz per module.

- Six pages: Home, Courses and Syllabus, Lessons and Resources, Schedule, Assessments and My Learning.

- Shared navigation, header, footer and styling; layouts usable on mobile, tablet and desktop.

- Browser-based progress storage, a deployed demonstration, README and final group presentation.

### Proposed scope boundaries requiring group agreement

The proposed first version is for learners and guests. The instructor and administrator roles from the initial board would be postponed as future extensions if the group accepts this narrower scope. Under this proposal, there would be no real registration, authentication, instructor or administrator tools, backend (server-side application logic) or central database. No capacity limit or attendance management is proposed. The proposed guest entry through Home would replace the separate login and demo page in the initial board only if the group agrees.

The Schedule page provides a suggested study sequence without bookings or fixed deadlines. Exercises are completed in the learner’s own editor; an embedded editor, automatic code grading, APIs and video hosting are optional future extensions.

### Items for the group to confirm

Discuss responsibilities together and confirm the platform name, shared visual design, repository setup, hosting choice and routing approach. Detailed sitemap and desktop/mobile wireframes are the next planning deliverables.

## 3 Proposed website pages

The proposed website structure has six pages in total: one home page and five feature pages. The three learning modules (HTML, CSS and JavaScript) are course content, not three separate website pages. Responsibilities will be discussed and agreed by the group.

| Page | Deliverable |
| --- | --- |
| Home | Course introduction, three module previews and Start learning. |
| Courses and Syllabus | Module selection, objectives, prerequisites, lesson outline and assessment information. |
| Lessons and Resources | Lesson selection, explanations, code examples, practice instructions, links and Mark complete. |
| Schedule | Suggested sequence of study activities, module filter and links to lessons. |
| Assessments | Three quizzes, answer validation, score, explanations and retry. |
| My Learning | Completed lessons, latest quiz scores, progress percentage and resume learning. |

### Student journey

Home → course syllabus → choose a module → open a lesson → mark it complete → take a quiz → view updated progress in My Learning. The learner can refresh the page and return later using the same browser.

### Page dependencies

Lessons writes lesson completion and the last opened lesson. Assessments writes quiz results. My Learning reads both. Courses and Schedule use the same module and lesson IDs to link to the correct content. Build these connections early.

## 4 Proposed learning content and shared identifiers

An ID is a unique, stable label used by the code to identify a module, lesson or quiz. For example, html-01 identifies the first HTML lesson regardless of its displayed title. The following IDs are proposed; once the group adopts them, use them consistently across all pages. Display titles may change, but saved-data identifiers should remain stable.

| Module ID | Lesson IDs and titles | Quiz ID |
| --- | --- | --- |
| html | html-01: Document structure; html-02: Headings, links and images | html-quiz |
| css | css-01: Selectors, colours and spacing; css-02: Responsive layouts | css-quiz |
| javascript | javascript-01: Variables and functions; javascript-02: Events and DOM interaction | javascript-quiz |

Practice builds progressively: create webpage content with HTML, style it responsively with CSS, then add a button interaction with JavaScript. Use short original explanations and code examples. Videos are optional; include captions or a transcript if used.

### Shared source data

courseData.js contains the course and module titles, objectives and lessons. Each lesson has its ID, module ID, title, content, practice instructions and resource links. Schedule activities reference existing lesson IDs instead of duplicating lesson content.

quizData.js contains each quiz ID, module ID and five questions. Each question has a unique ID, question text, answer options with stable IDs, the correct option ID and an explanation. Use IDs such as html-q01 and option IDs a, b and c. This is a learning demo, not a secure examination system.

### Progress storage

localStorage is a browser feature that saves small amounts of data on the learner’s device. A storage key is the name used to retrieve that saved data. Use one localStorage key: webdev-progress-v1. The following example records two completed lessons and the latest HTML quiz result. The timestamp is illustrative.

```json
{
  "completedLessonIds": ["html-01", "html-02"],
  "lastLessonId": "html-02",
  "quizResults": {
    "html-quiz": {
      "score": 4,
      "totalQuestions": 5,
      "completedAt": "2026-10-12T08:00:00.000Z"
    }
  }
}
```

On a first visit, use an empty completedLessonIds array, lastLessonId set to null and an empty quizResults object. Store each lesson ID only once. Opening a lesson updates lastLessonId; submitting a quiz replaces its previous result. Calculate the completion percentage as (number of valid completed lessons / total number of lessons) × 100. For example, 2 of 6 lessons is approximately 33%. Display quiz scores separately; marking a lesson complete does not require passing a quiz.

## 5 Proposed technical organisation

If the group accepts Vite and React, use one shared project with JavaScript and CSS. Separate page components, reusable UI, content data and storage logic to support separation of concerns and extensibility.

| Location | Purpose |
| --- | --- |
| src/pages/ | Home.jsx, Courses.jsx, Lessons.jsx, Schedule.jsx, Assessments.jsx and MyLearning.jsx |
| src/components/ | Header.jsx, Footer.jsx and other genuinely reusable UI |
| src/data/ | courseData.js and quizData.js |
| src/services/ | progressService.js |
| src/styles/ | global.css for shared design rules |
| src/App.jsx and main.jsx | Application composition, navigation/routing and entry point |

### Shared progress service

Expose agreed functions such as getProgress(), markLessonComplete(lessonId), setLastLesson(lessonId) and saveQuizResult(quizId, score, totalQuestions). Generate completedAt at submission time. Each update loads current progress, changes only the relevant field, then saves with JSON.stringify; reads use JSON.parse.

Validate stored data and handle missing or invalid JSON without crashing. If browser storage is unavailable, allow temporary progress with a clear message. Refresh React state after an update so My Learning shows the current data without requiring a browser reload.

Progress belongs to this website in this browser. It is not tied to an account, does not sync across devices and may disappear if browser data is cleared. People using the same browser profile share the same progress.

### Navigation and deployment

Proposed page paths are /, /courses, /lessons, /schedule, /assessments and /my-learning. Finalise the routing approach with the sitemap. Preserve the selected module or lesson when linking between pages.

GitHub Pages is a proposed hosting option. Before implementing routing, agree how direct links and refreshes will work on the selected host. Publish a working skeleton early and test the deployed version.

### Shared design agreement

Agree on fonts, colours, content width, spacing, buttons, cards and navigation before separate page work begins. Use the same header and footer throughout. Stack multi-column layouts on small screens and keep text, controls and code examples readable without page-wide horizontal scrolling.
