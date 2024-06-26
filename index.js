function hamburger(){
    console.log("hi");
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".mobile-nav");
    if (hamburger.classList.contains('clicked')){
        hamburger.classList.remove('clicked');
        navbar.classList.add('hidden');
    }else{
        hamburger.classList.add('clicked');
        navbar.classList.remove('hidden');
    }
}