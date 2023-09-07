import React from 'react'
import '../../App.scss'
function InvestmentAverage() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Investee  company</th>
                            <th>Revenue of investee company ($)</th>
                            <th>Reporting  company’s share of  equity (percent)</th>
                            <th>Investee company’s sector(s) of operation</th>
                            <th>Investee company’s revenue in sector (percent)</th>
                            <th>Scope 1 and scope 2 emission factor  of sector   (kg CO2e/$ revenue)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><input type='text' defaultValue='3000000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5' className='Input_form' /></td>
                            <td>Telecommunication</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.6' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><input type='text' defaultValue='7500000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='15' className='Input_form' /></td>
                            <td>Pharmaceutical</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><input type='text' defaultValue='1150000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='20' className='Input_form' /></td>
                            <td>Energy generation</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='3.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>4</td>
                            <td rowSpan={2}><input type='text' defaultValue='5500000' className='Input_form' /></td>
                            <td rowSpan={2}><input type='text' defaultValue='10' className='Input_form' /></td>
                            <td>Food and beverage</td>
                            <td><input type='text' defaultValue='60' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Apparel</td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentAverage