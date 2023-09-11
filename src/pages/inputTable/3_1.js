import React from 'react'
import '../../App.scss'
function UpstreamFuel() {
    
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Supplier</th>
                            <th>Fuel consumed (liters) or refrigerant leakage (kg)</th>
                            <th>Fuel/refrigerant type</th>
                            <th>Emission factor (kg CO2e/ liter for fuels)</th>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' defaultValue="50000" className='Input_form' /></td>
                            <td>Diesel</td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' defaultValue="80000" className='Input_form' /></td>
                            <td>Diesel</td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td><input type='text' defaultValue="90000" className='Input_form' /></td>
                            <td>Diesel</td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td><input type='text' defaultValue="50" className='Input_form' /></td>
                            <td>Refrigerant R410a</td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamFuel