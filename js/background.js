
/*
	Moving poly idea taken from https://github.com/shiya/three.js-samples/blob/gh-pages/three-particles/snowing.html

	Writing this directive involved borrowing some of their coding technique. So props to them!
*/

var camera, scene, renderer, controls;
var contW = $( document ).width();
var contH = $( document ).height();
console.log(contW + " W &  " + contH)
var particleCount = 5000 
var particleGeometry = new THREE.SphereGeometry(2, 32, 32); // size and number of circle polys
var particleMaterial = new THREE.MeshBasicMaterial({
	color: 0xFFFFFF,
	transparent: true,
	opacity: 0.5
});
var particles = [];


 function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, (contW / contH), 1, 1100);

	controls = new THREE.DeviceOrientationControls( camera ); 

	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(contW, contH);

	// create particles and randomly place
	for( var i = 0; i < particleCount; i++) {
		particles[i] = new THREE.Mesh(particleGeometry, particleMaterial);

		//randomize position
		var px = Math.random() * contW * 2 - contW,
		py = Math.random() * contH * 2 - contH,
		pz = Math.random() * contW * 2 - contW;

		particles[i].position.x = px;
		particles[i].position.y = py;
		particles[i].position.z = pz;

		particles[i].direction = {
			x: Math.random(),
			y: Math.random()
		}
		particles[i].velocity = {
			y: Math.random()
		}

		scene.add(particles[i]);
		camera.lookAt( scene.position );
	}

	$('canvas').hide()
	document.body.appendChild(renderer.domElement);
	renderer.render( scene, camera );

	window.addEventListener( 'resize', onWindowResize(), false);
}

onWindowResize = function () {

	resizeCanvas();

};

resizeCanvas = function () {

	contW = $( document ).width();
	contH = $( document ).height();

	windowHalfX = contW / 2;
	windowHalfY = contH / 2;

	camera.aspect = contW / contH;
	camera.updateProjectionMatrix();

	renderer.setSize( contW, contH );

};

 function animate() {
	requestAnimationFrame( animate );
	controls.update();

	for (var i = 0; i < particleCount; i++) {
		particles[i].position.y -= particles[i].velocity.y;

		if (particles[i].position.y < -contH || particles[i].position.y > contH) {
			particles[i].position.y = contH;
		}
	}



	renderer.render( scene, camera );
}

// start
init();
animate();