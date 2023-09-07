import React from 'react'
import '../../App.scss'
function UseDirect() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Total uses over lifetime</th>
                            <th>Number sold</th>
                            <th>Electricity  consumed per use(kWh)</th>
                            <th>Electricity emission factor(KgCO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Washing machine X100</td>
                            <td><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='11500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.3' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Washing machine X200</td>
                            <td><input type='text' defaultValue='1100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1900' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.5' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Iron Y123</td>
                            <td><input type='text' defaultValue='2000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='20000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UseDirect