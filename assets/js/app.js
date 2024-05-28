const cl = console.log


const allLis = [...document.querySelectorAll('.tabHeading li')];
const allTabContent = [...document.querySelectorAll('.tabContent')];


const onTabHeadChange = eve => {
	document.querySelector(".tabHeading li.active").classList.remove("active")
	eve.target.classList.add('active');
	let getId = eve.target.getAttribute('data-id');
	document.querySelector(".tabContent.active").classList.remove('active');
	document.getElementById(getId).classList.add('active');
}

allLis.forEach(li => {
	li.addEventListener('click', onTabHeadChange)
})