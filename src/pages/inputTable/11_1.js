import React from 'react'
import '../../App.scss'
function EndWaste() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Usage  temperature setting</th>
                            <th>Lifetime uses per product (washes)</th>
                            <th>Consumers using temperature setting (percent)</th>
                            <th>Products sold</th>
                            <th>Electricity consumed per use (KWh)</th>
                            <th>Emission factor (KgCO2e/KWh)</th>
                        </tr>
                        <tr>
                            <td>30°C cotton wash</td>
                            <td rowSpan={3}><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td rowSpan={3}><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.40' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>40°C cotton wash</td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.50' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>90°C cotton wash</td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.20' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EndWaste