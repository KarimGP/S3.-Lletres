var nom = ["K", "A", "R", "I", "M"];

function repeticions(value) {
    var count = 0;
    nom.forEach((v) => (v === value && count++));
    return count;
}

console.log("K: "+ repeticions("K"));  
console.log("A: "+ repeticions("A"));
console.log("R: "+ repeticions("R")); 
console.log("I: "+ repeticions("I"));
console.log("M: "+ repeticions("M"));
