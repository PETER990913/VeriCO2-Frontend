import React from 'react'
import '../../App.scss'
function ProcessingSite() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Fuel and electricity consumed</th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Natural gas</td>
                            <td><input type='text' defaultValue='3500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Electricity</td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th>Waste</th>
                            <th>Amount (kg) </th>
                            <th> Emission factor (kg CO2e/kg waste)</th>
                        </tr>
                        <tr>
                            <td>Waste products</td>
                            <td><input type='text' defaultValue='50' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProcessingSite