let percent = 0;
let rare = "";
let percentText;
let rareText;

export default {
  SERVER_BACKEND: "https://bech.mchub.io:447/",

  // Read More Text Function
  textAppear(dot, more, query) {
    var dots = document.getElementById(dot);
    var moreText = document.getElementById(more);
    // alert(query.matches);
    if (query.matches) {
      dots.style.display = "inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
    }
  },

  // Read More Button Function
  readMore(idBtn, dots, more) {
    var dots = document.getElementById(dots);
    var moreText = document.getElementById(more);
    var btnText = document.getElementById(idBtn);

    if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  },
  //   var query = window.matchMedia("(min-width: 768px)");

  // PERCENTAGE RARITY
  rarity(e) {
    percentText = document.querySelector(".percent");
    rareText = document.querySelector(".rare");
    percent = e.target.getAttribute("percent");
    rare = e.target.getAttribute("rarity");
    percentText.innerHTML = `${percent}%`;
    rareText.innerHTML = `${rare}`;
  },

  rarityHover(rings) {
    rings.forEach((ring) => {
      ring.addEventListener("mouseover", () => {
        for (let i = 0; i < rings.length; i++) {
          const ring = rings[i];
          ring.style.filter =
            "saturate(0%) drop-shadow(0 10px 10px transparent)";
        }
        ring.classList.add("ringhover");
        if (ring.classList.contains("ringhover")) {
          ring.style.filter =
            "saturate(100%) drop-shadow(0 1px 4px rgba(255,255,255,.3))";
        }
      });
      ring.addEventListener("mouseleave", () => {
        percentText.innerHTML = "100%";
        rareText.innerHTML = "Rarity";
        ring.classList.remove("ringhover");
        for (let i = 0; i < rings.length; i++) {
          const ring = rings[i];
          ring.style.filter = "saturate(100%)";
        }
      });
    });
  },
};
