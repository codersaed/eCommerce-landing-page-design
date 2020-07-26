onload = function(){
	setTimeout(logo, 500);
	setTimeout(menu1, 1000);
	setTimeout(menu2, 1500);
	setTimeout(content, 2000);
	setTimeout(imgX, 2300);
	setTimeout(social, 2500);
}
function logo() {
	let h=document.querySelector('.logo h2');
	h.style.opacity = '1';
}
function menu1() {
	let l=document.querySelectorAll('.menu1 li');
	let i;
	for(i=0; i<l.length; i++){
		l[i].style.opacity = '1';
		l[i].style.transform = 'translate(0)';
	}
}
function menu2() {
	let l=document.querySelectorAll('.menu2 li');
	let i;
	for(i=0; i<l.length; i++){
		l[i].style.opacity = '1';
		l[i].style.transform = 'translate(0)';
	};
}
function social() {
	let l=document.querySelectorAll('.social li');
	let i;
	for(i=0; i<l.length; i++){
		l[i].style.opacity = '1';
		l[i].style.transform = 'translate(0)';
	};
}
function content() {
	let he=document.querySelector('.content h2');
		he.style.opacity = '1';
		he.style.transform = 'translate(0)';
	let p=document.querySelector('.content p');
		p.style.opacity = '1';
		p.style.transform = 'translate(0)';
	let b=document.querySelector('.content button');
		b.style.opacity = '1';
		b.style.transform = 'translate(0)';	
}
function imgX() {
	let im=document.querySelector('.imgX ');
	im.style.opacity = '1';
	im.style.transform = 'translate(0)';	
}