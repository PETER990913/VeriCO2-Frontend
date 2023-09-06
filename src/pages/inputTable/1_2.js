import React from 'react'
import '../../App.scss'
function PurchasedHybrid() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Electricity</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Natural gas</td>
                            <td><input type='text' defaultValue='2500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Mass purchased (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Cotton</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='7.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Polymer</td>
                            <td><input type='text' defaultValue='2500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical A</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical B</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Distance of transport (km)</th>
                            <th>Vehicle type emission factor (kg CO2e/kg/km)</th>
                        </tr>
                        <tr>
                            <td>Cotton</td>
                            <td><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.01' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Polymer</td>
                            <td><input type='text' defaultValue='2500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.02' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical A</td>
                            <td><input type='text' defaultValue='800' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.05' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical B</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.10' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Amount (kg)</th>
                            <th>Emission factor (kg CO2e/kg of waste sent to landfill)</th>
                        </tr>
                        <tr>
                            <td>Waste sent to landfill</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedHybrid