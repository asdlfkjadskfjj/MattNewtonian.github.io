var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];

    var gameGrid = cardsArray.concat(cardsArray);

    gameGrid.sort(function() {
        return 0.5 - Math.random();

    })
  cardsArray[0].name;
  cardsArray[1].img;

  var game = document.getElementById('game-board');

  var grid = document.createElement('section');

  grid.setAttribute('class', 'grid');

  game.appendChild(grid);

      //loop thru each item in cards array
  for (i = 0; i < gameGrid.length; i++) {
    // create a div element and assign to variable card
    var card = document.createElement('div');
    // apply a card class to that div 
    card.classList.add('card');
    // apply the background image of the div to the cardArray image
    card.dataset.name = gameGrid[i].name;
    // append the div to the grid section
    card.style.backgroundImage = `url(${gameGrid[i].img})`;
    // append the div to the grid section
    grid.appendChild(card);

  }


  grid.addEventListener('click', function(event) {
    
    var clicked = event.target;

    if (clicked.nodeName === 'SECTION') {
        return;
    }
    clicked.classList.add('selected');
});