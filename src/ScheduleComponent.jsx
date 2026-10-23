
import Table from 'react-bootstrap/Table';

function ScheduleComponent(props) {
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
                    <a href={`/courses/${slot0800.topicByDay[0].courseId}`}>
                    {slot0800.topicByDay[0].title}
                    </a>
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
            </tbody>
        </Table>
    );
}

export default ScheduleComponent;