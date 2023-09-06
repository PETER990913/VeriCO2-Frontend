import React from 'react'
import '../../App.scss'
function PurchasedAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased semi-processed components</th>
                            <th>Mass (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Hard drive</td>
                            <td><input type='text' defaultValue='400' className='Input_form' /></td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Integrated circuits</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Liquid Crystal Display (LCD)</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Semiconductors</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='70' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Battery</td>
                            <td><input type='text' defaultValue='1500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Keyboard</td>
                            <td><input type='text' defaultValue='300' className='Input_form' /></td>
                            <td><input type='text' defaultValue='3' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedAverage