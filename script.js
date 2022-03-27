// 1er élèment => Selector CSS, ,or querySelector
// 2e élèment => objet
//.to -> pars d'un état pour aller au to

// gsap.to(".wrapper--img", { duration: 1, top: "50%" });

// Créer le click
const targets = document.querySelectorAll('.wrapper--img')

targets.forEach(function(img) {
  img.addEventListener('click', function() {

    //Différencer le left de toutes les images
    targets.forEach(function(img, index) {
      // img -> cible
      // left -> bouge les images sur la gauche grâce à l'index qui est unique à chaque image
      // left -> + 10 => margin-left: 10
      // x: 50% -> Centrer les images
    gsap.to(img, {duration: 2.5, top: '50%', scale: 1, rotation: 0, left:300 * (index +1 ) + (10 * index), x: '50%', ease: "slow(0.7, 0.7, false)" })
    })
  })
})
