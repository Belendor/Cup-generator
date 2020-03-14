const BOARD = document.querySelector(".cupBoard")
let cupCount = 3;


function myFunction() {
    let x = document.getElementById("cup-number").value;
    cupCount = (parseInt(x, 10))

    if (cupCount>0){
    cups(cupCount)

    let start = document.querySelector(".start")

    start.remove()

  }else{
      alert("Neigiamas")
  }}

 
let minAmaount = 0
let smallesAmount = 1;


function cups(c){

    let rowCount = 0;
    let reamainingCups = 1;

    for(let i = 0; i < c; i += rowCount +1){
        rowCount++
    }
    for(let x = 1; x<=rowCount; x++){

        for(let z = smallesAmount; z>0; z--){
            minAmaount++
        }   
        smallesAmount++
    }

    let skirtumas = cupCount - minAmaount


    for(let j = 1; j<=rowCount; j++){
        BOARD.innerHTML += `<div class="row"
                                 style="height: calc(100vh / ${rowCount});"
                                 id="numer${j}">${generateBox()}</div>`

    function generateBox(){
      if (minAmaount === cupCount){
        let HTML = ""
        for (let i = reamainingCups; i>0 ; i--){
            HTML += `<div class="cup"
                          style="width: calc(100% / ${rowCount})"></div>`
        }
        reamainingCups++
        return HTML
    }
        let HTML = ""
        for (let i = reamainingCups; i>0 ; i--){
            HTML += `<div class="cup"
                        style="width: calc(100% / ${rowCount+1})"></div>`
        }
        reamainingCups++
        return HTML

    } 
    }
    if (minAmaount !== cupCount){
    for(let p = rowCount; p>0; p--){
        if (skirtumas > 0){
            let targetRow = document.getElementById(`numer${p}`)

            targetRow.innerHTML += `<div class="cup"
                                         style="width: calc(100% / ${rowCount+1})"></div>`

            skirtumas--
        }else{
            document.getElementById(`numer${p}`).style.marginLeft = `calc( (100% / ${rowCount+1}) / 2 )`
        }
    }}
    
    BOARD.innerHTML += `<button id="button" onclick="location.reload()">Again?</button>`
}


