import React, {useState, useEffect} from 'react'
import '../../App.scss'
function EndWaste({onChange}) {
    const [v0, setV0]= useState(10000);
    const [v1, setV1]= useState(90);
    const [v2, setV2]= useState(0.3);
    const [v3, setV3]= useState(10);
    const [v4, setV4]= useState(1.0);
    const [v5, setV5]= useState(0);
    const [v6, setV6]= useState(0.0);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)*Number(v2)+Number(v0)*Number(v3)*Number(v4)+Number(v0)*Number(v5)*Number(v6))
    },[
        v0,v1,v2,v3,v4,v5,v6
    ])
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