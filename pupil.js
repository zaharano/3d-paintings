'use strict'

const myTrackers = document.querySelectorAll(".tracker");

let mouse = {x: 0, y: 0};

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  myTrackers.forEach(obj => {
    let objX = (obj.clientWidth / 2) + obj.getBoundingClientRect().x;
    let objY = (obj.clientHeight / 2) + obj.getBoundingClientRect().y;
    let deltaX = objX - mouse.x;
    let deltaY = objY - mouse.y;

    let trackingRatioX = deltaX / (deltaX >= 0 ? objX : (window.innerWidth - objX));
    let transformX = trackingRatioX * (obj.parentElement.clientWidth / 2) * -1;

    let trackingRatioY = deltaY / (deltaY >= 0 ? objY : (window.innerWidth - objY));
    let transformY = trackingRatioY * (obj.parentElement.clientHeight / 2) * -1;

    obj.style.transform = `translate(${transformX}px, ${transformY}px)`;
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