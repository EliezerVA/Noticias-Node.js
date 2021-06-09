function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {

        document.querySelector('.cabezera').style.display= 'none';
        document.querySelector('.barra').style.display= 'none';
        document.querySelector('.cabezera').style.display= 'none';
        document.querySelector('.hilo').style.display= 'none';
      x.className += " responsive";
    } else {
        document.querySelector('.cabezera').style.display= 'block';
        document.querySelector('.barra').style.display= 'block';
        document.querySelector('.cabezera').style.display= 'block';
        document.querySelector('.hilo').style.display= 'block';
      x.className = "topnav";
    }
  }