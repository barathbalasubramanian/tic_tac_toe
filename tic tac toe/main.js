
var text = ''
var count = 1
var irukku = 0

var xCount = []
var yCount = []

var x_win = 0
var o_win = 0
var finished = null

let possibilities = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7]
]

window.onload = function () {
    setBox()
}

function setBox () {

    for ( let i= 1 ; i <= 9 ; i++) {
        let tile = document.createElement('div')
        tile.id = i
        tile.innerHTML = text
        tile.classList.add('tile')
        tile.addEventListener('click',clicked)
        document.getElementById ('box').appendChild(tile)
    }
}

function clicked() {

    if ( this.innerHTML == '') {
        count += 1

        if ( count % 2 == 0) 
        {
            this.innerHTML = 'X'
            document.getElementById(this.id).classList.add('clicked-X') 

            xCount.push(this.id)

                if (xCount.length > 2) {
                    checking(xCount,count)
                }
        }

        if ( count % 2!= 0) {
            this.innerHTML = 'O'
            document.getElementById(this.id).classList.add('clicked-O') 

            yCount.push(this.id)

            if (yCount.length > 2) {
                checking(yCount,count)
            }
        }
    }
}

function checking(playercount,count) {

    for ( let i = 0 ; i < possibilities.length ; i++ ) {
        for ( let j = 0 ; j < possibilities[i].length ; j++) {

            let found = playercount.includes(possibilities[i][j].toString())

            if ( found == true ) 
            {
                irukku += 1
                if ( irukku > 2 ) {
                    if (count % 2 == 0) {
                        console.log('X')
                        finished = true
                        X_won()
                        return
                    }
                    if (count % 2 != 0) {
                        console.log('O')
                        finished = true
                        O_won()
                        return
                    }
                }
                if (irukku == 2 && count == 10 && finished == null) {
                    console.log('DRAW')
                    draw()
                    return
                }
            }
            else {
                irukku = 0
                break
            }
            
        }
    }
}

function X_won() {

    x_win += 1
    document.getElementById('result').innerHTML = 'Player X Won the Match'
    document.getElementById('x').innerHTML = "PLAYER 'X' :" + ' ' + x_win
    finished_fun()
}

function O_won() {

    o_win += 1
    document.getElementById('result').innerHTML = 'Player O Won the Match'
    document.getElementById('o').innerText = "PLAYER 'O' :" + ' ' + o_win
    finished_fun()
}

function draw() {

    document.getElementById('result').innerHTML = 'DRAWN'
    finished_fun()
}


document.getElementById('btn').addEventListener('click', function() {

    for (let i = 1 ; i <= 9 ; i++) {

        let inputbox = document.getElementById(i)
        inputbox.innerHTML = ''
        document.getElementById(i).classList.remove('clicked-X') 
        document.getElementById(i).classList.remove('clicked-O') 
        
        count = 1
        irukku = 0
        xCount = []
        yCount = []
        finished = null
        
    }
})

function finished_fun() {

    for (let i = 1 ; i <= 9 ; i++) {

        let empty_box = document.getElementById(i)

        if (empty_box.innerHTML == '') {
            empty_box.innerHTML = '   '
        }
    }
}

document.getElementById('reset').addEventListener('click', function() {

    for (let i = 1 ; i <= 9 ; i++) {

        let inputbox = document.getElementById(i)
        inputbox.innerHTML = ''
        document.getElementById(i).classList.remove('clicked-X') 
        document.getElementById(i).classList.remove('clicked-O') 
        document.getElementById('result').innerHTML = ''
        document.getElementById('x').innerText = "PLAYER 'X' :"
        document.getElementById('o').innerText = "PLAYER 'O' :"

        count = 1
        irukku = 0
        xCount = []
        yCount = []
        finished = null
        x_win = 0
        o_win = 0
        
    }
})

