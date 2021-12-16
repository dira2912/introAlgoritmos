let a =  parseInt(prompt("Dame el primer precio"));
let b=  parseInt(prompt("Dame el segundo precio"));
let c=  parseInt(prompt("Dame el tercer precio"));

comparar(a, b, c);

function comparar(a, b, c){
    if(a>b && a>c) {
        alert(b+" "+c);
    }
    if(b>a && b>c) {
        alert(a+" "+c);
    }
    if(c>a && c>b) {
        alert(a+" "+b);
    }
}
