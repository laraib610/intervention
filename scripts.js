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

