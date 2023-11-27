let title = document.getElementById('spn');
let turn = 'X';
let squraes = []
function end(num1 , num2 ,num3){
    title.innerHTML = `${squraes[num1]} Winner`
    document.getElementById('item'+ num1).style.background = '#000'
    document.getElementById('item'+ num2).style.background = '#000'
    document.getElementById('item'+ num3).style.background = '#000'
    setInterval(function(){
        title.innerHTML += '.'
    },1000)
    setTimeout(function(){
        location.reload()
    },  4000)
}
function winner(){
    for(let i = 1 ; i < 10 ; i++){
        squraes[i] = document.getElementById('item' + i).innerHTML
    }
    if(squraes[1] == squraes[2] && squraes[2] == squraes[3] && squraes[1] != ''){
        end(1, 2,3)
    }else if(squraes[4] == squraes[5] && squraes[5] == squraes[6] && squraes[6] != ''){
        end(4, 5,6)
    }else if(squraes[7] == squraes[8] && squraes[8] == squraes[9] && squraes[9] != ''){
        end(7, 8,9)
    }else if(squraes[1] == squraes[4] && squraes[4] == squraes[7] && squraes[4] != ''){
        end(1, 4,7)
    }else if(squraes[2] == squraes[5] && squraes[5] == squraes[8] && squraes[2] != ''){
        end(2, 5,8)
    }else if(squraes[3] == squraes[6] && squraes[6] == squraes[9] && squraes[9] != ''){
        end(9, 6,3)
    }else if(squraes[1] == squraes[5] && squraes[5] == squraes[9] && squraes[5] != ''){
        end(1, 5,9)
    }else if(squraes[3] == squraes[5] && squraes[5] == squraes[7] && squraes[5] != ''){
        end(3, 5, 7)
    }
}
function killme(id){
    let elment = document.getElementById(id)
    if(turn === 'X' && elment.innerHTML == ''){
        elment.innerHTML = 'X' ;
        turn = 'O'
        title.innerHTML = turn;
    }else if(turn === 'O' && elment.innerHTML == ''){
        elment.innerHTML = 'O'
        turn = 'X';
        title.innerHTML = turn
    }
    winner()
}