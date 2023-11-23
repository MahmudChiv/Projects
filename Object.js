//Object.js

function createCircle(radius) {
    return{
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}


const circle = createCircle(1);



//console.log(circle);



function House(length, width) {
    console.log('this', this);
    this.length = length;
    this.width = width;
    this.draw = function() {
        console.log('draw');
    } 
}


House.call({}, 1, 2);
House.apply({}, [1,2])

const another = new House(6, 3);

