import React from 'react'
import '../../App.scss'
function EmployeeAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Commute group</th>
                            <th>Percent of total commutes</th>
                            <th>Average one-way  distance (km)</th>
                            <th>Emission factor</th>
                        </tr>
                        <tr>
                            <td>Rail</td>
                            <td><input type='text' defaultValue='50' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Car</td>
                            <td><input type='text' defaultValue='30' className='Input_form' /></td>
                            <td><input type='text' defaultValue='15' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Foot</td>
                            <td><input type='text' defaultValue='15' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Bus</td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeAverage