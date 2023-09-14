import React, {useState, useEffect} from 'react'
import '../../App.scss'
function InvestmentSpecific({onChange}) {
    const [v0, setV0]= useState(100);
    const [v1, setV1]= useState(30000);
    const [v2, setV2]= useState(150);
    const [v3, setV3]= useState(30000);
    const [v4, setV4]= useState(400);
    const [v5, setV5]= useState(10000);
    const [v6, setV6]= useState(700);
    const [v7, setV7]= useState(10000);

    useEffect(()=>{
        onChange((Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7))/100)
    },[
        v0,v1,v2,v3,v4,v5,v6,v7
    ])
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
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
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
                            <td>Equity investment in joint venture</td>
                            <td><input type='text' defaultValue='1600000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='25' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Equity investment in joint venture</td>
                            <td><input type='text' defaultValue='60000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='25' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentSpecific