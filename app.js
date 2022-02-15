$(document).ready(function () {
    console.log("html loaded!")
});

let $div = $('<div></div>');
$($div).insertAfter('form');
// let $h2 = $('<h2></h2>');
// $($h2).appendTo($div);
// $('h2').css('cursor', 'pointer');
// $('h2').mouseover(function (){
//     $("h2").css({
//         "background-color": "red",
//         "border-radius": '5px'});
// });
let $ul = $('<ul></ul>');
$($ul).insertAfter('div');

function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$("#form").submit(function (e) {
    e.preventDefault();
});

$('#btnSubmit').on("click", function () {
    var value = $("#fill").val()
    alert(value);
    //$h2.append(value);
    let $li = $('<li></li>');
    $li.appendTo($ul);
    $li.append(value);
    $('li').css('cursor', 'pointer');
    $li.on("click", function () {
        $li.css("color", generateRandomColor());
    })
    $li.on("dblclick", function (){
        $li.remove();
    })
});

$(document).ready(function () {
    $('#fill').on('input change', function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        } else {
            $('#btnSubmit').prop('disabled', true);
        }
    });
});





















