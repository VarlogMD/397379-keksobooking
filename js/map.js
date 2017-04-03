'use strict'

var avataIndex = [01, 02, 03, 04, 05, 06, 07, 08];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

var advertisement = [
    var author = {
      avatar: 'img/avatars/user{{avatarIndex[i]}.png',
    },

    var offer = {
      title:  ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 
        'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'],

      address: '{{location.x}}, {{location.y}}',
    },
    
      price: randomInteger (1000, 1000000),
      type: ['flat', 'house', 'bungalo'],
      rooms: randomInteger (1, 5)tofixed(0),
      guests: randomInteger (1, 15)tofixed(0),
      checkin: ['12:00', '13:00', '14:00'],
      features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: '',
      photos: [],

    var location = {
      x: randomInteger(300, 900).tokyo__pin-map от 300 до 900,
      y: randomInteger(100, 500).tokyo__pin-map от 100 до 500,
    }
]

document.body.innerHTML = <div class="pin" style="left: {{location.x}}px; top: {{location.y}}px">
	<img src="{{author.avatar}}" class="rounded" width="40" height="40">
	</div>

.tokyo__pin-map.DocumentFragment(advertisement);

advertisement[0] + #lodge-template =  

