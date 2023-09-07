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
                            <th>Mass of waste after consumer use (kg)</th>
                            <th>Waste treatment</th>
                            <th>Proportion of waste produced (percent)</th>
                            <th>Emission factor of waste treatment method (kg CO2e/kg )</th>
                        </tr>
                        <tr>
                            <td rowSpan={3}><input type='text' defaultValue='10000' className='Input_form' /></td>
                            <td>Landfill</td>
                            <td><input type='text' defaultValue='90' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.3' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Incinerated</td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Recycled</td>
                            <td><input type='text' defaultValue='0' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.0' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EndWaste