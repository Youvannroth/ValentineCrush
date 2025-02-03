const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', (e) => {
  e.preventDefault(); 
  envelope.classList.add('open'); 

  
  setTimeout(() => {
    window.location.href = envelope.getAttribute('href'); 
  }, 1000); 
});