import React from 'react'
import '../../App.scss'
function UpstreamAsset() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Assets</th>
                            <th>reporting company’s area (m2)</th>
                            <th>building’s total area (m2)</th>
                            <th>building’s occupancy rate</th>
                            <th>Total use(kWh)</th>
                            <th>Emission factor(kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Natural gas</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.75' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Electricity</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.75' className='Input_form' /></td>
                            <td><input type='text' defaultValue='3000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.7' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Fugitive emissions</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.75' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1500' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamAsset