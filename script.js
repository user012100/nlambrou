const track = document.querySelector(".marquee-track");

/* screen size checks */
const mobileQuery = window.matchMedia("(max-width: 768px)");
const isMobile = mobileQuery.matches;

let position = 40;
let speed = isMobile ? 2 : 1.25;
let targetSpeed = speed;

/* hover only on desktop */
if (!isMobile) {
	const container = document.querySelector(".header-container");

	container.addEventListener("mouseenter", () => {
		targetSpeed = 0.75;
	});

	container.addEventListener("mouseleave", () => {
		targetSpeed = 1.25;
	});
}

function animate() {
	speed += (targetSpeed - speed) * 0.06;
	position -= speed;

	const width = track.offsetWidth / 2;

	if (position <= -width) {
		position += width;
	}

	track.style.transform = `translateX(${position}px)`;
	requestAnimationFrame(animate);
}

animate();
