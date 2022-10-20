var donut
var croissant
var muffin
var tax = .75
var breadChoice = prompt("What are you ordering today?")
var chocolate = 1.50
var glazed = 1.50
var filled = 2
var sprinkles = .50
var blueberry = 3.50
var chocolateChip = 3
var bananaNut = 3.50
var largeMuff = 1

if (breadChoice === "donut") {

// First is chocolate the best kind
  var donutType = prompt("So you'd like to buy a Donut? We have chocolate, filled, and glazed donuts. Glazed and chocolates are $1.50, and filleds are $2. Which would you like?")
   if (donutType == "chocolate") {
    var donutSprinkles = prompt("You'd like a chocolate donut? Would you like to add sprinkles for 50 cents?")
      if (donutSprinkles == "yes") {
        var donutTotal = prompt("looks like your total will be $" + (chocolate + sprinkles) + "!")
      }
     else {
       var donutTotal = prompt("Looks like your total will be $" + chocolate + "!")
     }
  }
// Glazed stuff now
 if (donutType == "glazed") {
    var donutSprinkles = prompt("You'd like a glazed donut? Would you like to add sprinkles for 50 cents?")
      if (donutSprinkles == "yes") {
        var donutTotal = prompt("Sprinkles on glazed? Weirdo~ Your total will be $" + (glazed + sprinkles + tax) + "! Plus tax for being weird!")
      }
     else {
       var donutTotal = prompt("Looks like your total will be $" + glazed + "!")
     }
  }
// Filled because I know people like filled I DON'T LIKE FILLED IT'S WEIRD
 if (donutType == "filled") {
    var donutSprinkles = prompt("You'd like a filled donut? Would you like to add sprinkles for 50 cents?")
      if (donutSprinkles == "yes") {
        var donutTotal = prompt("looks like your total will be $" + (filled + sprinkles) + "!")
      }
     else {
       var donutTotal = prompt("Looks like your total will be $" + filled + "!")
     }
  }

}
///It's muffin time!!! 

else if (breadChoice === "muffin") {


// Blueberry muffins
 var muffinType = prompt("A muffin? What kinda muffin do you want? Blueberry, chocolate chip, or banana nut? Muffins are $3 or $3.50 if they have fruit!")
   if (muffinType == "blueberry") {
    var muffinSize = prompt("You'd like a blueberry muffin then? A small one, or a large one, for a dollar extra?")
      if (muffinSize == "Large") {
        var muffinTotal = prompt("A large blueberry muffin will be $" + (blueberry + largeMuff) + "!")
      }
     else {
       var muffinTotal = prompt("Looks like your total will be $" + blueberry + "!")
     }
  }

// Chocolate muffins
 var muffinType = prompt("A muffin? What kinda muffin do you want? Blueberry, chocolate chip, or banana nut? Muffins are $3 or $3.50 if they have fruit!")
   if (muffinType == "Chocolate") {
    var muffinSize = prompt("You'd like a chocolate chip muffin then? A small one, or a large one, for a dollar extra?")
      if (muffinSize == "Large") {
        var muffinTotal = prompt("A large chocolate chip muffin will be $" + (chocolateChip + largeMuff) + "!")
      }
     else {
       var muffinTotal = prompt("Looks like your total will be $" + chocolateChip + "!")
     }
  }

}