var i = 0,
    a = 0,
    k = 0,
    isBackspacing = false,
    isParagraph = false;


var textArray = [
  "Hi There!", 
  "Welcome to my website :)",
  "I'm Dev " 
];


var speedForward = 90, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"),
      eParagraph = element.children("p"); 
  

  if (!isBackspacing) {
    

    if (i < aString.length) {
      

      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);

      } else {

        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      

    } else if (i == aString.length) {
        k++;
        isBackspacing = true;
        if (k==textArray.length) {
          return
        }
        setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    

  } else {
    

    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      

      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    

    } else { 

      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; 
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }

}
