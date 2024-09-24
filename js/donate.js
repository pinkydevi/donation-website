// Attach event listener to the "Close" button once
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('donation-modal').classList.add('hidden');
});


document.getElementById('noakhali-button').addEventListener('click',function(event){
    event.preventDefault();
    const noakhaliaddMoney = getInputFieldById('noakhali-donate-input');
    

    if(!isNaN(noakhaliaddMoney) && noakhaliaddMoney > 0)
    {
        const balance = getTextFieldById('noakhali-balance');
        const newBalance = balance + noakhaliaddMoney;
        document.getElementById('noakhali-balance').innerText = `${newBalance} BDT`;

       

        // Show modal with donation success message
    document.getElementById('modal-donation-text').innerText = `${noakhaliaddMoney} BDT has been successfully donated. Thank you!`;
    document.getElementById('donation-modal').classList.remove('hidden');

     // Add to Transcation history
     const h1 = document.createElement('h1');
     h1.innerText = `${noakhaliaddMoney} Taka is donated for Famine in 2024 at Bangladesh`;
     console.log(h1);
     document.getElementById('transcation-container').appendChild(h1);

      
    }

  
    else{
        alert('Failed To add money');
    }

 


});

// Feni Section

// Attach event listener to the "Close" button once
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('donation-modal').classList.add('hidden');
});

document.getElementById('feni-button').addEventListener('click',function(event){
    event.preventDefault();
    const feniAddMoney = getInputFieldById('feni-donate-input');
    

    if(!isNaN(feniAddMoney) && feniAddMoney > 0)
    {
        const balance = getTextFieldById('feni-balance');
        const newBalance = balance + feniAddMoney;
        document.getElementById('feni-balance').innerText = `${newBalance} BDT`;

         // Show modal with donation success message
    document.getElementById('modal-donation-text').innerText = `${feniAddMoney} BDT has been successfully donated. Thank you!`;
    document.getElementById('donation-modal').classList.remove('hidden');

         // Add to Transcation history
         const h1 = document.createElement('h1');
         h1.innerText = `${feniAddMoney} Taka is donated for Famine in 2024 at Bangladesh`;
         console.log(h1);
         document.getElementById('transcation-container').appendChild(h1);
    }
    else{
        alert('Failed To add money');
    }


});

 
   





// Quata Movement Section

// Attach event listener to the "Close" button once
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('donation-modal').classList.add('hidden');
});

document.getElementById('quata-button').addEventListener('click',function(event){
    event.preventDefault();
    const quataAddMoney = getInputFieldById('quata-donate-input');
    

    if(!isNaN(quataAddMoney) && quataAddMoney > 0)
    {
        const balance = getTextFieldById('quata-balance');
        const newBalance = balance + quataAddMoney;
        document.getElementById('quata-balance').innerText = `${newBalance} BDT`;

        
         // Show modal with donation success message
    document.getElementById('modal-donation-text').innerText = `${quataAddMoney} BDT has been successfully donated. Thank you!`;
    document.getElementById('donation-modal').classList.remove('hidden');

       // Add to Transcation history
       const h1 = document.createElement('h1');
       h1.innerText = `${quataAddMoney} Taka is donated for Famine in 2024 at Bangladesh`;
       console.log(h1);
       document.getElementById('transcation-container').appendChild(h1);
    }

      


    
    else{
        alert('Failed To add money');
    }

    // Close the modal when the "Close" button is clicked
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('donation-modal').classList.add('hidden');
});

 
   


});


function showSectionById(id)
{

    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('transition-form').classList.add('hidden');
    // document.getElementById('donation-form').classList.add('hidden');
    // document.getElementById('transition-form').classList.add('hidden');
    
    // remove the hidden
    document.getElementById(id).classList.remove('hidden');
}



