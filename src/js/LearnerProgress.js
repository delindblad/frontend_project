const STORAGE_KEY = "elearning:learner-progress:v1";

function createEmptyProgress() {
  return {
    version: 1,
    completedLessonIds: [],
    lastOpenedLesson: null,
    quizResultsByCourseId: {},
  };
}

//is data valid
function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function discardSavedProgress() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // continiues without data even if it can not be deleted
  }
}

function normalizeProgress(value) {
  return {
    version: 1,
    completedLessonIds: Array.isArray(value.completedLessonIds)
      ? value.completedLessonIds.filter((id) => typeof id === "string")
      : [],
    lastOpenedLesson: isObject(value.lastOpenedLesson)
      ? value.lastOpenedLesson
      : null,
    quizResultsByCourseId: isObject(value.quizResultsByCourseId)
      ? value.quizResultsByCourseId
      : {},
  };
}

export function loadLearnerProgress() {
  if (typeof window === "undefined") {
    return { progress: createEmptyProgress(), warning: "unavailable" };
  }

  try {
    const savedData = window.localStorage.getItem(STORAGE_KEY);

    // initialize data
    if (savedData === null) {
      return { progress: createEmptyProgress(), warning: null };
    }

    let parsedData;

    try {
      parsedData = JSON.parse(savedData);
    } catch {
      discardSavedProgress();
      return { progress: createEmptyProgress(), warning: "invalid" };
    }

    if (!isObject(parsedData)) {
      discardSavedProgress();
      return { progress: createEmptyProgress(), warning: "invalid" };
    }

    return {
      progress: normalizeProgress(parsedData),
      warning: null,
    };
  } catch {
    return { progress: createEmptyProgress(), warning: "read" };
  }
}

export function saveLearnerProgress(progress) {
  try {
    if (typeof window === "undefined") {
      return { saved: false, warning: "unavailable" };
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

    return { saved: true, warning: null };
  } catch {
    return { saved: false, warning: "write" };
  }
}

function updateLearnerProgress(update) {
  const { progress, warning: loadWarning } = loadLearnerProgress();
  const updatedProgress = update(progress);
  const { saved, warning: saveWarning } = saveLearnerProgress(updatedProgress);

  return {
    progress: updatedProgress,
    saved,
    warning: saveWarning ?? loadWarning,
  };
}

export function saveQuizResult(courseId, score, totalQuestions) {
  const result = {
    score,
    totalQuestions,
    percentage:
      totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0,
    completedAt: new Date().toISOString(),
  };

  return updateLearnerProgress((progress) => ({
    ...progress,
    quizResultsByCourseId: {
      ...progress.quizResultsByCourseId,
      [courseId]: result,
    },
  }));
}

export function markLessonOpened({ courseId, moduleId, lessonId }) {
  return updateLearnerProgress((progress) => ({
    ...progress,
    lastOpenedLesson: {
      courseId,
      moduleId,
      lessonId,
      openedAt: new Date().toISOString(),
    },
  }));
}

export function markLessonCompleted(lessonId) {
  return updateLearnerProgress((progress) => ({
    ...progress,
    completedLessonIds: [
      ...new Set([...progress.completedLessonIds, lessonId]),
    ],
  }));
}