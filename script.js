
let boxes = document.querySelectorAll(".box");
let newbtn=document.querySelector("newbtn");
let resetbtn = document.querySelector("#resetbtn");
let msgcontener = document.querySelector(".msg-cantener");
let msg = document.querySelector("#msg");


let turno= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8], 
];

const resetgames=()=>{
    turno=true;
    enableBoxes();
    msgcontener.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turno){
        box.innerText="o";
        turno=false;
    }else{
        box.innerText="x";
        turno=true;
    }
    box.disabled=true;
    checkwiner();
    });
});

const disableBoxes =()=> {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congartulation,winner is ${winner}`;
    msgcontener.classList.remove("hide");
    disableBoxes();
};

const checkwiner=()=>{
    for(pattren of winPatterns){
        let pos1val =boxes[pattren[0]] .innerText;
        let pos2val =boxes [pattren[1]].innerText;
        let pos3val = boxes [pattren[2]].innerText;
        if(pos1val !=""&& pos2val !="" && pos3val !=""){
            if(pos1val ===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click",resetgames);
resetbtn.addEventListener("click",resetgames);