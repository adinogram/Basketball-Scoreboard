 
 
 
 let homeScore = document.getElementById("home-score")
 
 let home = 0
 function addOneH(){
 home += 1
 homeScore.textContent = home


// console.log(homeS)
 }
 

 function addTwoH(){
  home += 2
 homeScore.textContent = home

 }

 function addThreeH(){
 home += 3
 homeScore.textContent = home

 }

//   let questScore = document.getElementById("quest-score")

// function addOne(){
//     questScore.textContent += 1
// }
// function addTwo(){
//  questScore.textContent += 2
//  }

//  function addThree(){
//  questScore.textContent += 3
//  }
 let guestScore = document.getElementById("guest-score")
 
 let guest = 0

function addOne(){
    guest += 1
    guestScore.textContent = guest
}

function addTwo(){
    guest += 2
    guestScore.textContent = guest
}
function addThree(){
    guest +=3 
    guestScore.textContent = guest
}