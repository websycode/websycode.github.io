var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const header = document.querySelector("header");
const home = document.querySelector(".home");

const intersectionOptions = {
  rootMargin: "-400px 0px 0px 0px"
};

function closeIfOpen() {
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle.checked) {
    navToggle.checked = false;
  }
}

const homeObserver = new IntersectionObserver((entries, homeObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, intersectionOptions);

homeObserver.observe(home);

const teamMembers = [
  {
    image: "./images/team_members/pranav_shukla.webp",
    name: "Pranav Shukla",
    position: "NICK FURY"
  },
  {
    image: "./images/team_members/parth_mistry.webp",
    name: "Parth Mistry",
    position: "CAPTAIN AMERICA"
  },
  {
    image: "./images/team_members/gopal_ganghar.webp",
    name: "Gopal Ghanghar",
    position: "THOR"
  },
  {
    image: "./images/team_members/arpan_shah.webp",
    name: "Arpan Shah",
    position: "ANT-MAN"
  },
  {
    image: "./images/team_members/parth_vishvajit.webp",
    name: "Parth Vishvajit",
    position: "DR. STRANGE"
  },
  {
    image: "./images/team_members/parth_pandya.webp",
    name: "Parth Pandya",
    position: "ROCKET"
  },
  {
    image: "./images/team_members/akash_thakkar.webp",
    name: "Akash Dave",
    position: "VISION"
  },
  {
    image: "./images/team_members/nikhil_tuck.webp",
    name: "Nikhil Tuck",
    position: "IRON MAN"
  },
  {
    image: "./images/team_members/navin_gelot.webp",
    name: "Navin Gelot",
    position: "BLACK PANTHER"
  },
  {
    image: "./images/team_members/sarita_mall.webp",
    name: "Sarita Mall",
    position: "SHURI"
  },
  {
    image: "./images/team_members/urvashi_vaghela.webp",
    name: "Urvashi Vegda",
    position: "CAPTAIN MARVEL"
  },
  {
    image: "./images/team_members/ketul_padariya.webp",
    name: "Ketul Padariya",
    position: "HULK"
  },
  {
    image: "./images/team_members/pradip_sinh.webp",
    name: "Pradip Sodha",
    position: "SPIDERMAN"
  },
  {
    image: "./images/team_members/krunal_prajapati.webp",
    name: "Krunal Prajapati",
    position: "JARVIS"
  },
  {
    image: "./images/team_members/dashrath_gelot.webp",
    name: "Dashrath Gelot",
    position: "WOLVERINE"
  },

  {
    image: "./images/team_members/tamanna_nagar.webp",
    name: "Tamanna Nagar",
    position: "WHITE TIGER"
  }
];

const teamDiv = document.querySelector(".swiper-wrapper");
let avengerCount = 17;
function createMemberCard(member) {
  console.log("avenger#" + avengerCount);
  return `<div class="swiper-slide">
        <div class="member-card" id = ${"avenger#" + avengerCount++}>
            <span class="hero"><img src="${member.image}"/></span>
            <span class="hero-details">
            <span class="hero-title">${member.name}</span>
            <span class="hero-position">${member.position}</span> 
            </span>
        </div>
    </div>`;
}

const memberCards = teamMembers
  .map(member => createMemberCard(member))
  .join(" ");
teamDiv.innerHTML = memberCards;

var teamSwiper = new Swiper(".team-members", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
});

// teamSwiper.on("slideChange", e => {
//   // console.log(teamSwiper.slides);
//   // const slideImg = document
//   //   .getElementById("avenger#" + teamSwiper.activeIndex)
//   //   .getElementsByClassName("hero-details")[0];

//   let slideImg = document.querySelector(".swiper-slide-active img");
//   slideImg.classList.add("active");
//   // console.log(teamSwiper.activeIndex);
//   console.log(slideImg);
// });

let slidePerViewResponsive = isMobile ? 1 : 3;
var clientSwiper = new Swiper(".clients", {
  slidesPerView: slidePerViewResponsive,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

var clientsSwipperDiv = document.getElementById("clients_swiper");
var str = '<div class="swiper-slide">noter 1</div>';
