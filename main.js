var image1 = document.querySelector(".image1");
var image2 = document.querySelector(".image2");
var image3 = document.querySelector(".image3");


image1.addEventListener("click", function () {
  var random = Math.floor(Math.random() * 2);
  if (random === 0) {
    image3.innerHTML = '<img src="' + image1.src+ ' class=`i3`">';

  } else {
    image3.innerHTML = '<img src="' + image2.src + '">';
  }
});

var resetButton = document.querySelector(".rstbtn");

resetButton.addEventListener("click", function() {
  location.reload();
});





// GODKJENT
// fetch('kronEllerMynt.json')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         var resetbtn = document.querySelector(".rstbtn")
//         var container = document.querySelector(".container")
//         var img1 = document.querySelector(".image1")
//         var img2 = document.querySelector(".image2")
//         var counter = 0
//         var imgarray = [img1, img2]
//         var winner = imgarray[Math.floor(Math.random() * imgarray.length)]

//         console.log(winner);


//         img1.src = json[0].images.kron
//         img2.src = json[0].images.mynt

//     })