'use client'

import React,{useState, useEffect} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import BarChart from '../components/BarChart';
import { diseases } from '../data/Diseases';
import Remedies from '../components/Remedies';
import axios from 'axios';

function Dis() {
    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState(null);
    const [result, setResult] = useState("");
    const [remedies, setRemedies] = useState(null);
    const setHandle = (e) => {
        setSelectedOptions(Array.isArray(e) ? e.map((hotel) => hotel.label) : []);
        fetchData();
    };

    const fetchData = async () => {
        console.log(selectedOptions)
        try {
            const response = await axios.post('https://781e-2409-40c0-d-868-55e3-4a8b-a9c2-7db9.ngrok-free.app/user/di',
            {
                body:{ "symptoms": selectedOptions  } // Include the list in the JSON body}
            },
            {
                headers: {"ngrok-skip-browser-warning": "69420"}
            },
            {
                symptoms: selectedOptions  // Include the list in the JSON body
            });
            if (response.data.remedies && response.data.remedies.length === 0) {
                console.log('The list is empty.'); 
            } else {
                setRemedies(response.data.remedies)
                console.log('The list is not empty.');
            }
                
            setResult(response.data.diseases)
            console.log(result)
        } catch (error) {
        //   setError(error);
        }
    };

    // const result = {
    //     "diarrhoea": 0.8092171118953931,
    //     "dental abscess": 0.012189965128852835,
    //     "oral thrush": 0.010640008354297108,
    //     "common_cold": 0.010411184560788458,
    //     "appendicitis": 0.00632607860335066,
    //     "acne": 0.0,
    //     "alcohol_related_liver_disease": 0.0,
    //     "allergy": 0.0
    // }

    
    // const remedies = {
    //     "remedies": [
    //     {
    //         "_id": "65044912d41f205765c072a5",
    //         "name": "blood_in_stool",
    //         "ayurvedic_medicines": [
    //         {
    //             "name": "Aloe Vera (Aloe barbadensis miller)",
    //             "description": "Aloe vera may support digestive health and help with blood in the stool.",
    //             "_id": "65044912d41f205765c072a6"
    //         },
    //         {
    //             "name": "Turmeric (Curcuma longa)",
    //             "description": "Turmeric's anti-inflammatory properties may benefit digestive issues.",
    //             "_id": "65044912d41f205765c072a7"
    //         },
    //         {
    //             "name": "Triphala",
    //             "description": "Triphala is used in Ayurveda to promote digestive function and stool regularity.",
    //             "_id": "65044912d41f205765c072a8"
    //         }
    //         ],
    //         "modern_medicines": [
    //         "Treatment of Underlying Causes (e.g., Gastrointestinal Bleeding)",
    //         "Consultation with a Gastroenterologist"
    //         ],
    //         "__v": 0
    //     }
    //     ],
    //     "openaiResponse": "There are several factors that people may consider when comparing Ayurvedic medicines to modern medical treatments. It is important to note that the effectiveness and appropriateness of a treatment vary depending on the condition and the individual. Here are a few points to consider:\n\n1. Holistic approach: Ayurvedic medicines often focus on a holistic approach to healthcare, considering the overall well-being of an individual. They aim to balance mind, body, and spirit. In contrast, modern treatments often focus on specific symptoms"
    // }

    // useEffect(() => { 
    //     console.log(result)
    //  }, [result]);

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

                {/* <div className='flex justify-center w-1/2'> */}

                {result && <BarChart result={result}/>}
                {remedies && <Remedies data={remedies}/>}
                {/* </div> */}
            </div>
        </div>
    )
}   

export default Dis
