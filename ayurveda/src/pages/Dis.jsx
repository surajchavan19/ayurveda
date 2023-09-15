'use client'

import React,{useState, useEffect} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import BarChart from '../components/BarChart';
import {diseases } from '../data/Diseases';


function Dis() {
    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState(null);

    const setHandle = (e) => {
        setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
    };

    const result = {
        "diarrhoea": 0.8092171118953931,
        "dental abscess": 0.012189965128852835,
        "oral thrush": 0.010640008354297108,
        "common_cold": 0.010411184560788458,
        "appendicitis": 0.00632607860335066,
        "acne": 0.0,
        "alcohol_related_liver_disease": 0.0,
        "allergy": 0.0
    }

    return (
        <div>
            <div className="d-flex flex-column mx-auto container py-8 w-50 items-center">
                <h1>Disease Prediction</h1>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[diseases[4], diseases[5]]}
                    isMulti
                    options={diseases}
                    onChange={setHandle}
                />
                <div>{selectedOptions}</div>

                <div className='flex justify-center w-1/2'>

                <BarChart result={result}/>
                </div>
            </div>
        </div>
    )
}   

export default Dis
