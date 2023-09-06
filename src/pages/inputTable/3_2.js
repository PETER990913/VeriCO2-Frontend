import React from 'react'
import '../../App.scss'
function UpstreamDistance() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Supplier</th>
                            <th>Mass of transported goods (tonnes)</th>
                            <th>Distance transported (km)</th>
                            <th>Transport mode or vehicle type</th>
                            <th>Emission factor(kg CO2e/TEU-km)</th>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' defaultValue="2" className='Input_form' /></td>
                            <td><input type='text' defaultValue="2000" className='Input_form' /></td>
                            <td>Truck (rigid, 3.5-7.5t)</td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' defaultValue="1" className='Input_form' /></td>
                            <td><input type='text' defaultValue="3000" className='Input_form' /></td>
                            <td>Air (long haul) </td>
                            <td><input type='text' defaultValue='1.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td><input type='text' defaultValue="6" className='Input_form' /></td>
                            <td><input type='text' defaultValue="4000" className='Input_form' /></td>
                            <td>Container 2,000–2,999 TEU</td>
                            <td><input type='text' defaultValue='0.05' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamDistance