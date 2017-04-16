'use strict';

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

function createShortArray() {
  var featuresOption = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var newArrName = featuresOption.slice();
  newArrName.length = randomInteger(1, 6);
  return newArrName;
}

function getRandomTime() {
  var Time = ['12:00', '13:00', '14:00'];
  return Time[randomInteger(0, 2)];
}

function getRandomType() {
  var objectType = ['flat', 'house', 'bungalo'];
  return objectType[randomInteger(0, 2)];
}

function createObj(advNumber) {
  var declaration = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец',
    'Маленький ужасный дворец', 'Красивый гостевой домик',
    'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var advertisement = {
    author: {
      'avatar': 'img/avatars/user0' + (advNumber + 1) + '.png'
    },
    offer: {
      'title': declaration[randomInteger(0, 7)],
      'address': {'x': randomInteger(300, 900), 'y': randomInteger(100, 500)},
      'price': randomInteger(1000, 1000000),
      'type': getRandomType(),
      'rooms': randomInteger(1, 5),
      'guests': randomInteger(1, 10),
      'checkin': getRandomTime(),
      'checkout': getRandomTime(),
      'features': createShortArray(),
      'description': '',
      'photos': []
    },

    location: {
      'x': randomInteger(300, 900),
      'y': randomInteger(100, 500)
    }
  };
  var number = advNumber;
  return number;
}

function createDiv(adv) {
  var div = document.createElement('div');
  div.innerHTML = '<div class="pin" style="left: ' + (adv.offer.address.x + 20) + 'px; top: ' + (adv.offer.address.y + 40) + 'px"><img src=' + adv.author.avatar + ' class="rounded" width="40" height="40"></div>';
  return div;
}

var fragment = document.createDocumentFragment();

var advs = [];
var numbers = [];
for (var i = 0; i < 8; i++) {
  var adv = createObj(i);
  advs.push(adv);
  var div = createDiv(adv);
  fragment.appendChild(div);
}
console.log(numbers)
var pinMap = document.querySelector('.tokyo__pin-map');
pinMap.appendChild(fragment);
 // клонируем шаблон

// русифицируем названия апартаментов
function makeTypeRussian(text) {
  var engText = text;
  if (engText === 'flat') {
    engText = 'Квартира';
  }
  if (engText === 'house') {
    engText = 'Дом';
  }
  if (engText === 'bungalo') {
    engText = 'Бунгало';
  }
  return engText;
}
function getDialog(advNumber) {
  var dialog = document.querySelector('.dialog'); // ищем окно диалога
  var panel = document.querySelector('.dialog__panel'); // ищем панель диалога
  var lodgeTemplate = document.querySelector('#lodge-template').content; // ищем шаблон
  var newCreatedDialog = lodgeTemplate.cloneNode(true)
// генерируем спаны
  var generatedSpan = '';
  for (var j = 0; j < advs[advNumber].offer.features.length; j++) {
    var span = '<span class="feature__image  feature__image--' + (advs[advNumber].offer.features[j]) + '"></span>';
    generatedSpan = generatedSpan + span;
  }

// набиваем пустой шаблон данными из первого объявления
  newCreatedDialog.querySelector('.lodge__title').textContent = advs[advNumber].offer.title;
  newCreatedDialog.querySelector('.lodge__address').textContent = (advs[advNumber].offer.address.x) + ' ' + (advs[advNumber].offer.address.y);
  newCreatedDialog.querySelector('.lodge__price').textContent = (advs[advNumber].offer.price) + '&#x20bd;/ночь';
  newCreatedDialog.querySelector('.lodge__type').textContent = makeTypeRussian(advs[advNumber].offer.type);
  newCreatedDialog.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + (advs[advNumber].offer.guests) + ' гостей в ' + (advs[advNumber].offer.rooms) + ' комнатах';
  newCreatedDialog.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + (advs[advNumber].offer.checkin) + ' выезд до ' + (advs[advNumber].offer.checkout);
  newCreatedDialog.querySelector('.lodge__description').textContent = advs[advNumber].offer.description;
  newCreatedDialog.querySelector('.lodge__features').innerHTML = generatedSpan;

  dialog.querySelector('.dialog__title').innerHTML = '<img src=' + advs[advNumber].author.avatar + '><a href="#" class="dialog__close"><img src="img/close.svg" alt="close" width="22" height="22"></a>';
return newCreatedDialog
  //dialog.replaceChild(newCreatedDialog, panel); // заменяем дефолтное диалоговое окно на новое
}
var tokyoPinMap = document.querySelector('.tokyo__pin-map');

var selectedPin;

tokyoPinMap.onclick = function (event) {
  var target = event.target;

  while (target !== tokyoPinMap) {
    if (target.className === 'pin') {
      getDialog(number);
      activate(target);
      return;
    }
    target = target.parentNode;
  }
};

function activate(node) {
  if (selectedPin) {
    selectedPin.classList.remove('pin--active');
  }
  selectedPin = node;
  selectedPin.classList.add('pin--active');
}
