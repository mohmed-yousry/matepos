// public all pages
// تسجيل السيرفس ووركر
// if(navigator.serviceWorker) {
//     navigator.serviceWorker.register("../dist/sw.js") ;
  
//   }
  // تسجيل السيرفس ووركر
  const navLinks = document.querySelector("header .links ");
  const overlayHeader = document.querySelector("header .overlay ");
  const togle = document.querySelector("header .togle ");
  const closeNav = document.querySelector("header .icon-close");
  
  
  
  // handle leng test 
  
  let language = document.querySelector(".language") ; 
  language.addEventListener("click" , () => {
  if(document.querySelector("html").getAttribute("dir") == "rtl") {
      localStorage.setItem("lang" , "en") ; 
      localStorage.setItem("dir" , "ltr") ; 
    } else {
      localStorage.setItem("lang" , "ar") ; 
      localStorage.setItem("dir" , "rtl") ; 
       }
  window.location.reload() ; 
  })
  
  
  
  // handle leng test 
  
  // onload function
  const footer = document.querySelector("footer") ; 
  const sochilMadieIcons = document.querySelector(".sochilaside") ; 
  
  window.addEventListener("scroll" , () => {
  
      if(scrollY >= footer.offsetTop  - 650 ) {
        let num = (scrollY - (footer.offsetTop  - 650)) - 60 ;  ;
        sochilMadieIcons.style.top = `calc(20% + ${-num}px)` ;
      } else {
        sochilMadieIcons.style.top = `calc(20% + 97px)` ;
  
      }
  
  
  
  
  })
  
  window.onload = () =>{
    // test 
    if(localStorage.getItem("lang") == "en" ) {
      let leng = document.querySelector(".language").innerHTML ; 
      document.querySelector(".language").innerHTML = leng.replace("en" , "ar")
    } else {
      let leng = document.querySelector(".language").innerHTML ; 
      document.querySelector(".language").innerHTML = leng.replace("ar" , "en")
  
    }
  
  
  
  }
  // onload function
  
  
  togle.addEventListener("click", () => {
    overlayHeader.classList.remove("hidden");
    if (document.querySelector("html").getAttribute("dir") == "rtl") {
      navLinks.style.left = "0px";
    } else {
      navLinks.style.right = "0px";
    }
  });
  
  function handleCloseNavMobile() {
    overlayHeader.classList.add("hidden");
    if (document.querySelector("html").getAttribute("dir") == "rtl") {
      navLinks.style.left = "-200%";
    } else {
      navLinks.style.right = "-200%";
    }
  }
  
  closeNav.addEventListener("click", handleCloseNavMobile);
  
  overlayHeader.addEventListener("click", handleCloseNavMobile);

  // handle service dropDown 
  const serviceBtn = document.querySelector(".services-link") ; 
  const dropdownNavMobile = document.querySelector(".services-link .drop-down") ; 
  const heightDropdownNavMobile = dropdownNavMobile.scrollHeight ; 
  serviceBtn.addEventListener("click" , (btn) => {
    
    if(dropdownNavMobile.clientHeight < heightDropdownNavMobile ) {
      dropdownNavMobile.style.height = `${heightDropdownNavMobile}px`
    } else {
      dropdownNavMobile.style.height = `0px`
    }
  })
  // handle service dropDown 
  
  // console.log()
  
  
  // lazy loead
  const imgElements = document.querySelectorAll("[data-src]");
  const lazyLoadingImage = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img");
        observer.unobserve(entry.target);
      });
    });
  };
  const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
    threshold: 0.9,
  });
  imgElements.forEach((img) => lazyLoadingObserver.observe(img));
  // lazy loead
  
  
  
  // handle grid and colum Btns 
  
  function handleConvertGrid () {
    const filterBtn  = Array.from(document.querySelectorAll(".filter .showoption")) ; 
  let allCards = Array.from(document.querySelectorAll(".cards .card")) ; 
  
  let paringCards = document.querySelector(".cards")
  filterBtn.forEach(e=> {
      e.addEventListener("click" , (tr) => {
          filterBtn.forEach(z=> {
              z.classList.remove("text-mainColor")
  
          })
          tr.target.classList.add("text-mainColor")
          paringCards.classList.add("grid" , "grid-cols-12" , "gap-6") ; 
          if(tr.target.getAttribute("gender") == "grid") {
              allCards.forEach(c => {
                  c.className = `col-span-4 maxmd:col-span-6 maxsm:col-span-12 bg-white pb-6` ; 
                  c.children[0].classList.add("w-full")
                  c.children[1].classList.remove("w-[70%]" )
              })
          } else {
              console.log()
              paringCards.classList.remove("grid" , "grid-cols-12" , "gap-6")
              allCards.forEach(c => {
                  c.className = `flex items-center mb-4 bg-white maxmd:flex-col maxmd:pb-6` ; 
                  c.children[0].classList.remove("w-full" )
                  c.children[0].classList.add("maxmd:w-full")
                  c.children[1].classList.add("w-[70%]" , "maxmd:w-full"  )
  
              })
          }
      })
  })
  }
  
  // handle grid and colum Btns 
  
  // swiper nav
  let swiperNav = new Swiper(".swiperNav", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  // swiper nav




  // public all pages

  // blog pages

let allCards = Array.from(document.querySelectorAll(".bloger .right .card")) ;
allCards.forEach(e=> {
    e.addEventListener("click"  , (tr) => {
        console.log(e.getAttribute("href"))
        window.location.href = e.getAttribute("href") ;
    })
})


  // blog pages



  // index

  // handle content overlay 
let container = document.querySelector(".container");  
let allOverlayContent = Array.from(document.querySelectorAll(".mySwiper3 .content"))

  window.onresize = () => {
    // console.log()
    let calc = (window.innerWidth - container.clientWidth) / 2 ; 
    if(window.innerWidth > 640) {
      allOverlayContent.forEach(e=> {
        e.style.right = `${calc}px`
      })
    } else {
      allOverlayContent.forEach(e=> {
        e.style.right = `0px`
      })
    }
  }
// handle content overlay 

let mySwiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// swiper.changeLanguageDirection("ltr")


let swiper2 = new Swiper(".mySwiper2", {
  // slidesPerView: 2,
  // spaceBetween: 10,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "col",
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,

    },
  },

        grid: {
          rows: 2,
          fill: "col",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
});

let swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

 

});
swiper3.init(3)
// swiper3.changeLanguageDirection("ltr")
let swiper11 = new Swiper(".mySwiper66", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay : true ,
  loop : true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiper9 = new Swiper(".mySwiperTeam", {
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});

// handle videos 
const allVideos = Array.from(document.querySelectorAll(".video .video-container .part"))
allVideos.forEach(e=> handleIfream(e))
// handle videos 

function handleIfream (item) {
item.children[1].children[1].addEventListener("click" , (tr) => {
  item.children[0].remove()
  item.children[0].remove()
  let ifream = document.createElement("iframe"); 
  ifream.style.cssText = "width : 100% ; height : 100% ; aspect-ratio: 16 / 9; border-radius: 8px;" ; 
  let src = item.getAttribute("src").replace("watch?v=" , "embed/")
  ifream.src = src ;
  item.appendChild(ifream)
})
}


// handle incress number 
let nums = document.querySelectorAll(".cards .number");
let sectionNums = document.querySelector(".numbers");

let started = false; // Function Started ? No

if(window.location.href.includes("index")) {
  window.onscroll = function () {
    if (window.scrollY >= sectionNums.offsetTop - 600) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// handle incress number 

  // index


  // salary 

  let swiperSalary = new Swiper(".swiperSalary", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true , 
    
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });



  // salary 




// story pages 

let swiperstory = new Swiper(".swiperstory", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
} ,
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay : true ,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop : true ,
breakpoints: {
  320: {
    slidesPerView: 3,
    spaceBetween: 20,
  },

  450: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
},
});
// story pages 


// whoarewepages
let swiper8 = new Swiper(".mySwiper66", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay : true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// whoarewepages

// storess and suppliers


const allFilterPart = Array.from(document.querySelectorAll(".sidbar .filter-part .filter-header")) ; 
allFilterPart.forEach(e=> {
    e.addEventListener("click" , (tr) => {
        e.children[1].classList.toggle("rotate-180")
        e.parentElement.children[0].classList.toggle("text-mainColor")
        e.parentElement.children[1].classList.toggle("h-full")
        e.parentElement.children[1].classList.toggle("h-0")
    })
})

const showOption = Array.from(document.querySelectorAll(".filter .show .showoption")) ;
const cardsPar = document.querySelector(".container .cards") ; 
const allCardsStoress = Array.from(document.querySelectorAll(".container .cards .card a") ) ;

     showOption.forEach(e=> {
         e.addEventListener("click" , () => {
             if(e.classList.contains("text-mainColor") != true) {
                 cardsPar.classList.toggle("w-full")
                 
                 showOption.forEach(x=> x.classList.remove("text-mainColor")) ;
                 e.classList.add("text-mainColor")
     
                 cardsPar.classList.toggle("grid-cols-12")
                 allCardsStoress.forEach(z=> {
                     z.parentElement.classList.toggle("col-span-4")
                     z.parentElement.classList.toggle("col-span-12")
                     z.parentElement.children[0].children[0].classList.toggle("w-full")
                     z.parentElement.children[0].children[0].classList.toggle("w-26")
                     z.parentElement.children[0].children[0].classList.toggle("h-[220px]")
                     z.parentElement.children[0].children[0].classList.toggle("h-250")
                     z.parentElement.classList.toggle("pb-6") ; 
                     z.parentElement.classList.toggle("p-4")
                     z.parentElement.classList.toggle("p-2")
                     z.classList.toggle("flex")
                 })
                 
             }
             
         })
     })


// handle filter 
const filterMobileBtn = document.querySelector(".show.filter") ; 
const canvise = document.querySelector(".cnavise") ; 
const canviseOverlay = document.querySelector(".cnavise .overlay") ; 
function canvisHendeler () {
    canvise.classList.toggle("ltr:left-[-200%]")
    canvise.classList.toggle("rtl:right-[-200%]")
    canvise.classList.toggle("right-0")
    canvise.classList.toggle("left-0")
}


if(canviseOverlay != null) {
  canviseOverlay.addEventListener("click"  , () => {
      canvisHendeler() ;
  })
}

if(filterMobileBtn != null) {
  filterMobileBtn.addEventListener("click" , () => {
      canvisHendeler() ;
  })
}
// handle filter 

// storess and suppliers

// contact page
const checkNumber = document.querySelector(".mobile-check") ; 
const formContact = document.querySelector(".formContact") ; 
// formContact.clientHeight
if(formContact != null) {
  formContact.addEventListener("submit" , ev=> {
    if(checkNumber.classList.contains("notValid") || checkNumber.value.length == 0) {
      ev.preventDefault() ; 
    }
  })
}
if(checkNumber != null) {
  checkNumber.addEventListener("input" , () => {
    if(checkNumber.value.length != 11) {
      checkNumber.classList.add("notValid")
    } else {
      checkNumber.classList.remove("notValid")
    }
  })
}