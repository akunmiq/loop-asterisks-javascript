//menyusun barisan bintang

var bintang = "";
for(var x=1; x<=5; x++) {
	
	console.log(bintang + "*");
}


//menyusun barisan bintang dengan Nested Looping

var x=1;
var y=5;

while(x <= y) {
	var bintang = "*";
	var a = 1;

	while(a < y) {
		bintang = bintang + "*";a++;
	}
	
	console.log(bintang);x++;
}


//menyusun barisan tangga bintang

var bintang="";
for (x=1; x<=5; x++) {
    bintang=bintang + "*";

    console.log(bintang);  
}
