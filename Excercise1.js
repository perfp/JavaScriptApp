log = console.log;
log('Starting test');

var pfp = {
    name : "Per-Frode",
    age : 100,
    isProgrammer : true,
    likesJS : true
};

var Ole = Object.create(pfp);
Ole.name = "Ole";
Ole.likesJS = false;

log('Result: ' + (Ole.isProgrammer === Ole.likesJS).toString());


pfp.pi = 3.14;

log('Pi: ' +  Ole.pi);

/* Constructor */
function circle()
{
}

circle.prototype.circumference = 1.2;
function calculateArea (){
    var radius = this.circumference / 6.28;
    log('Radius: ' + radius);
    var area = 3.14 * radius ^ 2;
    log(area);
}
 
 
var smallcircle = new circle();
var largecircle = new circle();
circle.prototype.area = calculateArea;

log(smallcircle.circumference);
smallcircle.area();
log(largecircle.circumference);
largecircle.area();