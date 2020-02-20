import React from 'react'
// import ProgressDonations from "./ProgressDonations.js"

const FormDisplay = ({ donorName, caption, donation}) => {
    return(
        <div>
           <h3> {donorName} donated ${donation}</h3>
            <h3> {caption} </h3>
        </div>
    )
}

export default FormDisplay