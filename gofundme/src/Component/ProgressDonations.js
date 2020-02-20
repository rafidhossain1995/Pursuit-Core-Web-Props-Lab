import React , {Component} from 'react'
import FormDisplay from "./FormDisplay.js"
import DonorList from "./DonorList.js"

class ProgressDonations extends Component {
    
    state = { donations:[
        {
        donorName: " ",
        caption: " ",
        amount:" ",
        }
    ],
        formCompleted: false,
        donorList: []
    }
    
    // handleCaption, handleRange, handleSubmit <-- save for later
        
    handleDonorName = (e) => {
        this.setState ({
            donorName: e.target.value
        })
    }

    handleCaptonComment = (e) =>{
        this.setState({
            caption: e.target.value
        })
    }
    handleDonationAmount = (e)=>{
        this.setState({
            amount: e.target.value
        })
    }
    
   handleSubmit = ()=>{
       const { formCompleted } = this.state
       if(formCompleted=== false){
           this.setState({
               formCompleted:true
           })
       }
   }

   handleDonateButton = (displayName) =>{
       let donors = this.state.donations.find(person=>{
           return person.donorName && person.caption && person.amount
       })
       if(donors){
           this.setState((prevState)=>{
               return{
                   donorList: [...prevState.donorList, donors]
               }
           })
       }
       
   }
   
    
    
    render() {
        // let {donorName} = this.state
        let donationPeople = this.state.donations.map((donor, i)=>{
            return <FormDisplay key = {donor.donorName}
            name = {donor.donorName}
            comment = {donor.caption}
            price = {donor.amount}/>
        })
        return(

            <div className="bodyDiv"> 

            <form className="donationForm" onSubmit = {this.handleDonateButton}> 
            
           <label> 
           Name: 
           <input type="text" name={this.state.donations.donorName} onChange="{this.handleDonorName}"/>      
           </label>
            <br/>
           <label>
               Caption:
               <input type="text" caption={this.state.donations.caption} onChange="{this.handleCaptionComment}"/>
           </label>
           <br/>
           <label for ="donate">Amount To Donate</label>
           <input type="text" id="vol" name="vol" step="5" min="5" max="100" list="data"  onChange="{this.handleDonationAmount}"/>
           <input type="submit"/>    
           
           {/* <div>
           list of donors
           <DonorList donations = {this.state.donorList}/>
           </div> */}
           


            </form>
            
            </div> 
            
        )
            

    }
}


export default ProgressDonations