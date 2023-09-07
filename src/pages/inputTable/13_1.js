import React from 'react'
import '../../App.scss'
function FranchisesSpecific() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Franchisee</th>
                            <th> Scope 1 emissions (kg CO2e)</th>
                            <th>Scope 2 emissions (kg CO2e)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type='text' defaultValue='100000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='20000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type='text' defaultValue='25000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type='text' defaultValue='30000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><input type='text' defaultValue='90000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='30000' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><input type='text' defaultValue='30000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='10000' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchisesSpecific