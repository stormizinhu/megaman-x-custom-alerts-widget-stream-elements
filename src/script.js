const sounds = {
    type: new Audio("https://www.myinstants.com/media/sounds/mmx-typing-sound.mp3"),
    follow: new Audio("{followSound}"),
    sub: new Audio("{subSound}"),
    re: new Audio("{reSound}"),
    gift: new Audio("{giftSound}"),
    com: new Audio("{comSound}"),
    tip: new Audio("{tipSound}"),
    cheer: new Audio("{cheerSound}"),
    raid: new Audio("{raidSound}"),
    store: new Audio("{storeSound}"),
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
  
  function updateMediaFields() {
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
  }
  
  updateMediaFields();
  
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
    store: "{storeAmount}",
  };
  
  const messages = {
    sub: "{subMsg}",
    re: "{reMsg}",
    tip: "{tipMsg}",
    cheer: "{cheerMsg}",
    store: "{storeMsg}",
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
  
  function changeColor(color1, color2, color3) {
    divs.alert.className = "text";
    divs.amount.className = "text";
    divs.msg.className = "text";
  
    divs.alert.classList.add(color1);
    divs.amount.classList.add(color2);
    divs.msg.classList.add(color3);
  }
  
  var minhaDiv = document.getElementById("main-container");
  
  function mostrarDiv() {
    minhaDiv.style.display = "block";
  
    setTimeout(function () {
      minhaDiv.style.opacity = 1;
    }, 10);
  }
  
  function ocultarDiv() {
    minhaDiv.style.opacity = 0;
  
    setTimeout(function () {
      minhaDiv.style.display = "none";
    }, 1000);
  }
  
  function raidText() {
    minhaDiv.style.textAlign = "center";
  }
  
  function maquinaDeEscrever(elementID, texto, variavel, callback) {
    mostrarDiv();
    const velocidadeDigitacao = 70;
    let i = 0;
    const elemento = document.getElementById(elementID);
    const newText = texto
      .replace("{user}", variavel)
      .replace("{amount}", variavel)
      .replace("{receiver}", variavel)
      .replace("{sender}", variavel);
    function escreverCaractere() {
      elemento.innerHTML += newText[i];
      i++;
      if (i < newText.length) {
        setTimeout(escreverCaractere, velocidadeDigitacao);
        sounds.type.play();
        sounds.type.currentTime = 0;
        sounds.type.volume = 0.5;
      } else {
        if (typeof callback === "function") {
          callback();
        }
      }
    }
    setTimeout(escreverCaractere, 500);
    setTimeout(() => {
      limpaConteudo();
    }, times.alert);
  }
  
  function limpaConteudo() {
    ocultarDiv();
    divs.alert.innerHTML = "";
    divs.amount.innerHTML = "";
    divs.msg.innerHTML = "";
    minhaDiv.style.textAlign = "left";
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
          maquinaDeEscrever("alert", alerts.follow, event.name);
        }, times.follow);
      }
    } else if (event.type === "redemption") {
      if (includeRedemptions) {
        chooseMedia(choose.sstore, media.store, size, size);
        changeColor(colors.storeAlert, colors.storeAmount, colors.storeMsg);
        setTimeout(function () {
          sounds.store.play();
          maquinaDeEscrever("alert", alerts.store, event.name, function () {
            maquinaDeEscrever("amount", amounts.store, event.amount, function () {
              maquinaDeEscrever("msg", messages.store, event.name);
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
            maquinaDeEscrever("alert", alerts.sub, event.name, function () {
              maquinaDeEscrever("amount", amounts.sub, event.amount, function () {
                maquinaDeEscrever("msg", messages.sub, (event.name = ""));
              });
            });
          }, times.sub);
        } else if (event.amount > 1 && event.sender === undefined) {
          // re Subscriber
          chooseMedia(choose.re, media.re, size, size);
          changeColor(colors.reAlert, colors.reAmount, colors.reMsg);
          setTimeout(function () {
            sounds.re.play();
            maquinaDeEscrever("alert", alerts.re, event.name, function () {
              maquinaDeEscrever("amount", amounts.re, event.amount, function () {
                maquinaDeEscrever("msg", messages.re, (event.name = ""));
              });
            });
          }, times.re);
        } else if (event.gifted && !event.isCommunityGift) {
          // gift Subscriber
          chooseMedia(choose.gift, media.gift, size, size);
          changeColor(colors.giftAlert, colors.giftAmount, colors.giftMsg);
          setTimeout(function () {
            sounds.gift.play();
            maquinaDeEscrever("alert", alerts.gift, event.sender, function () {
              maquinaDeEscrever("amount", amounts.gift, event.name, function () {
                maquinaDeEscrever("msg", messages.gift, (event.name = ""));
              });
            });
          }, times.gift);
        } else if (event.bulkGifted) {
          // Community Gift - Initial Announcement
          chooseMedia(choose.com, media.com, size, size);
          changeColor(colors.comAlert, colors.comAmount, colors.comMsg);
          setTimeout(function () {
            sounds.com.play();
            maquinaDeEscrever("alert", alerts.com, event.sender, function () {
              maquinaDeEscrever("amount", amounts.com, event.amount, function () {
                maquinaDeEscrever("msg", messages.com, (event.name = ""));
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
          maquinaDeEscrever("alert", alerts.cheer, event.name, function () {
            maquinaDeEscrever("amount", amounts.cheer, event.amount, function () {
              maquinaDeEscrever("msg", messages.cheer, event.name);
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
            maquinaDeEscrever("alert", alerts.tip, event.name, function () {
              maquinaDeEscrever("amount", amounts.tip, event.amount, function () {
                maquinaDeEscrever("msg", messages.tip, event.name);
              });
            });
          }, times.tip);
        } else {
          setTimeout(function () {
            sounds.tip.play();
            maquinaDeEscrever("alert", alerts.tip, event.name, function () {
              maquinaDeEscrever("amount", amounts.tip, event.amount, function () {
                maquinaDeEscrever("msg", messages.tip, event.name);
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
          maquinaDeEscrever("alert", alerts.raid, event.name, function () {
            maquinaDeEscrever("amount", amounts.raid, event.amount, function () {
              maquinaDeEscrever("msg", messages.raid, event.name);
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
        } else if (event.type === "tip") {
          if (includeTips && minTip <= event.amount) {
            if (event.amount === parseInt(event.amount)) {
              addEvent(
                "tip",
                event.amount.toLocaleString(userLocale, {
                  style: "currency",
                  minimumFractionDigits: 0,
                  currency: userCurrency.code,
                }),
                event.name
              );
            } else {
              addEvent(
                "tip",
                event.amount.toLocaleString(userLocale, {
                  style: "currency",
                  currency: userCurrency.code,
                }),
                event.name
              );
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