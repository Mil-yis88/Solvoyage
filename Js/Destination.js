let slideActuel = 0;
const totalSlides = 4;
const slider = document.getElementById("slider");

function changerSlide(direction) {
  slideActuel += direction;

  if (slideActuel >= totalSlides) {
    slideActuel = 0;
  } else if (slideActuel < 0) {
    slideActuel = totalSlides - 1;
  }

  const translatex = -slideActuel * 25;
  slider.style.transform = `translatex(${translatex}%)`;

  mettreAJourContenu();
}

function mettreAJourContenu() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, index) => {
    const contenu = slide.querySelector(".slide-content");

    if (index === slideActuel) {
      contenu.classList.remove("hidden");
    } else {
      contenu.classList.add("hidden");
    }
  });
}

function allerAuSlide(index) {
  if (index >= 0 && index < totalSlides) {
    slideActuel = index;
    const translatex = -slideActuel * 25;
    slider.style.transform = `translatex(${translatex}%)`;
    mettreAJourContenu();
  }
}

function demarrerDiapo(intervalle = 5000) {
  return setInterval(() => {
    changerSlide(1);
  }, intervalle);
}

function arreterDiapo(intervalId) {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const message = document.getElementById("message").value.trim();
    const cgv = document.getElementById("invalidCheck2").checked;

    if (!prenom || !nom || !email || !date || !cgv) {
      alert("Veuillez entrer une adresse mail valide.");

      return;
    }

    console.log("Formulaire soumis les données suivantes :");
    console.log({
      prenom,
      nom,
      email,
      date,
      message,
      cgv,
    });

    alert("Merci! Vitre formulaire a été envoyé avec succes");

    form.reset();
  });
});
