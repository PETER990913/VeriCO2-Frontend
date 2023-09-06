import React from 'react'
import '../../App.scss'
function PurchasedSpend() {
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
                        <tr>
                            <th>Purchased raw materials</th>
                            <th> Value ($)</th>
                            <th>Emission factor (kg CO2e/$)</th>
                        </tr>
                        <tr>
                            <td>Plastic (PS)</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Plastic (ABS)</td>
                            <td><input type='text' placeholder='3000' className='Input_form' /></td>
                            <td><input type='text' placeholder='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>PET (film)</td>
                            <td><input type='text' defaultValue='4000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Aluminum</td>
                            <td><input type='text' defaultValue='6000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Steel</td>
                            <td><input type='text' defaultValue='1500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Cyclohexane</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Epoxy resin</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Copper</td>
                            <td><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Glass</td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.4' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedSpend