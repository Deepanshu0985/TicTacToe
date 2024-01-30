let boxes = document.querySelectorAll('.box');
let msgbox =document.querySelector('.msgbox');
let reset = document.querySelector('#reset');
let msg = document.querySelector('.msg');
let newgame = document.querySelector('#new');

let turnO=true;

const enableboxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
}

const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetgame = ()=>{
    console.log("button reset game");
    turnO=true;
    enableboxes();
    msgbox.classList.add("hide");


}

boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML = 'O';
            turnO = false;
        }else{
            box.innerHTML = 'X'; 
            turnO = true;
        }
        box.disabled=true;

        checkwinner()
    })
})


const checkwinner = ()=>{
    for(let pattern of arr){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
    
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                showwinner(pos1)
            }
        }
    }
}

const showwinner = (Winner)=>{
    msg.innerHTML = `Contratulation winner is ${Winner}`
    msgbox.classList.remove("hide");
    Disbtn();
}

const Disbtn = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

reset.addEventListener('click', resetgame)
newgame.addEventListener('click', resetgame)