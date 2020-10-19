'use strict'

const myTrackers = document.querySelectorAll(".tracker");

let mouse = {x: 0, y: 0};

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  myTrackers.forEach(ele => {
    // element center points
    let eleX = (ele.clientWidth / 2) + ele.getBoundingClientRect().x;
    let eleY = (ele.clientHeight / 2) + ele.getBoundingClientRect().y;

    // distances between element center and mouse
    let deltaX = eleX - mouse.x;
    let deltaY = eleY - mouse.y;

    // check if delta is positive to know which side of element mouse is on, 
    // determine ratio of delta vs possible distance,
    // multiply by distance to edge of parent
    let trackingRatioX = deltaX / (deltaX >= 0 ? eleX : (window.innerWidth - eleX));
    let transformX = trackingRatioX * (ele.parentElement.clientWidth / 2) * -1;
    let trackingRatioY = deltaY / (deltaY >= 0 ? eleY : (window.innerWidth - eleY));
    let transformY = trackingRatioY * (ele.parentElement.clientHeight / 2) * -1;

    // apply transform to element
    ele.style.transform = `translate(${transformX}px, ${transformY}px)`;
  })
})

    

// psuedos
// take the objectX subtract mouseX = deltaX
// if deltaX positive
  // then the mouse is left of the object. 
  // divide the deltaX by the objectX and it gives you the percent the mouse is along the distanceX from object to origin
  // multiply that ratio by half of the cached objectWidth, transformX(-thatpx)

// if deltaX is negative
  // then the mouse is right of the object
  // objectX - totalX gets distanceX aka object to total as negative
  // divide the deltaX by distanceX to get percent of mouse along distanceX
  // multiply that percent by half of the cached objectWidth, transformX(thatpx)

// need a updatesCachesOnResize func
  // cache parentWidth, totalWidth
  // cache parentHeight, totalHeight

  // let cached width = window.innerWidth && document.documentElement.clientWidth ? 
  // Math.min(window.innerWidth, document.documentElement.clientWidth) : 
  // window.innerWidth || 
  // document.documentElement.clientWidth || 
  // document.getElementsByTagName('body')[0].clientWidth;


//maybe add a funny crosseyed region later