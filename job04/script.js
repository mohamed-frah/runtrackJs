function  bisextile(annee) {
    if((annee % 4 == 0 && annee % 100 !=0 || annee % 400 == 0)) {
        return true;
    } else { 
        return false;
    }
}


console.log(bisextile(2000)); // true
console.log(bisextile(2004)); // true
console.log(bisextile(1900)); // false
console.log(bisextile(2021)); // false
console.log(bisextile(1555)); // false