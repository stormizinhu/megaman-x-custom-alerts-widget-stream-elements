let totalGlobal;
let currentGlobal;
let newQuantity;
var selectedVoice = null;

const ttsTime = '{ttsTime}';
const ttsActive = '{ttsActive}';
const ttsSpeed = '{ttsSpeed}';
var ttsLang = '{ttsLanguage}';
const soundsVolume = '{soundsVolume}';
const ttsVolume = '{ttsVolume}';

const typeSound = new Audio("https://www.myinstants.com/media/sounds/mmx-typing-sound.mp3");

const sounds = {
  follow: new Audio("{followSound}"),
  sub: new Audio("{subSound}"),
  re: new Audio("{reSound}"),
  gift: new Audio("{giftSound}"),
  com: new Audio("{comSound}"),
  tip: new Audio("{tipSound}"),
  cheer: new Audio("{cheerSound}"),
  raid: new Audio("{raidSound}"),
  store: new Audio("{storeSound}")
};

const size = '{mediaSize}';

const image = {
  follow: '{followImage}',
  sub: '{subImage}',
  re: '{reImage}',
  gift: '{giftImage}',
  com: '{comImage}',
  cheer: '{cheerImage}',
  tip: '{tipImage}',
  raid: '{raidImage}',
  store: '{storeImage}',
};

const video = {
  follow: '{followVideo}',
  sub: '{subVideo}',
  re: '{reVideo}',
  gift: '{giftVideo}',
  com: '{comVideo}',
  cheer: '{cheerVideo}',
  tip: '{tipVideo}',
  raid: '{raidVideo}',
  store: '{storeVideo}',
};

const choose = {
  follow: '{followChoose}',
  sub: '{subChoose}',
  re: '{reChoose}',
  gift: '{giftChoose}',
  com: '{comChoose}',
  cheer: '{cheerChoose}',
  tip: '{tipChoose}',
  raid: '{raidChoose}',
  store: '{storeChoose}',
};

const media = {
  	follow: "",
  	sub: "",
  	re: "",
  	gift: "",
  	com: "",
  	cheer: "",
  	tip: "",
    raid: "",
  	store: ""
};

const divs = {
  alert: document.getElementById("alert"),
  amount: document.getElementById("amount"),
  msg: document.getElementById("msg"),
};

const alerts = {
  follow: "{followAlert}",
  sub: "{subAlert}",
  re: "{reAlert}",
  gift: "{giftAlert}",
  com: "{comAlert}",
  tip: "{tipAlert}",
  cheer: "{cheerAlert}",
  raid: "{raidAlert}",
  store: "{storeAlert}",
};

const amounts = {
  sub: "{subAmount}",
  re: "{reAmount}",
  gift: "{giftAmount}",
  com: "{comAmount}",
  tip: "{tipAmount}",
  cheer: "{cheerAmount}",
  raid: "{raidAmount}",
  store: '{storeAmount}',
};

const messages = {
  
  /*sub: "{subMsg}",
  re: "{reMsg}",
  tip: "{tipMsg}",
  cheer: "{cheerMsg}",
  */
  store: '{storeMsg}',
};

const times = {
  alert: "{alertTime}",
  follow: "{followTime}",
  sub: "{subTime}",
  re: "{reTime}",
  gift: "{giftTime}",
  com: "{comTime}",
  tip: "{tipTime}",
  cheer: "{cheerTime}",
  raid: "{raidTime}",
  store: "{storeTime}",
};

const colors = {
  followAlert: "{followAlertColor}",

  subAlert: "{subAlertColor}",
  subAmount: "{subAmountColor}",
  subMsg: "{subMsgColor}",

  reAlert: "{reAlertColor}",
  reAmount: "{reAmountColor}",
  reMsg: "{reMsgColor}",

  giftAlert: "{giftAlertColor}",
  giftAmount: "{giftAmountColor}",

  comAlert: "{comAlertColor}",
  comAmount: "{comAmountColor}",

  cheerAlert: "{cheerAlertColor}",
  cheerAmount: "{cheerAmountColor}",
  cheerMsg: "{cheerMsgColor}",

  tipAlert: "{tipAlertColor}",
  tipAmount: "{tipAmountColor}",
  tipMsg: "{tipMsgColor}",

  raidAlert: "{raidAlertColor}",
  raidAmount: "{raidAmountColor}",

  storeAlert: "{storeAlertColor}",
  storeAmount: "{storeAmountColor}",
  storeMsg: "{storeMsgColor}",
};

var myDiv = document.getElementById("main-container");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let ttsTest = "{ttsText}";

function sendTTSRequest(text) {
  if (ttsActive === "yes") {
    const voice = "{ttsLanguage}";

    const url = `https://api.streamelements.com/kappa/v2/speech?voice=${encodeURIComponent(voice)}&text=${encodeURIComponent(text)}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob(); // Assuming the TTS response is a binary audio file
      })
      .then(blob => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
        audio.volume = ttsVolume * 0.01;
      })
      .catch(error => {
        console.error('There was a problem with the TTS request:', error);
      });
  }
}

    
function chamaTTS(arg) {
  	setTimeout(arg, ttsTime)
}

chamaTTS(sendTTSRequest(ttsTest));

function obterValoresDoItem(redemption) {
  const url = 'https://api.streamelements.com/kappa/v2/store/5fe73f8410bf4916d2a4b682/items';
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao recuperar os dados');
    })
    .then(data => {
      if (data.length > 0) {
        const item = data.find(item => item.name === redemption);
        if (item) {
          if (item.quantity.total === -1 && item.quantity.current === -1) {
            totalGlobal = '';
            currentGlobal = '';
          } else {
            totalGlobal = item.quantity.total;
            currentGlobal = item.quantity.current;
          }
        } else {
          throw new Error('Nenhum item correspondente encontrado.');
        }
      } else {
        throw new Error('Nenhum dado encontrado.');
      }
    })
    .catch(error => {
      throw new Error('Ocorreu um erro: ' + error.message);
    });
}

function setSoundVolume(volume) {
  for (const sound of Object.values(sounds)) {
    sound.volume = volume * 0.01;
  }
}
setSoundVolume(soundsVolume);

(function() {
  Object.keys(choose).forEach((field) => {
    switch (choose[field]) {
      case 'image':
        media[field] = image[field];
        break;
      case 'video':
        media[field] = video[field];
        break;
      case 'none':
        media[field] = "";
        break;
      default:
        break;
    }
  });
})();

function changeColor(color1, color2, color3) {
  divs.alert.className = "text";
  divs.amount.className = "text";
  divs.msg.className = "text";

  divs.alert.classList.add(color1);
  divs.amount.classList.add(color2);
  divs.msg.classList.add(color3);
}

function showDiv() {
  myDiv.style.display = "block";

  setTimeout(function () {
    myDiv.style.opacity = 1;
  }, 10);
}

function hideDiv() {
  myDiv.style.opacity = 0;

  setTimeout(function () {
    myDiv.style.display = "none";
  }, 1000);
}

function raidText() {
  myDiv.style.textAlign = "center";
}

async function typeWriter(elementID, text, variable, callback) {
  showDiv();
  const typeSpeed = 60;
  let i = 0;
  const element = document.getElementById(elementID);
  const newText = text
    .replace("{user}", variable)
    .replace("{amount}", variable)
    .replace("{receiver}", variable)
    .replace("{sender}", variable)
    .replace("{item}", variable)
    .replace(/Cheer\w+/g, "");

  async function typeChar() {
    element.innerHTML += newText[i];
    i++;
    if (i < newText.length) {
      typeSound.play();
      typeSound.currentTime = 0;
      typeSound.volume = 0.5;
      await sleep(typeSpeed);
      await typeChar();
    } else {
      if (typeof callback === "function") {
        callback();
      }
      const ttsText = newText; // Use a variável newText que contém o texto completo
      const updatedTTSRequest = () => {
        sendTTSRequest(ttsText); // Passe o texto atualizado para a função TTS
      };
      chamaTTS(updatedTTSRequest); // Chama o TTS após terminar de digitar
    }
  }

  await sleep(ttsTime); // Delay antes de começar a digitar
  await typeChar();
  setTimeout(() => { clearContent() }, times.alert);
}


function clearContent() {
  hideDiv();
  divs.alert.innerHTML = "";
  divs.amount.innerHTML = "";
  divs.msg.innerHTML = "";
  myDiv.style.textAlign = "left";
}

function chooseMedia(choose, type, width, height) {
  	let mediaContainer = document.getElementById('image-video');
  	var media;
 	var commonProperties = {
    	width: width,
    	height: height,
  		};
	if (choose == "image") {
    	mediaContainer.style.display = "block";
      	media = document.createElement("img");
        Object.assign(media, commonProperties);
      	media.src = type;
        media.loop = false;
        var local = document.getElementById("image-video");
        local.appendChild(media);
    } else if (choose == "video") {
      	mediaContainer.style.display = "block";
      	media = document.createElement("video");
		Object.assign(media, commonProperties);
      	media.src = type;
        media.loop = false;
        media.play();
      	var local = document.getElementById("image-video");
   		local.appendChild(media);
    } else {
    	mediaContainer.style.display = "none";
    }
};

let userCurrency,
  eventsLimit = 5,
  userLocale = "{locale}",
  includeFollowers = true,
  includeRedemptions = true,
  includeHosts = true,
  minHost = 0,
  includeRaids = true,
  minRaid = 0,
  includeSubs = true,
  includeTips = true,
  minTip = 0,
  includeCheers = true,
  direction = "top",
  textOrder = "nameFirst",
  minCheer = 0,
  totalEvents = 0;

window.addEventListener("onEventReceived", function (obj) {
  if (!obj.detail.event) {
    return;
  }
  if (typeof obj.detail.event.itemId !== "undefined") {
    obj.detail.listener = "redemption-latest";
  }
  const listener = obj.detail.listener.split("-")[0];
  const event = obj.detail.event;

  if (event.type === "follower") {
    if (includeFollowers) {
      chooseMedia(choose.follow, media.follow, size, size);
      changeColor(colors.followAlert, colors.followAmount, colors.followMsg);
      setTimeout(function () {
        sounds.follow.play();
        typeWriter("alert", alerts.follow, event.name);
      }, times.follow);
    }
  } else if (event.type === "redemption") {
    if (includeRedemptions) {
      const redemption = event.data.redemption;
		obterValoresDoItem(redemption)
  			.then(() => {
          	if (currentGlobal === "" && totalGlobal === "") {
            	return newQuantity = redemption;  
			} return newQuantity = `${event.data.redemption} - ${currentGlobal} / ${totalGlobal}`;
        })
  			.catch(error => {
    		console.error(error.message);
  		});
      chooseMedia(choose.store, media.store, size, size);
      changeColor(colors.storeAlert, colors.storeAmount, colors.storeMsg);
	  setTimeout(function () {
        sounds.store.play();
        typeWriter("alert", alerts.store, event.data.username, function () {
          typeWriter("amount", amounts.store, newQuantity, function () {
            typeWriter("msg", event.data.message, event.name);
          });
        });
      }, times.store);
    }
  } else if (listener === "subscriber") {
    if (includeSubs) {
      if (event.amount === 1 && event.sender === undefined) {
        // New Subscriber
        chooseMedia(choose.sub, media.sub, size, size);
        changeColor(colors.subAlert, colors.subAmount, colors.subMsg);
		setTimeout(function () {
          sounds.sub.play();
          typeWriter("alert", alerts.sub, event.name, function () {
            typeWriter("amount", amounts.sub, event.amount, function () {
              typeWriter("msg", messages.sub, event.name);
              //typeWriter("msg", event.message, event.name);
            });
          });
        }, times.sub);
      } else if (event.amount > 1 && event.sender === undefined) {
        // re Subscriber
        chooseMedia(choose.re, media.re, size, size);
        changeColor(colors.reAlert, colors.reAmount, colors.reMsg);
		setTimeout(function () {
          sounds.re.play();
          typeWriter("alert", alerts.re, event.name, function () {
            typeWriter("amount", amounts.re, event.amount, function () {
              typeWriter("msg", event.message, event.name);
            });
          });
        }, times.re);
      } else if (event.gifted && !event.isCommunityGift) {
        // gift Subscriber
        console.log(event);
        chooseMedia(choose.gift, media.gift, size, size);
        changeColor(colors.giftAlert, colors.giftAmount, colors.giftMsg);
		setTimeout(function () {
          sounds.gift.play();
          typeWriter("alert", alerts.gift, event.sender, function () {
            typeWriter("amount", amounts.gift, event.name, function () {
              typeWriter("msg", event.message, event.name);
            });
          });
        }, times.gift);
      } else if (event.bulkGifted) {
        // Community Gift - Initial Announcement
        chooseMedia(choose.com, media.com, size, size);
        changeColor(colors.comAlert, colors.comAmount, colors.comMsg);
		setTimeout(function () {
          sounds.com.play();
          typeWriter("alert", alerts.com, event.sender, function () {
            typeWriter("amount", amounts.com, event.amount, function () {
              typeWriter("msg", event.message, event.name);
            });
          });
        }, times.com);
      } else if (event.gifted && event.isCommunityGift) {
        // Community Gift - Individual Gift
        SE_API.resumeQueue();
      }
    }
  } else if (listener === "host") {
    if (includeHosts && minHost <= event.amount) {
    }
  } else if (listener === "cheer") {
    if (includeCheers && minCheer <= event.amount) {
      chooseMedia(choose.cheer, media.cheer, size, size);
      changeColor(colors.cheerAlert, colors.cheerAmount, colors.cheerMsg);
	  setTimeout(function () {
        sounds.cheer.play();
        typeWriter("alert", alerts.cheer, event.name, function () {
          typeWriter("amount", amounts.cheer, event.amount, function () {
            typeWriter("msg", event.message, event.name);
          });
        });
      }, times.cheer);
    }
  } else if (listener === "tip") {
    // Tip Event
    if (includeTips && minTip <= event.amount) {
      if (event.amount === parseInt(event.amount)) {
        chooseMedia(choose.tip, media.tip, size, size);
        changeColor(colors.tipAlert, colors.tipAmount, colors.tipMsg);
        setTimeout(function () {
          typeWriter("alert", alerts.tip, event.name, function () {
            typeWriter("amount", amounts.tip, event.amount, function () {
              typeWriter("msg", event.message, event.name);
            });
          });
        }, times.tip);
      } else {
        setTimeout(function () {
          sounds.tip.play();
          typeWriter("alert", alerts.tip, event.name, function () {
            typeWriter("amount", amounts.tip, event.amount, function () {
              typeWriter("msg", event.message, event.name);
            });
          });
        }, times.tip);
      }
    }
  } else if (listener === "raid") {
    // Raid Event
    if (includeRaids && minRaid <= event.amount) {
      chooseMedia(choose.raid, media.raid, size, size);
      changeColor(colors.raidAlert, colors.raidAmount, colors.raidMsg);
      setTimeout(function () {
        raidText();
        sounds.raid.play();
        typeWriter("alert", alerts.raid, event.name, function () {
          typeWriter("amount", amounts.raid, event.amount, function () {
            typeWriter("msg", "", event.name);
          });
        });
      }, times.raid);
    }
  }

  window.addEventListener("onWidgetLoad", function (obj) {
    let recents = obj.detail.recents;
    recents.sort(function (a, b) {
      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
    });
    userCurrency = obj.detail.currency;
    const fieldData = obj.detail.fieldData;
    eventsLimit = fieldData.eventsLimit;
    includeFollowers = fieldData.includeFollowers === "yes";
    includeRedemptions = fieldData.includeRedemptions === "yes";
    includeHosts = fieldData.includeHosts === "yes";
    minHost = fieldData.minHost;
    includeRaids = fieldData.includeRaids === "yes";
    minRaid = fieldData.minRaid;
    includeSubs = fieldData.includeSubs === "yes";
    includeTips = fieldData.includeTips === "yes";
    minTip = fieldData.minTip;
    includeCheers = fieldData.includeCheers === "yes";
    minCheer = fieldData.minCheer;
    direction = fieldData.direction;
    userLocale = fieldData.locale;
    textOrder = fieldData.textOrder;
    fadeoutTime = fieldData.fadeoutTime;
        
    let eventIndex;
    for (eventIndex = 0; eventIndex < recents.length; eventIndex++) {
      const event = recents[eventIndex];

      if (event.type === "follower") {
        if (includeFollowers) {
          addEvent("follower", "Follower", event.name);
        }
      } else if (event.type === "redemption") {
        if (includeRedemptions) {
          addEvent("redemption", "Redeemed", event.name);
        }
      } else if (event.type === "subscriber") {
        if (!includeSubs) continue;
        if (event.amount === "gift") {
          addEvent("sub", `Sub gift`, event.name);
        } else {
          addEvent("sub", `Sub X${event.amount}`, event.name);
        }
      } else if (event.type === "host") {
        if (includeHosts && minHost <= event.amount) {
          addEvent("host", `Host ${event.amount.toLocaleString()}`, event.name);
        }
      } else if (event.type === "cheer") {
        if (includeCheers && minCheer <= event.amount) {
          addEvent(
            "cheer",
            `${event.amount.toLocaleString()} Bits`,
            event.name
          );
        }
      } else if (event.type === 'tip') {
            if (includeTips && minTip <= event.amount) {
                if (event.amount === parseInt(event.amount)) {
                    addEvent('tip', event.amount.toLocaleString(userLocale, {
                        style: 'currency',
                        minimumFractionDigits: 0,
                        currency: userCurrency.code
                    }), event.name);
                } else {
                    addEvent('tip', event.amount.toLocaleString(userLocale, {
                        style: 'currency',
                        currency: userCurrency.code
                    }), event.name);
                }
            }
        } else if (event.type === "raid") {
        if (includeRaids && minRaid <= event.amount) {
          addEvent("raid", `Raid ${event.amount.toLocaleString()}`, event.name);
        }
      }
    }
  });
});
