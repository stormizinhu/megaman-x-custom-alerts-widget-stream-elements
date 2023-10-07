//Get all elements which have the "alerts" class.
var allElements = document.getElementsByClassName("alerts");

//Data Key, which matches the ID of the current HTML for the alert.
var stringKey = allElements[0].id;

//Child DIV of the HTML with the ALERTS class.
var userName = allElements[0].querySelector('.username').innerHTML;
var count = allElements[0].querySelector('.count').innerHTML;
var amount = allElements[0].querySelector('.amount').innerHTML;

// if the amout is > 10, then excludes "0"
var zero = 0;
amount >= 10 ? zero ="" : zero = 0; 

// Write your alert messages below, after each ":"
// Use Key ID to match the div ID in HTML
var data = [
{alertSub:   `<h1 class="blue">Maverick Hunter alistado: </h1><h1 class="red"> &nbsp{{name}}</h1><br> 
              <h1 class="blue">Tempo: </h1><h1 class="red"> &nbsp${zero}{{amount}} meses</h1><br>	
              <h1 class="msg">{{message}}</h1>
             `
,alertTip:   `<h1 class="golden">RareMetal enviado por: </h1><h1 class="green"> &nbsp{{name}}</h1><br> 
              <h1 class="golden">Raridade: </h1><h1 class="green"> &nbspR$ &nbsp${zero}{{amount}}</h1><br>	
              <h1 class="msg">{{message}}</h1>
             `
,alertCheer: `<h1 class="green">Metal enviado por: </h1><h1 class="purple"> &nbsp{{name}}</h1><br> 
              <h1 class="green">Quantidade: </h1><h1 class="purple"> &nbsp${zero}{{amount}} peças</h1><br>	
              <h1 class="msg">{{message}}</h1>
             `
,alertGift:  `<h1 class="golden">{{sender}}</h1><h1 class="red"> &nbspalistou: </h1><h1 class="golden"> &nbsp{{name}}</h1><br> 
              <h1 class="red">Tempo: </h1><h1 class="golden"> &nbsp${zero}{{amount}} meses</h1><br>	
              <h1 class="msg">{{message}}</h2>
             `
,alertCom:   `<h1 class="golden">{{sender}}&nbsp <h1 class="purple"> concedeu</h1> 
			        <h1 class="green">&nbsp${zero}{{amount}}&nbsp</h1><h1 class="purple">alistamentos</h1>
              <h1 class="msg">{{message}}</h2>
             `
,alertRaid:  `<h1 class="blue">{{name}}</h1><br>
			        <h1 class="blue">Mavericks: </h1><h1 class="red">&nbsp${zero}{{amount}}</h1>
			       `
},
];  
//Data value
var stringValue = data[0][stringKey];

//Get the element itself. We output data here.
var element = document.getElementById(stringKey);
  
var typeText = stringValue
  .replace("{{name}}", userName)
  .replace("{{amount}}", amount)
  .replace("{{count}}", count)
    
//Keyboard typing
var audio = new Audio('https://www.myinstants.com/media/sounds/mmx-typing-sound.mp3');
  
// type code
var i = 0, isTag, text;
function type() {
	text = typeText.slice(0, ++i);
    if (text === typeText) { audio.pause(); return; }
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
    var char = text.slice(-1);
    for (let i = 0; i < text.length; i++){
      if (char === ' ' || char === `<br>`) { continue; }
      audio.volume = 0.5;
      audio.play();
      audio.currentTime = 0;
	};
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
};
var video = document.getElementById("video");

function pauseVid() {
  video.pause();
}
stringKey == 'alertRaid' ? setTimeout(type, 3750) && setTimeout(pauseVid, 3000) : type();

