import React from 'react'
import '../../App.scss'
function InvestmentSpecific() {
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Investment</th>
                            <th>Investment type</th>
                            <th>Scope 1 and scope 2 emissions of investee company in reporting year (tonnes CO2e)</th>
                            <th>Reporting company’s share of equity (percent)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Equity Investment in subsidiary</td>
                            <td><input type='text' defaultValue='120000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='40' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Equity Investment in subsidiary</td>
                            <td><input type='text' defaultValue='200000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='15' className='Input_form' /></td>
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

export default InvestmentSpecific