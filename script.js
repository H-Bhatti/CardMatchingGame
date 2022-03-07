
var sortedArray = [                                                    // making array of images to match with coresponding names
    {
        name:"cheeseburger",                                            // make each one twice for matching 
        img:"pics/cheeseburger.png"
    },
    {
        name:"cheeseburger",
        img:"pics/cheeseburger.png"
    },
    {
        name:"fries",
        img:"pics/fries.png"
    },
    {
        name:"fries",
        img:"pics/fries.png"
    },
    {
        name:"hotdog",
        img:"pics/hotdog.png"
    },
    {
        name:"hotdog",
        img:"pics/hotdog.png"
    },
    {
        name:"icecream",
        img:"pics/icecream.png"
    },
    {
        name:"icecream",
        img:"pics/icecream.png"
    },
    {
        name:"milkshake",
        img:"pics/milkshake.png"
    },
    {
        name:"milkshake",
        img:"pics/milkshake.png"
    },
    {
        name:"pizza",
        img:"pics/pizza.png"
    },
    {
        name:"pizza",
        img:"pics/pizza.png"
    }
]

const grid = document.querySelector(".grid");
sortedArray = shuffleArray(sortedArray);
var imgEl = document.querySelectorAll(".img")
var nameArray =[];
var idArray = []
winCounter = 0;
var k = 0;
var score = 100;
for(i=0;i<imgEl.length;i++)
{
    imgEl[i].addEventListener("click", cardcheck) ;
}

document.getElementById("reload").onclick = reloadPage => location.reload();




function shuffleArray(array) {          //shuffles the image array to make a new array
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}




//this function sets image according to the sorted array in img and id

function cardcheck () {

    var elId = parseInt(this.id);
    this.setAttribute("src", sortedArray[elId].img) 
    nameArray[k]=sortedArray[elId].name;
    idArray[k]=elId
    if(nameArray.length===2)
    {
        //when 2 item selected go check logic
        logicCheck();
    }
    k++    
    //lets you keepcount od items selected
}

// function cheks te logic of above selected items
function logicCheck(i)
{
    if (nameArray[0]===nameArray[1])
    {
        setTimeout(printWhite,520)//timeout for user
        winCounter++;
        if (winCounter===6)//counter to count winning 
        {
            document.getElementById("result").innerHTML="YOU FOUND ALL THE SETS !!!"
        }
        score = score-5;//calculate score and print
        updateScore()
    }
    else
    {
        setTimeout(printBlank,520)//timeout for user
        score = score-5;
        updateScore()
    }
    nameArray=[];
    k=k-2; //sets previous arrays and k to 0 so that next step works properly
}

function printBlank (){
    for(i=0;i<idArray.length;i++)
{
    let j = idArray[i]
    j=j.toString();
    document.getElementById(j).setAttribute("src","pics/blank.png")
 
}  //this fuction prints lank png to wrong chosen sets
idArray=[];//for reserting fr new selection
}
function printWhite (){
    for(i=0;i<idArray.length;i++)
{
    let j = idArray[i]
    j=j.toString()
    document.getElementById(j).setAttribute("src","pics/white.png")
}
idArray=[];
}//prints white png to correct sets

function updateScore()
{
    document.getElementById("score").innerHTML=`SCORE = ${score}`
}
