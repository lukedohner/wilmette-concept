var animationAtRest = true;
var tree1 = document.getElementById("tree1");
var tree2 = document.getElementById("tree2");
var tree3 = document.getElementById("tree3");
var tree4 = document.getElementById("tree4");
var tree5 = document.getElementById("tree5");
var tree6 = document.getElementById("tree6");
var tree7 = document.getElementById("tree7");

var tree8 = document.getElementById("tree8");
var tree9 = document.getElementById("tree9");
var tree10 = document.getElementById("tree10");
var tree11 = document.getElementById("tree11");
var tree12 = document.getElementById("tree12");
var tree13 = document.getElementById("tree13");
var tree14 = document.getElementById("tree14");
var treesall = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, tree11, tree12, tree13, tree14];


var titleheader = document.getElementById("titleheader");
var treeline1 =document.getElementById("treeline1");
var treeline2 =document.getElementById("treeline2");
animationSet = function (){
console.log( 'animationSet' );
TweenMax.set([treeline1,treeline2], {y:5, z: 0.1, rotationZ: 0.01, force3D:true, x:0, opacity: 0});
//TweenMax.set(treeline2, {z: 0.1, rotationZ: 0.01, force3D:true, x:0, opacity: 0});

TweenMax.set(tree1, {z: 0.1, rotationZ: 0.01, force3D:true, x:44, y:10, opacity: 0});
TweenMax.set(tree2, {z: 0.1, rotationZ: 0.01, force3D:true, x:100, y:10, opacity: 0});
TweenMax.set(tree3, {z: 0.1, rotationZ: 0.01, force3D:true, x:204, y:10, opacity: 0});
TweenMax.set(tree4, {z: 0.1, rotationZ: 0.01, force3D:true, x:244, y:10, opacity: 0});
TweenMax.set(tree5, {z: 0.1, rotationZ: 0.01, force3D:true, x:305, y:10, opacity: 0});
TweenMax.set(tree6, {z: 0.1, rotationZ: 0.01, force3D:true, x:344, y:10, opacity: 0});
TweenMax.set(tree7, {z: 0.1, rotationZ: 0.01, force3D:true, x:10, y:10, opacity: 0});

TweenMax.set(tree8, {z: 0.1, rotationZ: 0.01, force3D:true, x:500, y:10, opacity: 0});
TweenMax.set(tree9, {z: 0.1, rotationZ: 0.01, force3D:true, x:555, y:10, opacity: 0});
TweenMax.set(tree10, {z: 0.1, rotationZ: 0.01, force3D:true, x:565, y:10, opacity: 0});
TweenMax.set(tree11, {z: 0.1, rotationZ: 0.01, force3D:true, x:647, y:10, opacity: 0});
TweenMax.set(tree12, {z: 0.1, rotationZ: 0.01, force3D:true, x:536, y:10, opacity: 0});
TweenMax.set(tree13, {z: 0.1, rotationZ: 0.01, force3D:true, x:700, y:10, opacity: 0});
TweenMax.set(tree14, {z: 0.1, rotationZ: 0.01, force3D:true, x:449, y:10, opacity: 0});

TweenMax.set(titleheader, {z: 0.1, rotationZ: 0.01, force3D:true, x:0, y:5, opacity: 0});
timeline.gotoAndPlay("zero");


};
onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );
		animationAtRest = true;
};
timeline = new TimelineMax( {
	delay: 0.1,
	onComplete: onAnimationComplete
} );
         // animationAtRest = false;

		timeline.pause();
		timeline.addLabel("zero", 0);
		timeline.add( [
			TweenMax.staggerTo(treesall, 1, {y:0, opacity:1, delay:0.5,}, 0.1),
			TweenMax.to([treeline1, treeline2], 1.8, {opacity:1, y:0, transformPerspective: 400, delay:1.4, ease:Power2.easeIn}),
			TweenMax.to(titleheader, 0.6, {y:0, opacity: 1, z:0.01, transformPerspective: 400, delay:3}),
			// TweenMax.to(tree1, 2, {y:0, z:0.01, opacity: 1, transformPerspective: 400}),
			// TweenMax.to(logo1, 0.6, {opacity: 1, z:0.01, transformPerspective: 400} ),
			// TweenMax.to([bg1, f1_copy1], 0.6, {x:-(bw+26), delay:3, z:0.01, transformPerspective: 400}),
			// TweenMax.to(bg2, 2, {x:"-=50", delay:3.5, z:0.01, transformPerspective: 400}),
			// TweenMax.to(bg3, 0.6, {x:"-="+(bw), delay:6.2, z:0.01, transformPerspective: 400}),
			// TweenMax.to(bg3, 2, {scale:1, y:-102, delay:6.7, z:0.01, transformPerspective: 400}),
			// TweenMax.to(f3_copy1, 0.6, {x:0, delay:6.8, z:0.01, transformPerspective: 400}),
			// TweenMax.to(resolve, 0.5, {width:bw, delay:9.4, z:0.01, transformPerspective: 400}),	
		] );

startAnimation = function () {
		if(animationAtRest){
		animationSet();
        }
        animationAtRest = false;
		console.log( "startAnimation");
	};
onAnimationComplete = function () {
		// Log duration of timeline
		console.log( 'Animation Duration: ' + timeline.time() + 's' );
		// Show a CTA or any animations outside main timeline
		// TweenMax.from( cta, 0.4, { y: '110%' } );
		// TweenMax.to( cta, 0.4, { opacity: 1 } );
};
    
	startAnimation();
    


