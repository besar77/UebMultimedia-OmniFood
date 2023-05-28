/*Automatic year for footer Copyright*/
/*///////////////////////////////////////////////////*/
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/*Mobile navigation works*/
/*///////////////////////////////////////////////////*/

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Sticky Navigation
////////////////////////////////////////////////////////

const headingSectionEl = document.querySelector(".heading-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //null means viewport , domethon me observe prej viewport
    //qdohere root null e perdorim
    root: null,

    //0 domethon e kemi pasi deshirojme me e aktivizu eventin kur section hero largohet nga viewport
    threshold: 0,
  }
);
obs.observe(headingSectionEl);
