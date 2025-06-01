let mousePreviousClientX = 0;
let mousePreviousClientY = 0;
let timeoutId;

function wrapEachLetterInSpan(targetSelector) {
  const targetElement = document.querySelector(targetSelector);
  const originalText = targetElement.innerText;
  let spannedText = "";

  originalText.split("").forEach((char) => {
    spannedText += `<span>${char}</span>`;
  });

  targetElement.innerHTML = spannedText;
}

function lenisInit() {
  const lenis = new Lenis({
    autoRaf: true,
  });
}

lenisInit();

function HeroPageAnimation() {
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "200% top",
      scrub: 2,
      // markers: true,
      pin: true,
      ease: "power2",
    },
  });

  t1.to(".home-foreground ", {
    "--clip": "0%",
    duration: 4,
  })
    .to(
      ".home-marquee",
      {
        scale: 1,
      },
      "row"
    )
    .to(
      ".hero-row-one,.hero-row-three",
      {
        x: "-2%",
        duration: 1.2,
      },
      "row"
    )
    .to(
      ".hero-row-two ,.hero-row-four",
      {
        x: "2%",
        duration: 1.2,
      },
      "row"
    )
    .to(
      ".top-text > span",
      {
        opacity: 1,
        stagger: 0.1,
        delay: -2,
      },
      "row"
    );
}

function mouseCustomAnimation(clampX, clampY, top, left) {
  //     document.querySelector(".custom-cursor").style.transform =
  //   `translate(${left}px, ${top}px) scaleX(${clampX}) scaleY(${clampY})`;

  gsap.to(".custom-cursor", {
    top: `${top}px`,
    left: `${left}px`,
    scaleX: clampX,
    scaleY: clampY,
    ease: "power2",
  });
}

window.addEventListener("mousemove", function (event) {
  clearTimeout(timeoutId);

  const { clientX, clientY } = event;
  const diffX = clientX - mousePreviousClientX;
  const diffY = clientY - mousePreviousClientY;
  mousePreviousClientX = clientX;
  mousePreviousClientY = clientY;

  const clampX = gsap.utils.clamp(0.8, 1.2, diffX);
  const clampY = gsap.utils.clamp(0.8, 1.2, diffY);

  mouseCustomAnimation(clampX, clampY, clientY, clientX);

  timeoutId = setTimeout(() => {
    console.log("executed");
    gsap.to(".custom-cursor", {
      scaleX: 1,
      scaleY: 1,
      ease: "power2",
    });
  }, 400);
});

wrapEachLetterInSpan(".top-text");
HeroPageAnimation();

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top top",
    end: "300% top",
    scrub: 2,
    // markers: true,
    pin: true,
    ease: "power2",
  },
});

t1.to(
  ".mask-one",
  {
    maskSize: "400%",
  },
  "a"
)
  .to(
    ".project-one",
    {
      // backgroundSize: "100%",
    },
    "a"
  )
  .to(
    ".mask-two",
    {
      maskSize: "400%",
    },
    "b"
  )
  .to(
    ".project-two",
    {
      // backgroundSize: "100%",
    },
    "b"
  )
  .to(
    ".mask-three",
    {
      maskSize: "400%",
    },
    "c"
  )
  .to(
    ".project-three",
    {
      // backgroundSize: "100%",
    },
    "c"
  );

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".work-process",
    start: "top top",
    end: "200% top",
    scrub: 2,
    // markers: true,
    pin: true,
    ease: "power2",
  },
});

t2.to(".work-process-wrapper", {
  x: "-400%",
  ease: "power2",
});
