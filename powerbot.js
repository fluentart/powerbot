// Utility to read .csv files from Elster Metering Systems
// by Rouan van der Ende
var os = require("os");
var reader = require ("buffered-reader");


var file = "";

if (!process.argv[2]) {
  console.log("node powercalc.js input.csv\n\n")
} else {
  file = process.argv[2];
}

console.log("\nLoading "+file+" ... please wait\n")


var BinaryReader = reader.BinaryReader;
var DataReader = reader.DataReader;
var readerstream = new DataReader (file, { encoding: "utf8" });

var parseddata = [];

readerstream.on("error", function (error){
  console.log (error);
})

readerstream.on("line", function (line) {
  var linedata = line.split('","');
  var cleandata = [];
  for (var a in linedata) {
  	if (linedata[a] != '') { //get rid of empty lines
  		if (linedata[a] != '"') { //get rid of empty cells
  			cleandata.push(linedata[a].replace('"','')); //then keep it
  		}

  	}
  }

  if (cleandata.length != 0) { parseddata.push(cleandata); /*save*/ }
})

readerstream.on("end", function () {
  //console.log(parseddata)
  console.log("\nMeter ID:"+parseddata[1][0].slice(8,16) + " Time: " + parseddata[1][0].slice(17,parseddata[1][0].length))
  console.log("============================================")

  console.log("\nCumulative totals");
  console.log("- - - - - - - - - - - - ");

  var importkwh = parseFloat(replaceall(parseddata[10][0],",",""))/1000;
  console.log("Import Wh : " + importkwh.toFixed(3) + " kWh " );

  console.log("\nRates");
  console.log("- - - - - - - - - - - - ");
  var rate1 = parseFloat(replaceall(parseddata[26][1],",",""))/1000;
  console.log("Peak    (rate1): "+rate1 + " kWh ")
  var rate2 = parseFloat(replaceall(parseddata[27][1],",",""))/1000;
  console.log("Normal  (rate2): "+rate2 + " kWh ")
  var rate3 = parseFloat(replaceall(parseddata[28][1],",",""))/1000;
  console.log("Offpeak (rate3): "+rate3 + " kWh ")

  var cumulativerate = (rate1+rate2+rate3);
  console.log("Cumulative rate: "+ cumulativerate)
  console.log("Booked rate    : " +(importkwh-cumulativerate).toFixed(3) + " kWh " );

  console.log("\nMaximum Demands (kVa)");
  console.log("- - - - - - - - - - - - ");
  var MD1a = parseFloat(replaceall(parseddata[36][1],",",""))/1000;
  var MD1b = parseFloat(replaceall(parseddata[37][1],",",""))/1000;
  var MD2c = parseFloat(replaceall(parseddata[38][1],",",""))/1000;

  console.log("MD1a: "+MD1a + " kVa ")  
  console.log("MD1b: "+MD1b + " kVa ")  
  console.log("MD2c: "+MD2c + " kVa ")  

  var demandprice = 119.50; // R119.50
  console.log("\nMax : "+Math.max(MD1a,MD1b,MD2c) + " kVa "+ "@ R"+demandprice+"/kVa")    

  var billedkva = Math.max(MD1a,MD1b,MD2c)*demandprice;
  console.log("\nR "+ billedkva.toFixed(2));

})

readerstream.read();




/*************************** */

var replaceall = function(instr, searchfor, replacewith) {
	/* helps to replace many instances of a pattern in a string
	   example: replaceall("29,071,023.640", "," , "" ); // returns: 29071023.640 (string)
	*/
	var instrtmp = instr;
	while (instrtmp != instrtmp.replace(searchfor,replacewith) ) {
		instrtmp = instrtmp.replace(searchfor,replacewith);
	};
	return instrtmp;
}