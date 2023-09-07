import React from 'react'
import '../../App.scss'
function Downstream() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Factory</th>
                            <th>Combined scope 1 and scope 2 emissions  (kg CO2e)</th>
                            <th>Floor space (m2)</th>
                        </tr>
                        <tr>
                            <td>Factory 1</td>
                            <td rowSpan={2}><input type='text' defaultValue='9000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Factory 2</td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Downstream