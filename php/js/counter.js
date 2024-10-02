
const counters=document.querySelectorAll(".count-text");
const speed=1000;
counters.forEach(counter =>{
	const updateCount= ()=>{
		const target=+counter.getAttribute('data-stop');
		
		const count=+counter.innerText;
		const inc=Math.ceil(target / speed);
		if(count < target){
			counter.innerText=count + inc;
			setTimeout(updateCount,1);

		}
		else{
			count.innerText=target
		}
	}
	updateCount();
});