var counter=[0,1,2,3,4,5,6,7,8,9];
function like(n) 
{
    counter[n]+= 1; // counter = counter + 1;
    render();

}

// function dislike() {
//     counter -= 1; // counter = counter - 1;
//     render();
// }

function render() {
    var disp = document.getElementById('count');
    disp.innerText = counter[n];
}

