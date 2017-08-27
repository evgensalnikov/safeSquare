function squareSafe() {
	var arr = [];
	arr [0] = function ( newa, newb ) {
			var set = false;
           if ( newa > 0 && newb > 0) {
		    sidea = newa;
		    sideb = newb;
			set = true;
               }
      return set;
   }
   arr [1] = function () {
      return ( sidea * sideb );
   }
   arr [2] = function() {
	   return ( 2 * sidea + 2 * sideb);
   }	   
   return arr;
}

var square = squareSafe ();
console.log( square [0] (-10, 10) );
console.log( square [1] () );
console.log( square [2] () );