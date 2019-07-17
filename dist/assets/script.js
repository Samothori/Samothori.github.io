let d1 = document.querySelector('.test');
console.log(d1);
function handleOrientation(event) {
  var x = event.beta,
    y = event.gamma;
  d1.innerHTML = x;
}

window.addEventListener('deviceorientation', handleOrientation);

// orientation du texte
/*var h3 = document.querySelectorAll('h3');
var h2 = document.querySelectorAll('h2');
var test = document.querySelector('.test');
test.style.position = 'absolute';
test.style.top = '0';
test.style.left = '0';
test.style.zIndex = '100';
test.style.fontSize = '3rem';

function handleOrientation(event) {
  var x = event.beta,
    y = event.gamma;

  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }
  test.innerText = x;

  h3.forEach(function(elem_h3) {
    elem_h3.style.left = x * 10 + 'px';
  });
  h2.forEach(function(elem_h2) {
    elem_h2.style.left = x * 10 + 'px';
  });
}

window.addEventListener('deviceorientation', handleOrientation);

function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

window.addEventListener('load', function() {
  //random

  if (!readCookie('random')) {
    var tab_candi = [];
    var tab_shuffle = [];
    for (var i = 1; i <= 7; i++) {
      tab_candi.push(i);
    }

    while (tab_candi.length > 0) {
      var aleatoire = Math.floor(Math.random() * tab_candi.length);

      tab_shuffle.push(tab_candi.splice(aleatoire, 1));
    }
    console.log(tab_shuffle);
    document.cookie =
      'random=' +
      tab_shuffle.toString() +
      '; expires=Thu, 30 Aug 2019 20:47:11 UTC; path=/';
    console.log('on a écrit le cookie');
  } else {
    var tab_shuffle = readCookie('random');
    console.log('on récupère le cookie');

    tab_shuffle = tab_shuffle.split(',');
    console.log(tab_shuffle);
  }

  var actif = 0;

  function change_candi() {
    document.querySelectorAll('section').forEach(function(elem) {
      if (elem.classList.contains('active')) {
        console.log(elem);
        elem.classList.remove('active');
      }
    });
    document
      .querySelector('section:nth-of-type(' + tab_shuffle[actif] + ')')
      .classList.add('active');
    actif++;
    if (actif > 6) actif = 0;
  }

  change_candi();
  document.addEventListener('dblclick', function() {
    change_candi();
  });
});
*/
