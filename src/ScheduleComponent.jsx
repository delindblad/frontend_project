
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

function ScheduleComponent(props) {

   const currentCourses = props.currentCourses;

    return (
        <Table border-top border-4 border-primary bg-primary-subtle stiped="true" bordered>
            <thead>
            <tr>
                <th className="text-muted bg-primary-subtle" colSpan={6}><h1><span className="badge bg-primary">My schedule</span></h1></th>
            </tr>
            <tr>

            <th className="text-muted bg-primary-subtle"></th>
                <th className="text-muted bg-primary-subtle">Monday</th>
                <th className="text-muted bg-primary-subtle">Tuesday</th>
                <th className="text-muted bg-primary-subtle">Wednesday</th>
                <th className="text-muted bg-primary-subtle">Thursday</th>
                <th className="text-muted bg-primary-subtle">Friday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td >08:00</td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"0800Monday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"0800Tuesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"0800Wednesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"0800Thursday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"0800Friday"}/>
                </td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1000Monday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1000Tuesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1000Wednesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1000Thursday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1000Friday"}/>
                </td>

            </tr>
            <tr>
                <td>13:00</td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1300Monday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1300Tuesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1300Wednesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1300Thursday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1300Friday"}/>
                </td>

            </tr>
            <tr>
                <td>15:00</td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1500Monday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1500Tuesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1500Wednesday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1500Thursday"}/>
                </td>
                <td>
                    <SubjectItem currentCourses={currentCourses} id={"1500Friday"}/>
                </td>

            </tr>
            </tbody>
        </Table>
    );
}


function SubjectItem(props) {
    const [selectedValue, setSelected] = useState("");
    const currentCourses = props.currentCourses;
    //const storedValue = localStorage.getItem(props.id);
    /*if (localStorage.getItem(storedValue) === null) {
        //Set to empty
        setSelected("");
    }
    else {
        //Set to retrieved value
        setSelected(storedValue);

    }*/

    return (
    <Form.Select size="sm" value={""}>

        {
            currentCourses.map(
                (item) => <option className={item} value={item}>{item}</option>
            )
        }
    </Form.Select>
    )
}



/*function ScheduleComponent(props) {
    const {slot0800, slot1000, slot1300, slot1500} = props.schedule;
    return (
        <Table stiped="true" bordered hover variant="dark">
            <thead>
            <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>08:00</td>
                <td>
                    <select>
                        <option value="Ford">Ford</option>
                        <option value="Volvo" selected>Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </td>
                <td>
                    <a href={`/courses/${slot0800.topicByDay[1].courseId}`}>
                        {slot0800.topicByDay[1].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot0800.topicByDay[2].courseId}`}>
                        {slot0800.topicByDay[2].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot0800.topicByDay[3].courseId}`}>
                        {slot0800.topicByDay[3].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot0800.topicByDay[4].courseId}`}>
                        {slot0800.topicByDay[4].title}
                    </a>
                </td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>
                    <a href={`/courses/${slot1000.topicByDay[0].courseId}`}>
                        {slot1000.topicByDay[0].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1000.topicByDay[1].courseId}`}>
                        {slot1000.topicByDay[1].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1000.topicByDay[2].courseId}`}>
                        {slot1000.topicByDay[2].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1000.topicByDay[3].courseId}`}>
                        {slot1000.topicByDay[3].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1000.topicByDay[4].courseId}`}>
                        {slot1000.topicByDay[4].title}
                    </a>
                </td>

            </tr>
            <tr>
                <td>13:00</td>
                <td>
                    <a href={`/courses/${slot1300.topicByDay[0].courseId}`}>
                        {slot1300.topicByDay[0].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1300.topicByDay[1].courseId}`}>
                        {slot1300.topicByDay[1].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1300.topicByDay[2].courseId}`}>
                        {slot1300.topicByDay[2].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1300.topicByDay[3].courseId}`}>
                        {slot1300.topicByDay[3].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1300.topicByDay[4].courseId}`}>
                        {slot1300.topicByDay[4].title}
                    </a>
                </td>


            </tr>
            <tr>
                <td>15:00</td>
                <td>
                    <a href={`/courses/${slot1500.topicByDay[0].courseId}`}>
                        {slot1500.topicByDay[0].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1500.topicByDay[1].courseId}`}>
                        {slot1500.topicByDay[1].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1500.topicByDay[2].courseId}`}>
                        {slot1500.topicByDay[2].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1500.topicByDay[3].courseId}`}>
                        {slot1500.topicByDay[3].title}
                    </a>
                </td>
                <td>
                    <a href={`/courses/${slot1500.topicByDay[4].courseId}`}>
                        {slot1500.topicByDay[4].title}
                    </a>
                </td>

            </tr>
}*/
export default ScheduleComponent;