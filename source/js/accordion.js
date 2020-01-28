'use strict';
(function () {
  var accToggle = document.getElementsByClassName('accordion__toggle');
  var accMenu = document.getElementsByClassName('accordion__menu');
  var tabletWidth = 768;
  var i;

  var triggerMenu = function (menuCollection, j) {
    for (j = 0; j < menuCollection.length; j++) {
      if (menuCollection.item(j).style.display === 'flex') {
        menuCollection.item(j).style.display = 'none';
      } else {
        menuCollection.item(j).style.display = 'flex';
      }
    }
    return menuCollection;
  };

  // window.addEventListener('resize', {

  // });

  for (i = 0; i < accToggle.length; i++) {
    if ((accToggle && accMenu) && (accToggle.length === accMenu.length) && (window.innerWidth < tabletWidth)) {
      accMenu.item(i).style.display = accToggle.item(i).classList.contains('accordion__toggle--active') ? 'flex' : 'none';
      accToggle[i].addEventListener('click', function () {
        this.classList.toggle('accordion__toggle--active');
        triggerMenu(accMenu, i);
      });
    } else {
      accToggle.item(i).classList.remove('accordion__toggle--active');
      accMenu.item(i).style.display = 'flex';
    }
  }

  // var triggerAcc = function (menuCollection, toggleCollection, j) {
  //   var triggerMenu = function () {
  //     if (menuCollection.item(j).style.display === 'flex') {
  //       menuCollection.item(j).style.display = 'none';
  //     } else {
  //       menuCollection.item(j).style.display = 'flex';
  //     }
  //   };
  //   for (j = 0; j < menuCollection.length; j++) {
  //     if (toggleCollection && menuCollection) {
  //       toggleCollection[j].addEventListener('click', function () {
  //         toggleCollection[j].classList.toggle('accordion__toggle--active');

  //         triggerMenu();
  //       });
  //     }
  //   }
  // };

  // triggerAcc(accMenu, accToggle, i);
  // for (i = 0; i < accToggle.length; i++) {
  //   if (accToggle) {
  //     accToggle[i].addEventListener('click', function () {
  //       this.classList.toggle('accordion__toggle--active');
  //       triggerMenu(accMenu, i);
  //     });
  //   }

  //   if ((accMenu) && accToggle[i].classList.contains('accordion__toggle--active')) {
  //   }
  // }
})();
