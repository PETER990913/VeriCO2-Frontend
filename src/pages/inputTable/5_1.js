import React from 'react'
import '../../App.scss'
function BusinessFuel() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th>Car type</th>
                            <th>Average  employees  per vehicle</th>
                            <th>Location</th>
                            <th>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        <tr>
                            <td>Group 1</td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td>Hybrid</td>
                            <td><input type='text' defaultValue='2' className='Input_form' /></td>
                            <td>United States</td>
                            <td><input type='text' defaultValue="50" className='Input_form' /></td>
                            <td><input type='text' defaultValue="1" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Group 2</td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td>Average gasoline car</td>
                            <td><input type='text' defaultValue='2' className='Input_form' /></td>
                            <td>Australia</td>
                            <td><input type='text' defaultValue="200" className='Input_form' /></td>
                            <td><input type='text' defaultValue="2" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Group 3</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td>Hybrid</td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                            <td>United States</td>
                            <td><input type='text' defaultValue="100" className='Input_form' /></td>
                            <td><input type='text' defaultValue="4" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th colSpan={2}>Flight type</th>
                            <th colSpan={2}>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        <tr>
                            <td>Group 1</td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td colSpan={2}>Long haul</td>
                            <td colSpan={2}><input type='text' defaultValue="10000" className='Input_form' /></td>
                            <td><input type='text' defaultValue="5" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Group 2</td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td colSpan={2}>Short haul</td>
                            <td colSpan={2}><input type='text' defaultValue="15000" className='Input_form' /></td>
                            <td><input type='text' defaultValue="6" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Group 3</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td colSpan={2}>Long haul</td>
                            <td colSpan={2}><input type='text' defaultValue="12000" className='Input_form' /></td>
                            <td><input type='text' defaultValue="5" className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BusinessFuel