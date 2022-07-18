"use strict";

var items = document.querySelectorAll('.userInfo__item');
;
items.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});