function viratFun(){
    ID = document.getElementById("viratId").id;
    im.src="/public/photos/viratkohli.jpg";
    guessText.style.display = "block";
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
    
}

function msFun(){
    ID = document.getElementById("msId").id;
    im.src="/public/photos/dhoni.jpg";
    guessText.style.display = "block";
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
    
}

function sachinFun(){
    ID = document.getElementById("sachinId").id;
    im.src="/public/photos/sachin.jpg";
    guessText.style.display = "block"; 
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
}

function rohithFun(){
    ID = document.getElementById("rohithId").id;
    im.src="/public/photos/rohithsharma.jpg";
    guessText.style.display = "block";
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
}

function hardikFun(){
    ID = document.getElementById("hardikId").id;
    im.src="/public/photos/hardikpandey.jpg";
    guessText.style.display = "block"; 
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
}

function yuvrajFun(){
    ID = document.getElementById("yuvrajId").id;
    im.src="/public/photos/yuvrajsingh.jpg";
    guessText.style.display = "block";
    buttonDivVar.style.display = "none";
    choiceBoardFun();
    choiceBoardVar.style.display = "block";
}

function mainFun(){

    setTimeout(time, 500);
    setTimeout(decideFun, 4000);
}

choice = 0;
function choiceBoardFun(){

    if(choice == 0){
        choiceBoardVar.innerHTML = "2 more choices"; 
    }
    
    if(choice == 1){
        choiceBoardVar.innerHTML = "1 more choice";
    }
    
    if(choice == 2){
        choiceBoardVar.innerHTML = "Choices Over";
    }
    choice = choice+1;
}

score = 0;
gameOver = 0;
function decideFun(){
    
    gameOver = gameOver+1;
    if(gameOver == 3){ 
        setTimeout(gameOverFun,2900);
    }


    let R = Math.floor(Math.random() * 3) + 1;
    if (R == 1){
        if(ID == "viratId"){
            varImgSrcId.src = "/public/photos/viratkohli.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/viratkohli.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
           setTimeout(buttonDivEnableFun, 3000);
        }
    }
    
    if(R == 2){
        if(ID == "msId"){
            varImgSrcId.src = "/public/photos/dhoni.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/dhoni.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
        }
    }
    
    if (R == 3){
        if(ID == "sachinId"){
            varImgSrcId.src = "/public/photos/sachin.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/sachin.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
        }
            
    }
    
    if (R == 4){
        if(ID == "rohithId"){
            varImgSrcId.src = "/public/photos/rohithsharma.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/rohithsharma.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
        }
        
    }
    
    if (R == 5){
        if(ID == "hardikId"){
            varImgSrcId.src = "/public/photos/hardikpandey.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/hardikpandey.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
        }
    }
    
    if (R == 6){
        if(ID == "yuvrajId"){
            varImgSrcId.src = "/public/photos/yuvrajsingh.jpg";
            setTimeout(happyFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
            score = score+10;
        }else{
            varImgSrcId.src = "/public/photos/yuvrajsingh.jpg";
            setTimeout(sadFun, 700);
            setTimeout(questionFun, 2800);
            setTimeout(guessFun, 2800);
            setTimeout(buttonDivEnableFun, 3000);
        }
    }
}

function h5DisableFun(){
    hh.style.display = "none";
}

function imgeNoneFun(){
    varImgSrcId.src="";
}

function guessFunDisable(){
    g = document.getElementById("H4");
    g.style.display = "none";
}

function guessFun(){
    g = document.getElementById("H4");
    g.style.display = "block";
}

function happyFun(){
    HSdivV.style.display = "block";
    img10V.src = "/public/photos/happy.jpg";
    P10V.innerHTML = "+10 Points";
    scoreV.innerHTML = "score<br/>"+score;
}

function questionFun(){
    varImgSrcId.src="/public/photos/question.jpg"

}

function sadFun(){
    HSdivV.style.display = "block";
    img10V.src = "/public/photos/sad.jpg";
    P10V.innerHTML = "No Points";
}

z = 1;
function time(){

    varImgSrcId.style.display = "none";
    
    if(z == 1){
        j = document.getElementById("H1");
        j.style.display = "block";
        z = 2;
    
    }else if(z == 2){
        k = document.getElementById("H2");
        j.style.display = "none";
        k.style.display = "block";
        z = 3;
    
    }else if(z == 3){
        l = document.getElementById("H3");
        k.style.display = "none";
        l.style.display = "block";
        z = 4;
    
    }else if(z == 4){
        j.style.display = "none";
        k.style.display = "none";
        l.style.display = "none";
        z = 5;
    
    }
    
    s = setTimeout(time, 1200);
    if(z == 5){
        clearTimeout(s);
        varImgSrcId.style.display = "block";
        z = 1;
    }

}

function buttonDivEnableFun(){
    buttonDivVar.style.display = "block";
    HSdivV.style.display = "none";
}

function gameOverFun(){
    
    if(score == 10){
        gameMenuDisable.style.display = "none";
        gameOverDiv.style= "block";
        gameOverContent.innerHTML = "Game over <br/>your 6th sence is:-30% <br/>"+"your score is:-" + "  "+score +"/30";
        score = 0;

    
    }else if(score == 20){ 
        gameMenuDisable.style.display = "none";
        gameOverDiv.style= "block";
        gameOverContent.innerHTML = "Game over <br/>your 6th sence is:-60% <br/>"+"your score is:-" + "  "+score +"/30";
        score = 0;

    
    }else if(score == 30){
        gameMenuDisable.style.display = "none";
        gameOverDiv.style.display= "block";
        gameOverContent.innerHTML = "Game over <br/>your 6th sence is:-100% <br/>"+"your score is:-" + "  "+score +"/30";
        score = 0;

        
    
    }else if(score == 0){
        gameMenuDisable.style.display = "none";
        gameOverDiv.style.display= "block";
        gameOverContent.innerHTML = "Game over <br/>your 6th sence is:-0% <br/>"+"your score is:-" + "  "+score +"/30";
        score = 0;

       
    
    }
}