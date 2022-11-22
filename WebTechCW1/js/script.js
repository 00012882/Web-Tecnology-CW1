const lis = document.querySelectorAll('.faq-page');
for(let li of lis){
    li.addEventListener('click', function(){
        if(li.getAttribute('class') == 'faq-page active'){
            li.setAttribute('class', 'faq-page')
        } else{
            lis.forEach(i => i.setAttribute('class', 'faq-page'))
            li.setAttribute('class', "faq-page active");
        }
    });
}

let slideIndex = 0;
slideShow(); //creating a function which will change slides

function slideShow() {
    let i;
        let slides = document.getElementsByClassName("Slides"); // Connecting with the class "Slides"
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // making previous image display: none;
  } 
    slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
         slides[slideIndex-1].style.display = "block"; // making an active image display: block;
             setTimeout(slideShow, 2000); // the image will be changed every 2 seconds
}
