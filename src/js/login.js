function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {

        document.querySelector('.regis').style.display= 'none';

      x.className += " responsive";
    } else {

        document.querySelector('.regis').style.display= 'block';
        
      x.className = "topnav";
    }
  }