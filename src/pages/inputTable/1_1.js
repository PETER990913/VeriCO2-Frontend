import React, { useEffect, useState } from 'react'
import '../../App.scss'
function PurchasedSupplier({onChange}) {
    const [v0, setV0]= useState(200000);
    const [v1, setV1]= useState(0.15);
    const [v2, setV2]= useState(600000);
    const [v3, setV3]= useState(0.1);
    const [v4, setV4]= useState(200000);
    const [v5, setV5]= useState(0);
    const [v6, setV6]= useState(0);
    const [v7, setV7]= useState(0);
    const [v8, setV8]= useState(0);
    const [v9, setV9]= useState(0);

    useEffect(()=>{
        onChange(Number(v0)*Number(v1)+Number(v2)*Number(v3)+Number(v4)*Number(v5)+Number(v6)*Number(v7)+Number(v8)*Number(v9))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9
    ])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased good</th>
                            <th>Supplier</th>
                            <th>Quantities purchased(kg)</th>
                            <th>Surpplier-specific(kgco2/kg)</th>
                        </tr>
                        <tr>
                            <td>Cement</td>
                            <td>Supplier C</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{
                                setV0(e.target.value)
                            }}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{
                                setV1(e.target.value)
                            }}/></td>
                        </tr>
                        <tr>
                            <td>Plaster</td>
                            <td>Supplier D</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{
                                setV2(e.target.value)
                            }}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{
                                setV3(e.target.value)
                            }}/></td>
                        </tr>
                        <tr>
                            <td>Paint</td>
                            <td>Supplier E</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{
                                setV4(e.target.value)
                            }}/></td>
                            <td><input type='text' defaultValue='0.1' className='Input_form' onChange={(e)=>{
                                setV5(e.target.value)
                            }}/></td>
                        </tr>
                        <tr>
                            <td>Timber</td>
                            <td>Supplier F</td>
                            <td><input type='text' defaultValue='100000' className='Input_form' onChange={(e)=>{
                                setV6(e.target.value)
                            }}/></td>
                            <td><input type='text' defaultValue='0.25' className='Input_form' onChange={(e)=>{
                                setV7(e.target.value)
                            }}/></td>
                        </tr>
                        <tr>
                            <td>Concrete</td>
                            <td>Supplier G</td>
                            <td><input type='text' defaultValue='50000' className='Input_form' onChange={(e)=>{
                                setV8(e.target.value)
                            }}/></td>
                            <td><input type='text' defaultValue='0.20' className='Input_form' onChange={(e)=>{
                                setV9(e.target.value)
                            }}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedSupplier