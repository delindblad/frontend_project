
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {useState} from "react";


function ScheduleComponent(props) {

   const currentCourses = props.currentCourses;

    return (
        <Table border-top border-4 border-primary bg-primary-subtle stiped="true" bordered>
            <thead>
            <tr>
                <th className="text-muted bg-primary-subtle" colSpan={6}><h3>My schedule</h3>
                </th>
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
                    <SubjectSelection currentCourses={currentCourses} id={"0800Monday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"0800Tuesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"0800Wednesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"0800Thursday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"0800Friday"}/>
                </td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1000Monday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1000Tuesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1000Wednesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1000Thursday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1000Friday"}/>
                </td>

            </tr>
            <tr>
                <td>13:00</td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1300Monday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1300Tuesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1300Wednesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1300Thursday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1300Friday"}/>
                </td>

            </tr>
            <tr>
                <td>15:00</td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1500Monday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1500Tuesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1500Wednesday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1500Thursday"}/>
                </td>
                <td>
                    <SubjectSelection currentCourses={currentCourses} id={"1500Friday"} />

                </td>

            </tr>
            </tbody>
        </Table>
    );
}


function SubjectSelection(props) {
    const currentCourses = props.currentCourses;
    const storedValue = localStorage.getItem(props.id);

    //console.log(storedValue);
    const [selectedValue, setSelected] = useState("");

    const handleChange = (event) => {
        setSelected(event.target.value)
        localStorage.setItem(props.id,event.target.value)
    }

    return (
    <Form.Select id={props.id} size="sm" value={storedValue} onChange={handleChange}>
        {
            currentCourses.map(
                (item, index) => <option key={index} title={index} className={item} value={item}>{item}</option>
            )
        }
    </Form.Select>
    )
}



export default ScheduleComponent;