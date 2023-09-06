import React from 'react'
import '../../App.scss'
function WasteAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Total waste produced (tonnes)</th>
                            <th>Waste treatment</th>
                            <th> Proportion (percent)</th>
                            <th>Average emission factor  of waste treatment method  (kg CO2e/tonne)</th>
                        </tr>
                        <tr>
                            <td rowSpan={5}><input type='text' defaultValue="40" className='Input_form' /></td>
                            <td>Landfill</td>
                            <td><input type='text' defaultValue='25' className='Input_form' /></td>
                            <td><input type='text' defaultValue="300" className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td> Incinerated with energy recovery </td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td> Recycled </td>
                            <td><input type='text' defaultValue='30' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td> Recycled </td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td> Composted </td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td><input type='text' defaultValue='30' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WasteAverage