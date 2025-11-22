const donorList = document.getElementById('donorList');
const donateBtn = document.getElementById('donateBtn');
const donationAmount = document.getElementById('donationAmount');

donateBtn.addEventListener('click', () => {
  const amount = donationAmount.value;
  if(amount && amount >= 1){
    const donorName = prompt("Enter your name for the live donor list:");
    if(donorName){
      const li = document.createElement('li');
      li.textContent = `${donorName} donated $${amount}`;
      donorList.prepend(li);

      alert(`🎉 Thank you ${donorName} for donating $${amount}! Happy Christmas!`);
      donationAmount.value = '';
    }
  } else {
    alert('Please enter a valid donation amount (minimum $1).');
  }
});