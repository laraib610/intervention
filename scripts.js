function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function activeBox()
{
    if ( $('.form label .box').hasClass('active') )
    {
        $('.form label .box').removeClass('active')
    }
    else
    {
        $('.form label .box').addClass('active')
    }
}
const playButton = document.getElementById('playButton');
const video = document.getElementById('video');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
});

video.addEventListener('ended', () => {
    playButton.style.display = 'block';
});

