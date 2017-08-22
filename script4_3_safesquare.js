var sidea = prompt("input side A", "");
var sideb = prompt("input side B", "");

function squareSafe() {

   var check = function ( newa, newb ) {
           if ( newa > 0 && newb > 0) {
         sidea = newa;
		 sideb = newb;
               }
      return check;
   }
   var square = function () {
      return ( sidea * sideb );
   }
   return square ();
}

var square = squareSafe;
console.log(square(sidea, sideb));