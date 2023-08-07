const header = document.querySelector(".header");
let media = gsap.matchMedia();
// Header Animation

// Mouse Cursor Start
header.addEventListener("mousemove", (event) => {
  gsap.to(".headerCursorEffect", {
    top: `${event.pageY}px`,
    left: `${event.pageX}px`,
    duration: 0.1,
  });
});
header.addEventListener("mouseleave", (event) => {
  gsap.to(".headerCursorEffect", {
    top: "50%",
    left: "50%",
    duration: 0.2,
  });
});
// Mouse Cursor End

let titleTimeline = gsap.timeline();

titleTimeline.from(".headerDiv1 > span", {
  y: -50,
  opacity: 0,
  delay: 0.1,
  duration: 0.5,
});

let frontEndDevTimeline = gsap.timeline();
let portfolioTimeline = gsap.timeline();

frontEndDevTimeline.from(".headerDiv2 > h1", {
  x: 700,
  opacity: 0,
  duration: 0.5,
});
portfolioTimeline.from(".headerDiv3 > span", {
  x: -500,
  opacity: 0,
  duration: 0.5,
});

media.add("(min-width:1062px)", () => {
  gsap.from(".headerCircleEffect", {
    x: "-100vw",
    duration: 2,
    opacity: 0,
  });
  gsap.to(".headerCircleEffect", {
    rotate: 360,
    duration: 250,
    repeat: -1,
  });
});

media.add("(max-width:1062px)", () => {
  gsap.from(".headerCircleEffect", {
    x: "100vw",
    duration: 2,
    opacity: 0,
  });
  gsap.to(".headerCircleEffect", {
    rotate: 360,
    duration: 250,
    repeat: -1,
  });
});

titleTimeline.add([frontEndDevTimeline, portfolioTimeline], 0.5);

// Main Animation

// Main Section 1 Animation

let section1Timeline = gsap.timeline();

gsap.from(".section1", {
  y: "100vh",
  opacity: 0.8,
  duration: 1,
  scrollTrigger: {
    trigger: ".section1",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 80%",
    scrub: 1,
  },
});

// Main Section 2 Animation

gsap.from(".section2", {
  x: "-100vw",
  opacity: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".section2Div1 > h2", {
  y: "-12vh",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".section2Div1 > h2",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 35%",
    scrub: 1,
  },
});

media.add("(min-width:1440px)", () => {
  let section2ListTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      //   markers: true,
      start: "top 65%",
      end: "top 45%",
      onEnter: () => section2ListTimeline.timeScale(1).play(),
      onLeaveBack: () => section2ListTimeline.timeScale(4).reverse(),
      // scrub: 1,
      // onEnterBack: () => section2ListTimeline.reverse(),
      // onLeave: () => section2ListTimeline.play(),
    },
  });

  section2ListTimeline
    .from(".section2Div2_UlLi1", {
      x: "-70vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi2", {
      x: "-50vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi3", {
      x: "-50vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi6", {
      y: "-40vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi5", {
      x: "55vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi4", {
      x: "55vh",
      duration: 0.4,
      opacity: 0,
    });
});
media.add("(min-width: 1020px) and (max-width: 1439px)", () => {
  let section2ListTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers: true,
      start: "top 65%",
      end: "top 45%",
      onEnter: () => section2ListTimeline.timeScale(1).play(),
      onLeaveBack: () => section2ListTimeline.timeScale(4).reverse(),
      // scrub: 1,
      // onEnterBack: () => section2ListTimeline.reverse(),
      // onLeave: () => section2ListTimeline.play(),
    },
  });

  section2ListTimeline
    .from(".section2Div2_UlLi1", {
      x: "-70vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi2", {
      x: "-50vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi3", {
      y: "-50vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi4", {
      x: "55vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi5", {
      y: "-50vh",
      duration: 0.4,
      opacity: 0,
    })
    .from(".section2Div2_UlLi6", {
      x: "-55vh",
      duration: 0.4,
      opacity: 0,
    });
});

media.add("(min-width: 100px) and (max-width: 1019px)", () => {
  gsap.from(".section2Div2_UlLi1", {
    x: "-70vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi1",
      scroller: "body",
      //   markers: true,
      start: "top 65%",
      end: "top 45%",
      scrub: 1,
    },
  });
  gsap.from(".section2Div2_UlLi2", {
    y: "-40vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi2",
      scroller: "body",
      // markers: true,
      start: "top 35%",
      end: "top 15%",
      scrub: 1,
    },
  });
  gsap.from(".section2Div2_UlLi3", {
    y: "-40vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi3",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 25%",
      scrub: 1,
    },
  });
  gsap.from(".section2Div2_UlLi4", {
    y: "-40vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi4",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 25%",
      scrub: 1,
    },
  });
  gsap.from(".section2Div2_UlLi5", {
    y: "-40vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi5",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 25%",
      scrub: 1,
    },
  });
  gsap.from(".section2Div2_UlLi6", {
    y: "-40vh",
    duration: 0.4,
    opacity: 0,
    scrollTrigger: {
      trigger: ".section2Div2_UlLi6",
      scroller: "body",
      //   markers: true,
      start: "top 50%",
      end: "top 25%",
      scrub: 1,
    },
  });
});
// Main Section 3 Animation

media.add("(min-width:1441px)", () => {
  gsap.from(".section3", {
    y: "100vh",
    opacity: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      // markers: true,
      start: "top 93%",
      end: "top 65%",
      scrub: 1,
    },
  });
});
media.add("(max-width:1440px)", () => {
  gsap.from(".section3", {
    y: "100vh",
    opacity: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      //   markers: true,
      start: "top 93%",
      end: "top 65%",
      scrub: 1,
    },
  });
});

// media.add("(width <= 1018px)", () => {
//     gsap.from(".section3", {
//       y: "100vh",
//       opacity: 0.8,
//       duration: 1,
//       scrollTrigger: {
//         trigger: ".section3",
//         scroller: "body",
//           markers: true,
//         start: "top 93%",
//         end: "top 65%",
//         scrub: 1,
//       },
//     });
//   });

// Main Section 4 Animation

const section4 = document.querySelector(".section4");

// Mouse Cursor Start
section4.addEventListener("mousemove", (event) => {
  gsap.to(".contactCursorEffect", {
    top: `${event.y}px`,
    left: `${event.x}px`,
    height: "100rem",
    width: "100rem",
    duration: 0.1,
  });
});
section4.addEventListener("mouseleave", (event) => {
  gsap.to(".contactCursorEffect", {
    top: "50%",
    left: "50%",
    height: "150rem",
    width: "150rem",
    duration: 0.2,
  });
});
// Mouse Cursor End

// Page effect

gsap.from(".section4", {
  x: "100vw",
  opacity: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".section4",
    scroller: "body",
    // markers: true,
    start: "top 77%",
    end: "top 60%",
    scrub: 1,
  },
});

// gsap.from(".section2Div1 > h2", {
//   y: "-12vh",
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section2Div1 > h2",
//     scroller: "body",
//     // markers: true,
//     start: "top 45%",
//     end: "top 35%",
//     scrub: 1,
//   },
// });

// form container hover effect
const formContainer = document.querySelector(".formContainer");

formContainer.addEventListener("mouseenter", () => {
  gsap.to(".formContainer", {
    scale: 1.02,
    duration: 0.2,
    boxShadow: "0px 5px 10px black",
  });
});
formContainer.addEventListener("mouseleave", () => {
  gsap.to(".formContainer", {
    scale: 1,
    duration: 0.2,
    boxShadow: "none",
  });
});