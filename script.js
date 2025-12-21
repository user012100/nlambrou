const track = document.querySelector(".marquee-track");

let position = 40;
let speed = 0.9;
let targetSpeed = 0.9;

const container = document.querySelector(".header-container");

container.addEventListener("mouseenter", () => {
	targetSpeed = 0.5;
});

container.addEventListener("mouseleave", () => {
	targetSpeed = 0.9;
});

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