var file;

let hoi = [];
let uniek = [];
let test = [];
let positieX;
let positieY;
let gebruikt = 0;
let counts = {};
let final = [];
let result = 0;

function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0, 0);
}

function preload() {
  file = loadStrings("input.txt");
}

function draw() {
  for (i = 0; i < file.length; i++) {
    x = int(file[i].substring(file[i].indexOf('@') + 2, file[i].indexOf(',')));
    y = int(file[i].substring(file[i].indexOf(',') + 1, file[i].indexOf(':')));
    l = file[i].substring(file[i].indexOf(':') + 2, file[i].indexOf('x'));
    w = file[i].substring(file[i].indexOf('x') + 1, file[i].length);
    for (j = 0; j < w; j++) {
      positieX = x + j;
      for (k = 0; k < l; k++) {
        positieY = k + y;
        positie = String(positieX + ',' + positieY)
        hoi.push(positie);
        //hoi.sort();
      }
    }
    // fill(255, 0, 255, 100);
    // stroke(255, 0, 255, 100);
    // rect(x, y, l, w);
  }
  hoi.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log('counting done');

  for (i in counts) {
    if (counts[i] > 1) {
      if (counts[i]) {
        result++;
      }
    }
  }
  //  console.log(hoi.length);
  console.log(result);
  // console.log(final.length);
  //console.log(file.length);


  // for (i in hoi) {
  //   if (!test[i]) {
  //     console.log(hoi[i]);
  //     hallo = String(hoi[i]);
  //     test.push(hallo);
  //   }
  // }


  // for (i in hoi) {
  //   let value = hoi[i]
  //   for (i in hoi) {
  //     if (value === hoi[i]) {
  //       gebruikt++;
  //     }
  //   }
  // }
  // console.log(gebruikt);


  // uniek = Array.from(new Set(hoi));
  // //  console.log(uniek);
  // duplicates = hoi.length - uniek.length;
  // console.log('antwoord: ' + duplicates);
  //
  //






  //  hoi.push(punt);
  //    console.log('hoi' + hoi[1]);




  //  var d = dist([i].x, [i].y);
  // console.log('distance:' + d);
  // //  console.log("rect " + rect);





  noLoop();

}





//
//106868
//127826
//#1 @ 432,394: 29x14