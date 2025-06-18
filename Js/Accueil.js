function updateStars(stars , index) {
    stars.forEach((star, i)=> {
       if (i <= index){
        star.classList.add("text-warning");
       }
       else {
        star.classList. remove("text-warning");
       }
    });       
}

document.querySelectorAll("group").forEach(group => {
    const stars = Array.from(group.querySelectorAll("svg"));

    stars.forEach((star, index) => {

        star.addEventListener("click" ,() =>{
            updateStars(stars, index)
        });
    });
});
