import React, {useState, useEffect} from 'react'
import '../../App.scss'
function FranchisesSpecific({onChange}) {
    const [v0, setV0]= useState(200000);
    const [v1, setV1]= useState(0.15);
    const [v2, setV2]= useState(600000);
    const [v3, setV3]= useState(0.1);
    const [v4, setV4]= useState(200000);
    const [v5, setV5]= useState(0.1);
    const [v6, setV6]= useState(100000);
    const [v7, setV7]= useState(0.25);
    const [v8, setV8]= useState(50000);
    const [v9, setV9]= useState(0.20);

    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9
    ])
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