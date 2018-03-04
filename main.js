function scrollDown(element){

    document.querySelector(element).scrollIntoView(); 
}

function selectElement(element){

	return document.querySelector(element);
}


const about = selectElement('#about');

about.addEventListener('click',() => {

scrollDown('.about');

});


const contact = selectElement('#contact');

contact.addEventListener('click',() => {

scrollDown('.contact');

});

const portfolio = selectElement('#portfolio');

portfolio.addEventListener('click',() => {

scrollDown('.portfolio');

});
