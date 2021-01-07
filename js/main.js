'use strict';

const Planet = function (id, R, pxL, pxR) {
    this._elem = document.getElementById(id);
    this._R=R;	        
    this._pxL=pxL;
    this._pxR=pxR;		           
}
Planet.prototype.movePlanet = function(val, L) {	    	
    setInterval(() => {        
           L+=1;	     			
        this._elem.style.left=this._R*Math.cos(L*Math.PI/180)+this._pxL+"px";
        this._elem.style.top=this._R*Math.sin(L*Math.PI/180)+this._pxR+"px";
    }, val);	    	
} 

  let mercury = new Planet ("Mercury", 87, 80, 80);		
  mercury.movePlanet(30, 80)

  let venus = new Planet ("Venus", 115, 70, 70);
  venus.movePlanet(20, 20)

  let earth = new Planet ("Earth", 165, 3, 60);
  earth.movePlanet( 30, 50)

  let mars = new Planet ("Mars", 210, 73, 73);
  mars.movePlanet(40, 120)

  let jupiter = new Planet ("Jupiter", 265, 55, 50);
  jupiter.movePlanet(50, 200)

  let saturn = new Planet ("Saturn", 346, 36, 46);
  saturn.movePlanet(60, 300)

  let uranus = new Planet ("Uranus", 435, 70, 70);
  uranus.movePlanet(70, 50)

let neptune = new Planet ('Neptune', 500, 70, 70);
neptune.movePlanet(80, 90)

