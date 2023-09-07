import React from 'react'
import '../../App.scss'
function FranchisesAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Franchisee</th>
                            <th>Type</th>
                            <th>Shop area (m2) </th>
                            <th>Emission factor (kg CO2e/m2/year)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Food outlet</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='30000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Food outlet</td>
                            <td><input type='text' defaultValue='150' className='Input_form' /></td>
                            <td><input type='text' defaultValue='30000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' defaultValue='400' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' defaultValue='700' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Clothing outlet</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchisesAverage