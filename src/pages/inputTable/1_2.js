import React, { useEffect, useState } from 'react'
import '../../App.scss'
function PurchasedHybrid(onChange) {
    const [v0, setV0]= useState(5000);
    const [v1, setV1]= useState(0.5);
    const [v2, setV2]= useState(2500);
    const [v3, setV3]= useState(0.2);
    const [v4, setV4]= useState(5000);
    const [v5, setV5]= useState(7.0);
    const [v6, setV6]= useState(2500);
    const [v7, setV7]= useState(5.0);
    const [v8, setV8]= useState(500);
    const [v9, setV9]= useState(2.0);
    const [v10, setV10]= useState(500);
    const [v11, setV11]= useState(1.5);
    const [v12, setV12]= useState(1000);
    const [v13, setV13]= useState(0.01);
    const [v14, setV14]= useState(2500);
    const [v15, setV15]= useState(0.02);
    const [v16, setV16]= useState(800);
    const [v17, setV17]= useState(0.05);
    const [v18, setV18]= useState(200);
    const [v19, setV19]= useState(0.10);
    const [v20, setV20]= useState(100);
    const [v21, setV21]= useState(0.50);

    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16,v17,v18,v19,v20,v21
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td>Electricity</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Natural gas</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Mass purchased (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
                        </tr>
                        <tr>
                            <td>Cotton</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>Polymer</td>
                            <td><input type='text' defaultValue='2500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='5.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical A</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='2.0' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical B</td>
                            <td><input type='text' defaultValue='500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='1.5' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Distance of transport (km)</th>
                            <th>Vehicle type emission factor (kg CO2e/kg/km)</th>
                        </tr>
                        <tr>
                            <td>Cotton</td>
                            <td><input type='text' defaultValue='1000' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.01' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Polymer</td>
                            <td><input type='text' defaultValue='2500' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.02' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical A</td>
                            <td><input type='text' defaultValue='800' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.05' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <td>Chemical B</td>
                            <td><input type='text' defaultValue='200' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.10' className='Input_form' /></td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Amount (kg)</th>
                            <th>Emission factor (kg CO2e/kg of waste sent to landfill)</th>
                        </tr>
                        <tr>
                            <td>Waste sent to landfill</td>
                            <td><input type='text' defaultValue='100' className='Input_form' /></td>
                            <td><input type='text' defaultValue='0.5' className='Input_form' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedHybrid