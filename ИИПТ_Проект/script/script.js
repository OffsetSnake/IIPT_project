let reg_btn = document.getElementById('reg');
let reg_w = document.getElementById("reg_w");

reg_btn.addEventListener('click', function(event){
	event.preventDefault()
	reg_w.style.display = 'block';
});