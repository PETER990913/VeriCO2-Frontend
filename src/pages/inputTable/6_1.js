import React from 'react'
import '../../App.scss'
function EmployeeDistance() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Employee</th>
                            <th> Rail commute (times per week)</th>
                            <th>One way distance by rail(km)</th>
                            <th>Rail emission factor</th>
                            <th>Car commute </th>
                            <th>Car emission factor</th>
                            <th>One way distance by car</th>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0' className='Input_form' /></td>
                            <td><input type='text' defaultValue="0.2" className='Input_form' /></td>
                            <td><input type='text' defaultValue="N/A" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' defaultValue='4' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1' className='Input_form' /></td>
                            <td><input type='text' defaultValue="0.2" className='Input_form' /></td>
                            <td><input type='text' defaultValue="15" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' defaultValue='0' className='Input_form' /></td>
                            <td><input type='text' defaultValue='N/A' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue="0.2" className='Input_form' /></td>
                            <td><input type='text' defaultValue="20" className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeDistance