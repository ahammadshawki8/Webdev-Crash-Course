// for loop
for (var i = 0; i < 5; i++) {
    console.log("step " + i);
}

// while loop
var num = 15;
do {
    console.log("step " + num);
    num--;
} while (num > 5);

// do while loop
var j = 0;
while (j < 5) {
    console.log("step " + j);
    j++;
}

// break
for (var i = 0; i < 5; i++) { 
    if (i == 3) {
        break; 
    }
    console.log("step " + i);
}


// continue
for (var i = 0; i < 5; i++) { 
    if (i == 3) {
        continue; 
    }
    console.log("step " + i);
}