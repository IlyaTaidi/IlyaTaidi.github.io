Vue.config.devtools = true;

Vue.component('card', {
	template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
	mounted() {
		this.width = this.$refs.card.offsetWidth;
		this.height = this.$refs.card.offsetHeight;
	},
	props: ['dataImage'],
	data: () => ({
		width: 0,
		height: 0,
		mouseX: 0,
		mouseY: 0,
		mouseLeaveDelay: null
	}),
	computed: {
		mousePX() {
			return this.mouseX / this.width;
		},
		mousePY() {
			return this.mouseY / this.height;
		},
		cardStyle() {
			const rX = this.mousePX * 30;
			const rY = this.mousePY * -30;
			return {
				transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
			};
		},
		cardBgTransform() {
			const tX = this.mousePX * -40;
			const tY = this.mousePY * -40;
			return {
				transform: `translateX(${tX}px) translateY(${tY}px)`
			};
		},
		cardBgImage() {
			return {
				backgroundImage: `url(${this.dataImage})`
			};
		}
	},

	methods: {
		handleMouseMove(e) {
			this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
			this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
		},
		handleMouseEnter() {
			clearTimeout(this.mouseLeaveDelay);
		},
		handleMouseLeave() {
			this.mouseLeaveDelay = setTimeout(() => {
				this.mouseX = 0;
				this.mouseY = 0;
			}, 1000);
		}
	}
});



const app = new Vue({
	el: '#app'
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(ScrollToPlugin);

let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
	animation: scene1,
	trigger: ".scrollElement",
	start: "top top",
	end: "45% 100%",
	scrub: 3,
});


/* S2 Text */
let s1t = gsap.timeline();
ScrollTrigger.create({
	animation: s1t,
	trigger: ".S1",
	start: "top top",
	end: '100',
	duration: 1,
	scrub: true
});

s1t.to("#S1", {
	opacity: '0',
	duration: 1.5
})





// hills animation 
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0)
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03)
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03)
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03)
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0)
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0)
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0)
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0)


/*   Bird   */
gsap.fromTo("#bird", { opacity: 1 }, {
	y: -250,
	x: 800,
	ease: "power2.out",
	scrollTrigger: {
		trigger: ".scrollElement",
		start: "top top",
		end: "60% 100%",
		scrub: 4,
		onEnter: function () { gsap.to("#bird", { scaleX: 1, rotation: 0 }) },
		onLeave: function () { gsap.to("#bird", { scaleX: -1, rotation: -15 }) },
	}
})


/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
	animation: clouds,
	trigger: ".scrollElement",
	start: "top top",
	end: "70% 100%",
	scrub: 1,
});

clouds.to("#cloud1", { x: 500 }, 0)
clouds.to("#cloud2", { x: 1000 }, 0)
clouds.to("#cloud3", { x: -1000 }, 0)
clouds.to("#cloud4", { x: -700, y: 25 }, 0)



/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
	animation: sun,
	trigger: ".scrollElement",
	start: "top top",
	end: "2200 100%",
	scrub: 1,
});

//sun motion 
sun.to("#bg_grad", { attr: { cy: "330" } }, 0.00)

//bg change
sun.to("#sun", { attr: { offset: "0.15" } }, 0.00)
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0.00)
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0.00)
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0.00)
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0.00)
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0)



/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
	animation: scene2,
	trigger: ".scrollElement",
	start: "15% top",
	end: "40% 100%",
	scrub: 4,
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1)
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1)
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2)
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3)
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3)



/* Bats */
gsap.fromTo("#bats", { opacity: 1, y: 400, scale: 0 }, {
	y: 120,
	scale: 0.8,
	transformOrigin: "50% 50%",
	ease: "power3.out",
	scrollTrigger: {
		trigger: ".scrollElement",
		start: "55% top",
		end: "70% 100%",
		scrub: 3,
		onEnter: function () {
			gsap.utils.toArray("#bats path").forEach((item, i) => {
				gsap.to(item, { scaleX: 0.5, yoyo: true, repeat: 11, duration: 0.15, delay: 0.7 + (i / 10), transformOrigin: "50% 50%" })
			});
			gsap.set("#bats", { opacity: 1 })
		},
		onLeave: function () { gsap.to("#bats", { opacity: 0, delay: 2 }) },
	}
})

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
	animation: sun2,
	trigger: ".scrollElement",
	start: "2200 top",
	end: "5000 100%",
	scrub: 1,
});

sun2.to("#sun", { attr: { offset: "0.6" } }, 0)
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0)
sun2.to("#sun", { attr: { "stop-color": "#efefef" } }, 0)
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0)
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0)
sun2.to("#bg_grad stop:nth-child(5)", { attr: { "stop-color": "#063093" } }, 0)
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#07205a" } }, 0)


/* S2 Text */
let s2t = gsap.timeline();
ScrollTrigger.create({
	animation: s2t,
	trigger: ".scrollElement",
	start: "2000 30%",
	end: "1800",
	duration: 1.5,
	scrub: true,
	id: 'FadeIn'
});
s2t.to("#S2", {
	opacity: '1',
	duration: 1.5
})


/* S2 Text */
let s2t2 = gsap.timeline();
ScrollTrigger.create({
	animation: s2t2,
	trigger: ".scrollElement",
	start: "2800 75%",
	end: '2400',
	duration: 1,
	scrub: true,

});

s2t2.to("#S2", {
	opacity: '0',
	duration: 1.5
})



/* S3 */
let s3 = gsap.timeline();
ScrollTrigger.create({
	animation: s3,
	trigger: ".scrollElement",
	start: "3550",
	end: "3650",
	duration: 2,
	scrub: true,
});
s3.to("#S3", {
	opacity: 1,
	duration: 3
})

/* S3 */
let s3o = gsap.timeline();
ScrollTrigger.create({
	animation: s3o,
	trigger: ".scrollElement",
	start: "3750",
	end: "4100",
	duration: 2,
	scrub: true,
});
s3o.to("#S3", {
	opacity: '0',
	duration: 3
})

/* S4 */
let s4 = gsap.timeline();
ScrollTrigger.create({
	animation: s4,
	trigger: ".scrollElement",
	start: "4700 35%",
	end: "5000",
	duration: 2,
	scrub: true,
});
s4.to("#S4", {
	opacity: 1,
	duration: 2
})


/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: 580, visibility: "visible" })
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
	animation: sceneTransition,
	trigger: ".scrollElement",
	start: "70% top",
	end: "bottom 100%",
	scrub: 3,
});

sceneTransition.to("#h2-1", { y: -680, scale: 1.5, transformOrigin: "50% 50%" }, 0)
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.00)
sceneTransition.to("#bg2", { y: 0 }, 0)



/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
	animation: scene3,
	trigger: ".scrollElement",
	start: "80% 50%",
	end: "bottom 100%",
	scrub: 3,
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0)
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03)
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06)
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09)
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12)

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0)

// Scroll Back text
/* scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25)
scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3) */

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0)
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0)


/*   falling star   */
gsap.to("#fstar", {
	x: -700,
	y: -250,
	ease: "power4.out",
	scrollTrigger: {
		trigger: ".scrollElement",
		start: "4000 top",
		end: "6000 100%",
		scrub: 5,
		onEnter: function () { gsap.set("#fstar", { opacity: 1 }) },
		onLeave: function () { gsap.set("#fstar", { opacity: 0 }) },
	}
})


//reset scrollbar position after refresh
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

// Scroll to S2

function s1Scroll() {
	let tl = new TimelineMax({
	});
	tl.to(window, {
		duration: 8,
		scrollTo: '.S2',
		ease: CustomEase.create("custom", "M0,0 C0.486,0 0.53,0.654 1,1  ")
	});
}

function s2Scroll() {
	gsap.to(window, {
		duration: 6,
		scrollTo: '.S3',
		ease: CustomEase.create("custom", "M0,0 C0.486,0 0.53,0.654 1,1  ")
	});
}
function s3Scroll() {
	gsap.to(window, {
		duration: 5,
		scrollTo: '.S4Card',
		ease: "sine.in",
	});
}
function s4Scroll() {
	gsap.to(window, {
		duration: 10,
		scrollTo: { y: 0, x: 0 },
		ease: CustomEase.create("custom", "M0,0 C0.486,0 0.53,0.654 1,1  ")
	});
}


let fitty = document.getElementById('Fitty');
fitty.addEventListener('click', function (e) {
	e.preventDefault();
	window.open(
		"https://fittyonline.com/landing", "_blank");
});
let rudis = document.getElementById('Rudis');
rudis.addEventListener('click', function (e) {
	e.preventDefault();
	window.open(
		"https://rudis.win", "_blank");
});




var $opening = $("#opening"),
	$text = $("#text_anime span"),
	$top = $("#text_top"),
	$bottom = $("#text_bottom"),
	$top_sq = $("#top_sq"),
	$top_line = $("#top_line"),
	$bottom_sq = $("#bottom_sq"),
	$bottom_line = $("#bottom_line"),
	$v_left = $("#v_left"),
	$v_right = $("#v_right"),
	$main = $("#main_content"),
	tl_opening = new TimelineLite();

tl_opening.staggerFrom($text, 0.5, { top: "+=25px", rotation: "-=-3deg", alpha: 0, scale: 0.8, ease: Power1.easeOut }, 0.04)
	.from($top_sq, 1, { y: -100, alpha: 0, ease: Bounce.easeOut, delay: 0.4 })
	.from($bottom_sq, 1, { y: 100, alpha: 0, ease: Bounce.easeOut }, "-=1")
	.from([$top_line, $bottom_line], 0.7, { width: 0, ease: Power4.easeOut })
	.to([$top_sq, $bottom_sq], 0.3, { display: "none" })
	.to([$top, $bottom], 0.5, { height: "50%", ease: Power1.easeIn })
	.to($top_line, 0.5, { display: "none" }, "-=0.1")
	.to($bottom_line, 0.5, { rotation: -90, ease: Power1.easeIn }, "+=0.1")
	.from([$v_left, $v_right], 0.1, { display: "none" })
	.to($opening, 0.1, { display: "none" })
	.to([$v_left, $v_right], 1.5, { width: 0, ease: Power4.easeOut })
	.to($main, 0.02, { css: { zIndex: 1 } })



const tl = gsap.timeline({
	defaults: {
		ease: "none"
	},
	scrollTrigger: {
		start: 0,
		end: "max",
		scrub: 2
	}
});

delay = ms => new Promise(res => setTimeout(res, ms));
function fadeOut() {
	gsap.to(this.document.querySelector('.myBtn'), {
		y: -100,
		opacity: 0,
		duration: 1
	});
	gsap.from(this.document.querySelector('.overlay'), {
		duration: 1,
		ease: Power2.easeInOut
	});
	gsap.to(this.document.querySelector('.overlay'), {
		duration: 1,
		delay: 2.6,
		top: "-110%",
		ease: Expo.easeInOut
	});
	gsap.to(this.document.querySelector('.overlay-2'), {
		duration: 1,
		delay: 3,
		top: "-110%",
		ease: Expo.easeInOut
	});
	gsap.from(this.document.querySelector('.content'), {
		duration: 1,
		opacity: 0,
		ease: Power2.easeInOut
	});
	gsap.to(this.document.querySelector('.content'), {
		duration: 1,
		delay: 3.2,
		ease: Power2.easeInOut
	});
	this.delay(3500).then(() => { this.textAnim() })
}

var carrotTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });
carrotTl.add('start')
	.to('.S1Carrot', {
		duration: 1,
		y: -20,
		ease: Power1.easeInOut
	})
	.to('.S2Carrot', {
		duration: 1,
		y: -20,
		ease: Power1.easeInOut
	})
	.to('.S3Carrot', {
		duration: 1,
		y: -20,
		ease: Power1.easeInOut
	});

function textAnim() {
	var tl = new TimelineLite({ delay: 0.5 }),
		firstBg = document.querySelectorAll('.text__first-bg'),
		secBg = document.querySelectorAll('.text__second-bg'),
		word = document.querySelectorAll('.text__word');
	carrot = document.querySelectorAll('.S1Carrot');
	tl
		.to(firstBg, 0.3, { scaleX: 1 })
		.to(secBg, 0.4, { scaleX: 1 }, "+=0.1")
		.to(word, 0.2, { opacity: 1 }, "-=0.1")
		.to(firstBg, 0.3, { scaleX: 0 })
		.to(secBg, 0.3, { scaleX: 0 })
		.to(carrot, 0.2, { opacity: 1 });
}


const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".S4Card");

const handleButtonClick = e => {
	const targetSection = e.target.getAttribute("data-section");
	const section = document.querySelector(targetSection);
	targetSection !== "#about" ?
		card.classList.add("is-active") :
		card.classList.remove("is-active");
	card.setAttribute("data-state", targetSection);
	sections.forEach(s => s.classList.remove("is-active"));
	buttons.forEach(b => b.classList.remove("is-active"));
	e.target.classList.add("is-active");
	section.classList.add("is-active");
};

buttons.forEach(btn => {
	btn.addEventListener("click", handleButtonClick);
});
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isBlink = (isChrome || isOpera) && !!window.CSS;
var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isBlink: ' + isBlink + '<br>';

$('.myBtn').click(function () {
	if (isSafari == false) {
		swal({
			title: 'Enter Fullscreen?',
			text: "This Portfolio is best experienced in FullScreen. Would you like to enter Fullscreen?",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
		}).then((result) => {
			if (result == true) {
				fullscreen()
			}
		}).catch(() => fadeOut())
	}
	if (isSafari == true) {
		fadeOut()
	}
})

function fullscreen() {
	let fullscreen;
	if (!fullscreen) {
		fullscreen = true;
		document.documentElement.requestFullscreen().then(function () {
			fadeOut()
		})
	}
	else {
		fullscreen = false;
		document.exitFullscreen().then(function () {
			fadeOut()
		})
	}
}
