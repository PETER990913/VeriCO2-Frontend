import React, {useState, useEffect} from 'react'
import '../../App.scss'
function WasteWaste({onChange}) {
    const [v0, setV0]= useState(200000);
    const [v1, setV1]= useState(0.15);
    const [v2, setV2]= useState(600000);
    const [v3, setV3]= useState(0.1);
    const [v4, setV4]= useState(200000);
    const [v5, setV5]= useState(0.1);
    const [v6, setV6]= useState(100000);
    const [v7, setV7]= useState(0.25);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7))
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