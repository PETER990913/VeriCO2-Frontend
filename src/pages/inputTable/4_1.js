import React from 'react'
import '../../App.scss'
function WasteWaste() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Waste type</th>
                            <th>Waste  produced</th>
                            <th>Waste treatment</th>
                            <th>Waste type and waste treatment specific emission factor*</th>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td><input type='text' defaultValue="2000" className='Input_form' /></td>
                            <td>Landfill</td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td><input type='text' defaultValue="5000" className='Input_form' /></td>
                            <td> Incinerated with energy recovery </td>
                            <td><input type='text' defaultValue='2' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td><input type='text' defaultValue="4000" className='Input_form' /></td>
                            <td> Recycled </td>
                            <td><input type='text' defaultValue='10' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td><input type='text' defaultValue="5000" className='Input_form' /></td>
                            <td> Wastewater </td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WasteWaste