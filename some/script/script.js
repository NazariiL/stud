
var text = "Привіт, це ти бомчик?";
    var i = 0;
    var intervalId = setInterval(function() {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);

// кнопка питання першого
function hideBlock() {
  document.getElementById("firstblock").style.display = "none";
}

function hideBlock() {
    const firstBlock = document.getElementById("firstblock");
    firstBlock.classList.add("hidden");
    var text = "Це точно пампульстий солодусик?";
    var i = 0;
    var intervalId = setInterval(function() {
      document.getElementById("text-two").innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
  }

// кнопка питання другого

  function hideBlockTwo() {
    document.getElementById("secondblock").style.display = "none";
    }
  
function hideBlockTwo() {
      const secondBlock = document.getElementById("secondblock");
      secondBlock.classList.add("hidden");
      
      var text = "Я не часто робив тобі романтичні речі, ось це я запланував був давно, тільки от в мене не було знань шоб зробити таку красоту як я собі придумав, але тепер вже щось вмію трошки, ну що почнем?";
      var i = 0;
      var intervalId = setInterval(function() {
      document.getElementById("text-thre").innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    }

// кнопка питення третього

function hideBlockThre() {
  document.getElementById("thirdblock").style.display = "none";
  }

function hideBlockThre() {
    const secondBlock = document.getElementById("thirdblock");
    secondBlock.classList.add("hidden");

    var text = "1. Посміхнись - твоя посмішка це просто неймовірна красота , я завидую усім хто це бачить ,хочу тебе бачити такою як ти зараз сидиш завжди, я люблю як ти усміхаєшся...";
    var i = 0;
    var intervalId = setInterval(function() {
    document.getElementById("text-fourth").innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(intervalId);
    }
  }, 100);
  }

// кнопка четвертого питання 

function hideBlockFourth() {
  document.getElementById("fourthblock").style.display = "none";
  }

function hideBlockFourth() {
    const secondBlock = document.getElementById("fourthblock");
    secondBlock.classList.add("hidden");

    var text = "2. Не сумуй, я знаю на тебе купа всього звалилось, але в тебе є завжди з ким поговорити і хто тебе підтримає, хоча ти і сама це знаєш...в будь якому разі все буде добре";
    var i = 0;
    var intervalId = setInterval(function() {
    document.getElementById("text-five").innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(intervalId);
    }
  }, 100);
  }

  //пяте питння

  function hideBlockFive() {
    document.getElementById("fiveblock").style.display = "none";
    }
  
  function hideBlockFive() {
      const secondBlock = document.getElementById("fiveblock");
      secondBlock.classList.add("hidden");
  
      var text = "3. Залишайся такою ж доброю як ти є завжди, я ніколи щенезустрічав настільки доброї людини як ти,завжди допоможеш , завжди стараєшся щоб всім було добре і ніколи не думаєш про себе,ти великий молодець і я дуже пишаюсь тобою";
      var i = 0;
      var intervalId = setInterval(function() {
      document.getElementById("text-six").innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    }

    //шосте питання

    function hideBlockSix() {
      document.getElementById("sixblock").style.display = "none";
      }
    
    function hideBlockSix() {
        const secondBlock = document.getElementById("sixblock");
        secondBlock.classList.add("hidden");
    
        var text = "4. Відпочивай, розаважайся... так знаю, двино це від мене чути)Але ти це заслужила і якщо це приносить тобі радість то я дуже хочу щоб ти була щасливою чесно...";
        var i = 0;
        var intervalId = setInterval(function() {
        document.getElementById("text-seven").innerHTML += text.charAt(i);
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
        }
      }, 100);
      }

      // сьоме питання 

      function hideBlockSeven() {
        document.getElementById("sevenblock").style.display = "none";
        }
      
      function hideBlockSeven() {
          const sevenBlock = document.getElementById("sevenblock");
          sevenBlock.classList.add("hidden");
      
          var text = "5. Ти все золто світу(але я б сказав що ти безцінна)настільки ти красива, що це не можливо передати словами,просто нереально гарнезна я такої красивої дівчини ще ніколи не бачив";
          var i = 0;
          var intervalId = setInterval(function() {
          document.getElementById("text-eight").innerHTML += text.charAt(i);
          i++;
          if (i > text.length) {
            clearInterval(intervalId);
          }
        }, 100);
        }

        // восьме 

      
        function hideBlockEight() {
            const eightBlock = document.getElementById("eightblock");
            eightBlock.classList.add("hidden");
        
            var text = "6. А твоя фігурка це просто ммм, ти просто бомбезна , неможна відірвати погляд(мб через то я тебе так реную) ти просто шикарна";
            var i = 0;
            var intervalId = setInterval(function() {
            document.getElementById("text-nine").innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
              clearInterval(intervalId);
            }
          }, 100);
          }

          //девяте 

          function hideBlockNine() {
            const nineBlock = document.getElementById("nineblock");
            nineBlock.classList.add("hidden");
        
            var text = "А ще я хочу щоб ти знала...";
            var i = 0;
            var intervalId = setInterval(function() {
            document.getElementById("text-ten").innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
              clearInterval(intervalId);
            }
          }, 100);
          }

          // десяте 

          
          function hideBlockTen() {
            const tenBlock = document.getElementById("tenblock");
            tenBlock.classList.add("hidden");
        
            var text = "Я кохаю тебе безмежно.Таке відчуття що життя до тебе не було, кохаю тебе всю ,поністю, коли кажуть що цілують з першого рядка бо до останнього не дотерплять, то я цілую тебе завжди між кожною буквою між кожною своєю думкою, завжди буду тебе кохати щоб не сталось, і я самий чемний в світі (чесно) просто хочу щоб ти це знала і самий чесний(ну майже) а ще я обожнюю тебе такою як ти є ніколи б нічого в тобі не змінив. P.S. Love you forever";
            var i = 0;
            var intervalId = setInterval(function() {
            document.getElementById("text-eleven").innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
              clearInterval(intervalId);
            }
          }, 100);
          }

          //одинадцяте

          function hideBlockeEleven() {
            const elevenBlock = document.getElementById("elevenblock");
            elevenBlock.classList.add("hidden");
        
            var text = "Якщо ти теж мене сильно любиш, введи пароль, ти знаєш його";
            var i = 0;
            var intervalId = setInterval(function() {
            document.getElementById("text-twel").innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
              clearInterval(intervalId);
            }
          }, 100);
          }

          //password

            function hideBlockTwel() {
            const twelBlock = document.getElementById("twelblock");
            twelBlock.classList.add("hidden");}
            const inputField = document.getElementById("input-field");
            const myButton = document.getElementById("my-button");

            myButton.addEventListener("click", () => {
              const myAudio = document.getElementById("my-audio");
              myAudio.play();
            });

            inputField.addEventListener("input", () => {
              if (inputField.value.includes("Bomko123")) {
                myButton.disabled = false;
              } else {
                myButton.disabled = true;
              }
            });
          

            //slides


            var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(function() {
  plusSlides(1);
}, 5000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
