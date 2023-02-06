import { Col, Table } from "reactstrap";


const MembershipTable = () => {
    return (
        <>
            <Col>
                <Table striped borderless>
                    <thead className='table-primary'>
                        <tr>
                            <td colSpan={3}>
                                <h3>Day Rates and Passes</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Adult Day Pass
                            </td>
                            <td>
                                $20
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Students & Youths
                            </td>
                            <td>
                                $15
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Seniors (60+)
                            </td>
                            <td>
                                $12
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Adult 10 Visit Pass
                            </td>
                            <td>
                                $180
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Kids (7 & Under)
                            </td>
                            <td>
                                Free
                            </td>
                        </tr>
                        
                    </tbody>
                </Table>
            </Col>
            <Col>
                <Table striped borderless>
                    <thead className='table-info'>
                        <tr>
                            <td colSpan={3}>
                                <h3>Memberships</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Adults (18-59)
                            </td>
                            <td>
                                $70
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Students
                            </td>
                            <td>
                                $60
                            </td>
                            
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Youths (7-17)
                            </td>
                            <td>
                                $50
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Seniors (60+)
                            </td>
                            <td>
                                $45
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                
                            </th>
                            <td>
                                Kids (7 & Under)
                            </td>
                            <td>
                                Free
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </>
    )
}

export default MembershipTable
