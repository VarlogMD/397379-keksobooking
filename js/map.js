'use strict';

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var i = 0; //declaration index
var k = randomInteger(0, 2); //objectType index
var j = randomInteger(0, 2);// checkinTime/checkoutTime index


var declaration = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец',
  'Маленький ужасный дворец', 'Красивый гостевой домик',
  'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде']

var objectType = ['flat', 'house', 'bungalo'];

var checkinTime = ['12:00', '13:00', '14:00'];

var checkoutTime = ['12:00', '13:00', '14:00'];

var featuresOption = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var newArr = featuresOption.slice();
newArr.length = randomInteger(1, 6);


var advertisement = {
  author: {
    'avatar': 'img/avatars/user0' + ++i + '.png'
  },
  offer: {
    'title': declaration[i],
    'address': {'x': 200, 'y': 300},
    'price': randomInteger(5000, 1000000),
    'type': objectType[k],
    'rooms': randomInteger(1, 5),
    'guests': randomInteger(1, 10),
    'checkin': checkinTime[j],
    'checkout': checkoutTime[j],
    'features': newArr,
    'description': '',
    'photos': []
  },

  location: {
    'x': randomInteger(300, 900),
    'y': randomInteger(100, 500)
  }
};

function cloneObject(obj) {
  var newObj = {};
  for (var i = 1; i < 8; i++) {
    newObj = obj[i];
  }
}



console.log(advertisement);









