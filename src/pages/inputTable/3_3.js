import React from 'react'
import '../../App.scss'
function UpstreamSpend() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Supplier</th>
                            <th>Amount spent ($) </th>
                            <th>Transport mode or vehicle type </th>
                            <th>EEIO emission factor (kg CO2e/$)</th>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' defaultValue="20000" className='Input_form' /></td>
                            <td>Truck (rigid, 3.5-7.5t)</td>
                            <td><input type='text' defaultValue='0.04' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' defaultValue="30000" className='Input_form' /></td>
                            <td>Air (long haul) </td>
                            <td><input type='text' defaultValue='0.15' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td><input type='text' defaultValue="40000" className='Input_form' /></td>
                            <td>Container 2,000–2,999 TEU</td>
                            <td><input type='text' defaultValue='0.05' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamSpend