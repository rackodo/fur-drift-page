const cursor = document.getElementById("cursor");

const size = 50;

document.body.onpointermove = event => {
	const { clientX, clientY } = event;

	cursor.animate({
		left: `${clientX}px`,
		top: `${clientY}px`
	}, { duration: 3000, fill: "forwards" });
}