// your code here
const url = document.getElementById("url")
function submitting(name,year){
	url.textContent = `https://localhost:8080/?name=${name.value}&year=${year.value}`
}