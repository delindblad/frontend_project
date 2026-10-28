# E-learning platform — team presentation draft

**English · 30 minutes including Q&A · 28 October 2026**

Based only on the uploaded `frontend_project-master(1).zip`, archive commit `b56d2e0b6545240449ab4d9b2ba71115ad168ad2`. Updated after the final supplied master merge. Source inspection informs this script; Ephraim also reported successful clean installation, production build and browser checks of the integrated version. A timed presentation rehearsal is still needed.

**Team review note:** All speaking text below is proposed wording for the group to review together. Product behaviour and the documented integration example are grounded in the source and this conversation. Descriptions of planning, workload, communication and team-wide practices are suggestions, not verified historical claims. Adjust them to match your experience before presenting.

## 1. Presentation running order

| Time | Section | Suggested responsibility |
| --- | --- | --- |
| 00:00–02:00 | Purpose, product and team | Opening speaker |
| 02:00–20:00 | Live website demonstration, including planning and collaboration examples | Demo speaker with brief team handovers |
| 20:00–23:00 | Short code review | Technical speaker |
| 23:00–27:00 | Team reflection | Shared or closing speaker |
| 27:00–30:00 | Questions | Whole team |

These are roles, not assignments to particular people. Add names together. The live demo occupies 18 minutes: 60% of the full session. Explain planning and task division while showing the relevant pages; use the four-minute reflection to cover GitHub, teamwork, challenges, time and stress, AI and Agile explicitly. Supporting preparation notes at the end are not extra timed sections.

## 2. Opening: what we developed — 2 minutes

**Suggested speaking notes**

“Our project is a frontend e-learning platform. A learner can explore courses, select lessons, practise with quizzes and view their progress. We built the interface using React and Vite, with React Router for navigation and Bootstrap and React-Bootstrap for interface components.

“The current version includes Home, Courses, Lessons and Resources, Schedule, Assessments and My Learning. There are twelve courses in the data and a registered quiz for each course. The content covers subjects such as C#, web development, Python and AI, cloud computing, Kubernetes and Rust.

“This is a learning-platform prototype. Some lesson content and resources are placeholders. The sign-in is a frontend demonstration, not real authentication. Progress is stored in the current browser, rather than in a user account or central database. Today, we will demonstrate the version currently merged into master.”

**Show:** Home. Briefly introduce team members and their presentation roles; leave catalogue browsing for the demo. Explain the user need in one sentence agreed by the team. Avoid saying all courses are complete.

**Transition:** “We will now follow a learner through the website and explain our decisions as we go.”

## 3. Live project demo — 18 minutes

### Preparation

Use one dedicated demonstration browser profile with storage available. Start the app before the presentation. Use fictitious demo credentials only; the sign-in handler does not validate credentials. Rehearse signing in through Courses and returning to the catalogue. If live sign-in is unreliable on the presentation host, begin already signed in and explain the simulation. Rehearse the exact route on the actual presentation machine. Capture backup screenshots after a successful rehearsal. Use screen zoom large enough for the audience.

For a clean run, use a new demonstration profile rather than deleting personal browser data. Keep the same origin and browser profile throughout the demo. Do not change course midway through an unanswered quiz: changing quizzes clears the current attempt.

### Demonstration script

Times below are relative to the start of the demo (presentation minute 02:00). Allow time for clicking and explaining; do not read every lesson or question aloud.

| Demo time | Action | Speaking cues and checks |
| --- | --- | --- |
| 0:00–1:30 | Home, navigation and demo sign-in | “We will follow a learner from choosing a course to reviewing progress.” Open Courses to show the sign-in screen, submit fictitious demo values, and return to Courses if necessary. Explain that this simulates access using browser storage; it does not authenticate a real account. Briefly explain the page structure. Say: “Our focus was a connected learner journey: choosing a course, studying, practising and checking progress.” |
| 1:30–4:00 | Courses → C# for Beginners → C# Fundamentals | Show the new course images and level icons, then the objective, prerequisites, modules and lesson titles. “The catalogue uses shared course data, while each course has its own learning structure.” Suggested team wording: “We divided the work into feature areas, including course browsing, lessons, scheduling, assessments and progress tracking. We then brought those parts together in one application.” Click Start module to open the selected module in Lessons. |
| 4:00–7:30 | Lessons and Resources, reached through Start module | Confirm that Start module opened C# Fundamentals and Variables and data types. Show its explanation, code example and practice activity. Acknowledge sample content and placeholder links. Click Mark complete once. Show Next lesson and Previous lesson, noting unfinished content honestly. Say: “Start module passes the selected course, module and lesson IDs to the Lessons page, so the learner arrives at the correct content.” Return to Variables and data types before leaving. |
| 7:30–9:00 | Schedule | Show the default Study plan tab: suggested course cards come from demo enrollment. Say that its Filter and Open activity controls are placeholders. Switch to Schedule, show the weekday/time grid and change one subject selection. Revisit or refresh to show the stored selection if rehearsed. Explain that this is browser-local planning, not bookings or calendar synchronisation. |
| 9:00–12:00 | Assessments → C# for Beginners | Explain the quiz selector and answered count. Show Submit disabled before every question is answered. Answer the five questions, choosing four correct answers and one deliberately incorrect answer. Announce the deliberately incorrect answer. Do not change quizzes mid-attempt. |
| 12:00–14:30 | Submit → Show correct answers → Try again | Show 4 of 5 (80%), locked options, then correct/incorrect feedback and explanations. Retry once: selections clear, feedback hides and options reshuffle. “Retry resets the form; the previously saved result remains until another submission or an explicit reset.” Do not submit a second attempt. |
| 14:30–17:00 | My Learning → refresh | Show one completed lesson, the last opened lesson and the latest C# score. With a clean profile: 1 of 48 lessons, rounded to 2%, and 80% for the quiz. Explain that data belongs to this browser. Refresh to demonstrate persistence. Continue learning is a text summary, not a resume link. |
| 17:00–18:00 | Recap on My Learning and transition | “We have followed the learner from course selection through a lesson and quiz to saved progress.” Mention one useful implementation lesson: pages must agree on IDs and stored-data structure. Allow a short timing buffer, then move to the code review at presentation minute 20:00. |

**Team handovers:** use brief transitions at page boundaries, such as “Next, we will show how learners practise.” Keep one person controlling the browser unless switching operators has been rehearsed. Share the presentation across the team without repeating introductions.

### Important route details

- Start module now routes to Lessons with course, module and lesson IDs. Demonstrate this improved connection and its Mark complete action. An older LessonDetails component remains in the source but is not the main demo path.
- My Learning's Continue learning card displays the last opened lesson; it is not a clickable resume button in this snapshot.
- The progress percentage covers all 48 lessons in the catalogue, not just the selected course.
- Quiz results represent the latest saved attempt per course, not the best score or a history of all attempts.
- Reset selected quiz result and Reset all quiz results exist in Assessments. They request confirmation and preserve completed lessons. Mention them if asked; avoid spending the main demo on deleting results.

**Backup line if the live demo fails:** “We have screenshots of the rehearsed flow. We will use those to explain the interaction and investigate the live issue afterwards.” Only use this if screenshots have actually been prepared.

## 4. Short code review — 3 minutes

Open `src/quizzes/QuizForm.jsx` and `src/quizzes/QuizQuestion.jsx`. Keep the review focused on one interaction: submit, reveal, retry.

### Minute 1 — separate UI states

```jsx
const [answers, setAnswers] = useState({});
const [submitted, setSubmitted] = useState(false);
const [showAnswers, setShowAnswers] = useState(false);
```

“We separate selected answers, submission and feedback visibility. This lets learners see their score after submission without immediately revealing the solutions. The question component receives this state through props.”

### Minute 2 — scoring and revealing

```jsx
const score = questions.filter(
  (question) => answers[question.id] === question.correctAnswerId,
).length;
```

“Answers use stable IDs. Options can be shuffled without changing which answer is correct. The parent handles state and scoring; the question component displays the choices.”

```jsx
const revealFeedback = submitted && showAnswers;
```

“Both conditions must be true before individual feedback appears. Submitted choices are disabled.”

### Minute 3 — retry and persistence

Point to `handleRetry()` and the `saveQuizResult(...)` call.

“Retry resets the current interaction and reshuffles the options. Submitting stores the result through our shared learner-progress module. My Learning reads those saved results. This separates interface logic from browser storage.”

**Tradeoff to mention:** “Correct answers are included in frontend JSON, so this is suitable for practice quizzes, not secure examinations.”

## 5. Team reflection — 4 minutes

Review the proposed wording together and adjust any description that does not match the team’s experience. This is a compact speaking structure; supporting notes below provide fuller suggested answers. Do not claim a process happened simply because the code could support it.

### 0:00–0:45 — GitHub and teamwork

“We used a shared GitHub repository and separate branches to combine contributions. In our final integration, we saved the local work, merged the updated master, resolved a dependency conflict and checked the application before submitting a pull request. Keeping the course and lesson IDs consistent allowed the pages to connect correctly.”

Use the confirmed example: formatting commit ed34bfe, integration merge 3db7380, and merged master b56d2e0. Ephraim used a backup branch, compared changes, merged master locally, tested, pushed and created a pull request. GitHub reported successful checks and no remaining conflicts. No teammate review was completed before this merge; do not claim that it was.

### 0:45–1:45 — a challenge, its solution and the lesson

“A concrete integration challenge was keeping dependencies consistent while combining contributions. A clean installation failed because package.json and the lock file did not agree. A later merge also produced a lock-file conflict. We preserved the formatting work in a commit and backup branch, reconciled the lock file with npm, and checked a clean installation, production build and the website. GitHub checks passed before the pull request was merged. This taught us that a successful merge alone is not enough: we also need reproducible installation and user-flow checks.”

This example is confirmed by Ephraim’s work in this conversation. Present it as an integration example from the project; do not imply every member performed these steps.

Choose one strong example for the timed reflection; reserve a second for Q&A. Possible topics to confirm include integrating pages, shared-component changes, consistent data IDs and quiz interaction states.

### 1:45–2:30 — time, stress and Agile principles

“Under time pressure, we focused on making the main learner journey work. Breaking problems into smaller checks helped us handle them one at a time. For example, we repaired the installation before testing the build and browser behaviour. We also improved quiz formatting through several rounds of visual feedback. Next time, we would integrate earlier and reserve more time for testing and rehearsal.”

Describe how the team handled stress in concrete terms, such as reassigning a task or discussing a blocker, only if that happened. Do not claim formal Scrum or sprints unless used.

### 2:30–3:15 — AI tools and verification

“One example of AI use in our project was using ChatGPT to interpret Git and npm errors, improve quiz formatting and prepare presentation notes. We checked suggestions through installation, builds and browser testing. The first styling suggestions did not match our intended appearance, so we compared screenshots and refined them. We remain responsible for understanding the code and explaining our choices.”

Confirm each member's experience before describing AI use as a team practice.

### 3:15–4:00 — useful tools and lessons learned

“GitHub helped us combine contributions, VS Code supported editing and terminal work, and Vite let us check the interface during development. Our main lessons were to preserve working versions before integration and test complete user journeys. Our suggested next priorities are to complete the lesson content and connect the remaining Study plan controls.”

Code-supported improvement candidates: complete placeholder lessons and links; clean up obsolete or duplicate routes; add meaningful tests for quiz and progress behaviour; show quiz-save failures to learners. Accounts and cross-device progress are future extensions, not current features.

**Transition:** “Thank you. We are ready for your questions.”

## 6. Q&A preparation — 3 minutes reserved

| Likely question | Accurate answer for this snapshot |
| --- | --- |
| Where is progress stored? | In localStorage in the current browser. It is not synced across devices or linked to a login. |
| Are all twelve courses complete? | Twelve courses and quizzes are represented; many lessons and resource links are still placeholders. |
| How can a new quiz be added? | Add compatible question JSON, register it under the course ID in quizRegistry.js and ensure the course data uses the same ID. |
| Why separate submitted and showAnswers? | Submission locks the attempt and shows the score; the learner separately chooses when to reveal feedback. |
| Does retry delete the saved result? | No. It resets the active form. A later submission replaces the saved course result; explicit reset controls remove results. |
| Is this a secure exam system? | No. Questions and correct answers are client-side data. It is a practice-learning prototype. |
| Does it render LaTeX formulas? | Not in this snapshot. QuizContent uses ReactMarkdown without a math-rendering plugin. |
| What testing did you do? | Describe only tests the team actually performed. Ephraim reported successful npm ci, production build and browser checks of Courses, Start module, quizzes and My Learning. The assistant inspected the source but did not independently run a browser test. The archive has a small sum test file but no configured test script in package.json. |
| What would you improve first? | Complete the content and wire up the Study plan controls; choose the team's actual priorities before presenting. |

## 7. Rehearsal and finalisation checklist

- Assign speakers and one person to control timing.
- Review the suggested answers as a team, agree the wording and assign speakers.
- Confirm whether the 30-minute limit includes questions; this draft assumes it does.
- Run the app on the presentation machine using the repository's documented setup.
- Rehearse the five-question quiz, expected 80% result, retry and My Learning refresh.
- Rehearse both Study plan and Schedule tabs; do not demonstrate placeholder controls as working features.
- Check navigation, screen readability and the presentation browser's storage behaviour.
- Prepare screenshots as a backup and keep the two code files open.
- Start code review at minute 20, reflection at minute 23 and Q&A at minute 27. If running late, shorten catalogue browsing and lesson navigation; preserve the submit → reveal → retry → saved-progress sequence.
- If master changes, repeat the demo against the new merged version and update these notes.

## 8. Supporting preparation notes — not additional presentation time

### Planning, task division and Agile — preparation notes

The repository contains a planning proposal, sitemap and wireframe PDF. The proposal explicitly distinguishes agreed starting ideas from proposals awaiting discussion. Do not present every proposed practice as something the team actually followed.

**Opening notes supported by the files**

“Our repository includes planning documents, a sitemap and wireframes. These help communicate the intended pages and how learners move between them. The implementation has developed beyond the initial single-course proposal into a catalogue of twelve courses.”

**Suggested answers for team discussion**

- **Planning:** “We organised the platform around the learner journey. The planning documents and wireframes gave us a starting point, while the application grew into a catalogue of twelve courses.”
- **Task division:** “We divided implementation into feature areas so members could work in parallel. Shared navigation, data and page connections required coordination across those areas.”
- **Task tracking:** “We kept track of completed features, remaining work and integration problems, then used the shared repository to bring contributions together.” This is proposed wording; confirm whether it describes the actual practice. Do not name a board or tool the team did not use.
- **Progress review:** “We checked progress by opening the application and trying the learner journey. This helped us see both working features and unfinished connections.” Confirm whether this happened throughout the project or mainly during final integration.
- **Feedback:** “The quiz code initially appeared as ordinary text. We added Markdown code blocks and refined their font and spacing to match the Lessons page.”
- **Agile principles:** “We worked in smaller increments, inspected the result and adapted it using feedback. The quiz formatting is one example of repeated improvement. Next time, we would make these review points more regular and integrate changes earlier.” Describe this as iterative work, without claiming formal Scrum ceremonies.

### Teamwork and GitHub — suggested speaking notes

“We used separate branches in a shared GitHub repository so contributions could be combined. Ephraim worked on ephraim-page. Before integrating the latest master, we committed the formatting changes and created a backup branch. The merge exposed a package-lock conflict, which we resolved before checking a clean installation, a build and the browser flows. The pull request then passed its checks and was merged.”

“One important connection is between Courses and Lessons. The Start module button carries the selected identifiers into the Lessons page. Another connection is between Lessons, Assessments and My Learning: completion and quiz results are stored through shared progress functions and displayed together.”

**Confirmed example:** formatting commit ed34bfe, integration merge 3db7380 and final master b56d2e0. No teammate review was completed before this final merge; do not describe automated checks as peer review. Agree names and responsibilities verbally during team rehearsal rather than guessing individual authorship.

## 9. Source-review record

Reviewed application routing, course data, quiz registry and C# beginner quiz; Lessons, LessonDetails, Assessments, MyLearning and Schedule; quiz form/question/content components; learner-progress storage; package scripts; README and planning proposal.

Confirmed from source/data: 12 courses, 48 lesson records, 12 registered quizzes; separate submission and answer-reveal state; option shuffling; browser-local latest results; lesson completion deduplication; existing weekday schedule selectors.

Validation: Ephraim supplied successful npm ci and production-build output, confirmed the browser checks passed, and showed the pull request merged. The final supplied archive is b56d2e0. The assistant reviewed source without independently running this version. A timed rehearsal and checks on the actual presentation host remain necessary. Broader teamwork, stress management and Agile practices still need team input.

## 10. Updated feature boundaries and presenter notes

- **Course catalogue:** new course logos and level icons are included.
- **Start module:** opens the selected module’s first lesson in the shared Lessons page.
- **Sign-in:** sets a localStorage flag; no password verification or backend authentication. Progress is not isolated by user identity.
- **Study plan:** shows cards from fixed demo enrollment. Filter has no options/handler; Open activity buttons have no navigation handler. Describe these as interface placeholders.
- **Schedule:** weekday slots at 08:00, 10:00, 13:00 and 15:00 offer subject selection stored by slot in localStorage.
- **Quizzes:** formatting improvements cover eight quiz data files, with inline code and fenced code blocks. Code blocks use the Lessons-style font and background. This is formatting, not code execution or syntax highlighting.
- **Content:** many lesson explanations and resources remain placeholders. Merged contributions do not imply finished instructional content.
- **Sign-out:** the source redirects to an absolute /mylearning path. If hosting under /frontend_project/, rehearse this carefully; the redirect may leave the application base path. Keep sign-out outside the main timed demo unless verified on that host.
- **Routing cleanup:** App.jsx contains duplicate /courses/:courseId routes. Do not advertise every route as securely protected; the demo login is only a UI simulation.

### Suggested short AI reflection grounded in this session

“In this integration work, AI helped us interpret Git and npm output, format quiz content and prepare presentation notes. We checked the suggestions through installation, build output and browser testing. For example, the first styling changes did not match the intended appearance, so we compared screenshots and refined the CSS. The lesson is that generated suggestions still need verification in the actual application.”

This describes Ephraim’s demonstrated AI use. Add other members’ experiences only after confirming them.
