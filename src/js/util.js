//Utility function, gets the title of a course
export const getCourseTitle = ( courses, courseId) =>
{
    for (const i in courses) {
        if (courses[i].id === courseId) {
            return courses[i].title;
        }
    }
}


