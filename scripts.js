//  Create an EventListener for clicking on the button, increase the value of the second heading (currently 0)
counter = document.getElementById('counter').textContent * 1;

$('.button_increase').click(() => {
    counter = counter + 1;
    $('#counter').text(counter);
});

// (Optional) Create a working decreasing button as well
$('.button_decrease').click(() => {
    counter = counter - 1;
    $('#counter').text(counter);
});


//$('#debug').text("debug");
// document.getElementById('debug').innerHTML = "debug";