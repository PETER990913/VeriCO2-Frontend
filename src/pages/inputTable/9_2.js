import React from 'react'
import '../../App.scss'
function ProcessingAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Process</th>
                            <th>Mass of sold intermediate product (kg)</th>
                            <th>Emission factor of processing stages (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Candy mixing, cooking, molding,  cooling, wrapping, and packaging</td>
                            <td><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProcessingAverage