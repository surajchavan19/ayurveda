import React from 'react'

function Remedies({ data }) {
    const { remedies, openaiResponse } = data;
    console.log(remedies[0].ayurvedic_medicines)
    return (
        <div>
            {remedies[0].ayurvedic_medicines && remedies[0].ayurvedic_medicines.map((remedy) => (
                <div key={remedy.name}>
                    <h1>{remedy.name}</h1>
                    <p>{remedy.description}</p>
                </div>
            ))}

            {openaiResponse}
        </div>
    )
}

export default Remedies
