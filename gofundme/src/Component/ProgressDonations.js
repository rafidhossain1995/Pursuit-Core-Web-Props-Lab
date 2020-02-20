import React from 'react'

class ProgressDonations extends React.Component {
    state = {handleDonorMName, handleCaption, handleRange, handleSubmit}
        
    handleDonorMName = (e) => {
        this.setState ({
            handleDonorMName: e.target.value
        })
    }
    
    
    
    
    
    
    
    
    
    render() {
        return(

            <div className="bodyDiv"> 

            <form className="donationForm"> 
            
           <label> 
           Name: 
           <input type="text" value="" name={this.handleDonorMName} onChange="{this.handleDonorName}">  
           </input>
           
           </label>


            </form>
            
            </div> 
            
        )
            

    }
}


export default ProgressDonations