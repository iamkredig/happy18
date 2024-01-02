// functions
function gid(id) {return document.getElementById(id)}
function qgid(id) {return document.querySelectorAll(id)}
function classRemove(item, classname) {return item.classList.remove(classname)} 
function classAdd(item, classname) {return item.classList.add(classname)} 

function fadeout(item) {
    setTimeout(() => {classAdd(item, "fadeout")}, 0);
    setTimeout(() => {classRemove(item, "fadeout")}, 400);
    setTimeout(() => {classAdd(item, "disabled")}, 400);
}

function fadein(item) {
    setTimeout(() => {classRemove(item, "disabled")}, 0);
    setTimeout(() => {classAdd(item, "fadein")}, 1);
    setTimeout(() => {classRemove(item, "fadein")}, 400);
}

function blink(item){
    setTimeout(() => {classAdd(item, "blink")}, 0);
    setTimeout(() => {classRemove(item, "blink")}, 900);
}

//password
let PasswordInputField = gid("password-input")
let password = gid("password")
let wrongpassword = gid("wrong-password")
let enterpassword = gid("enter-password")
let correctpassword = gid("correct-password")

//playerbuttons
let vid1 = gid("vid1")
let vid2 = gid("vid2")

let playbutton1 = gid("playbutton1")
let playbutton2 = gid("playbutton2")
let play1 = gid("play1")
let play2 = gid("play2")
let pause1 = gid("pause1")
let pause2 = gid("pause2")
let resetbutton1 = gid("reset1")
let resetbutton2 = gid("reset2")

let previousbutton1 = gid("previousbutton1")
let previousbutton2 = gid("previousbutton2")
let previousbutton3 = gid("previousbutton3")

let nextbutton0 = gid("nextbutton0")
let nextbutton1 = gid("nextbutton1")
let nextbutton2 = gid("nextbutton2")
let nextbutton3 = gid("nextbutton3")

// quests
let openlock0 = qgid("#openlock0")
let closedlock0 = gid("closedlock0")

let openlock1 = qgid("#openlock1")
let closedlock1 = gid("closedlock1")
 
let openlock2 = qgid("#openlock2")
let closedlock2 = gid("closedlock2")

let openlock3 = qgid("#openlock3")
let closedlock3 = gid("closedlock3")

let quest1 = gid("quest1")
let quest2 = gid("quest2")

let reward = gid("reward")
let exit = gid("exit")
let enter = gid("enter")

// quest1
let chk1 = gid("chk1")
let chk2 = gid("chk2")
let chk3 = gid("chk3")
let chk4 = gid("chk4")
let chk5 = gid("chk5")
let chk6 = gid("chk6")
let chk7 = gid("chk7")
let chk8 = gid("chk8")
let chk9 = gid("chk9")
let chk10 = gid("chk10")
let chk11 = gid("chk11")
let chk12 = gid("chk12")
let chk13 = gid("chk13")

let enter1 = gid("enter1")
let enter2 = gid("enter2")
let enter3 = gid("enter3")
let enter4 = gid("enter4")

let question1 = gid("question1")
let question2 = gid("question2")
let question3 = gid("question3")
let question4 = gid("question4")

let questionhint1 = gid("questionhint1")
let questionhint2 = gid("questionhint2")
let questionhint3 = gid("questionhint3")
let questionhint4 = gid("questionhint4")

let cipherinput1 = gid("cipherinput1")
let cipherinput2 = gid("cipherinput2")
let cipherinput3 = gid("cipherinput3")

let quest2wrapper1 = gid("quest2wrapper1")
let quest2wrapper2 = gid("quest2wrapper2")
let quest2wrapper3 = gid("quest2wrapper3")

let loadingpage = gid("loadingpage")

window.addEventListener("load", function(){
    setTimeout(() => {classAdd(loadingpage, "disabled")}, 5333);
}) 

//passcode entry
getComputedStyle(document.documentElement).getPropertyValue('--logincolor');

PasswordInputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && PasswordInputField.value === "L19708P#666e?"){
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "#5CFB1E")}, 0);
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "white")}, 1333);
            
        setTimeout(() => {fadeout(password)}, 1533);
        classRemove(enter, "disabled");
        classAdd(enter, "enabled")

        classAdd(enterpassword, "disabled")
        classRemove(correctpassword, "disabled")
    } 
    if (e.key === 'Enter' && PasswordInputField.value !== "L19708P#666e?"){
        classAdd(enterpassword, "disabled")
        classRemove(wrongpassword, "disabled")

        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "#fb1e1e")}, 0);
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "#5CFB1E")}, 233);
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "#fb1e1e")}, 466);
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "#5CFB1E")}, 700);
        setTimeout(() => {document.documentElement.style.setProperty('--logincolor', "white")}, 1030);
    }
});

PasswordInputField.addEventListener("input", function (){
    classRemove(enterpassword, "disabled")
    classAdd(wrongpassword, "disabled")
});

// video 1
playbutton1.addEventListener("click", function(){
    if (vid1.currentTime > 0 && !vid1.paused && !vid1.ended && vid1.readyState > 2 === true) {
        vid1.pause();
        classAdd(pause1, "disabled")
        classRemove(play1, "disabled") 
    } else{
        vid1.play()
        classAdd(play1, "disabled")
        classRemove(pause1, "disabled") 
    };
})

resetbutton1.addEventListener("click", function(){
    vid1.currentTime = 0;
})

vid1.addEventListener("ended", function(){
    setTimeout(() => {blink(closedlock0)},0);
    setTimeout(() => {fadeout(closedlock0)}, 920);
    setTimeout(() => {openlock0.forEach(function(button){classRemove(button, "disabled")}) }, 920);
})
    
openlock0.forEach(function(button) {
    button.addEventListener("click", function(){
        fadeout(enter);
        classRemove(enter, "enabled");
    
        classAdd(quest1, "enabled")
        classRemove(quest1, "disabled")

        vid1.pause();
        classAdd(pause1, "disabled")
        classRemove(play1, "disabled") 
        classRemove(nextbutton0, "disabled");
    })
});

nextbutton0.addEventListener("click", function(){
    fadeout(enter);
    classRemove(enter, "enabled");
    
    classAdd(quest1, "enabled")
    classRemove(quest1, "disabled")

    vid1.pause();
    classAdd(pause1, "disabled")
    classRemove(play1, "disabled") 
})

// quest 1
enter1.addEventListener("click", function (q){
    q = question1
    classRemove(q, "correct");
    classRemove(q, "wrong");
    if (chk1.checked && chk2.checked && chk3.checked){
        classAdd(q, "correct")
        classAdd(questionhint1, "disabled")
    }else {
        classAdd(q, "wrong")
        classRemove(questionhint1, "disabled")}

    allCOMPLETED()
})

enter2.addEventListener("click", function(q){
    q = question2
    classRemove(q, "correct");
    classRemove(q, "wrong");
    if (chk4.checked && !chk5.checked && !chk6.checked){
            classAdd(q, "correct")
            classAdd(questionhint2, "disabled")
    }else {
        classAdd(q, "wrong")
        classRemove(questionhint2, "disabled")}

    allCOMPLETED()
})

enter3.addEventListener("click", function(q){
    q = question3
    classRemove(q, "correct");
    classRemove(q, "wrong");
    if (!chk7.checked && chk8.checked && !chk9.checked){
            classAdd(q, "correct")
            classAdd(questionhint3, "disabled")
    }else {
        classAdd(q, "wrong")
        classRemove(questionhint3, "disabled")}

    allCOMPLETED()
})

enter4.addEventListener("click", function(q){
    q = question4
    classRemove(q, "correct");
    classRemove(q, "wrong");
    if (!chk10.checked && !chk11.checked && chk12.checked && !chk13.checked){
            classAdd(q, "correct")
            classAdd(questionhint4, "disabled")
    }else {
        classAdd(q, "wrong")
        classRemove(questionhint4, "disabled")}

    allCOMPLETED()
})

function COMPLETED(question){return question.classList.contains("correct")}

function allCOMPLETED(){if(COMPLETED(question1) == true && COMPLETED(question2) == true && COMPLETED(question3) ==true && COMPLETED(question4)==true){
    setTimeout(() => {blink(closedlock1)},0);
    setTimeout(() => {fadeout(closedlock1)}, 920);
    setTimeout(() => {openlock1.forEach(function(button){classRemove(button, "disabled")}) }, 920);
}}

openlock1.forEach(function(button) {
    button.addEventListener("click", function(){
        fadeout(quest1)
        classRemove(quest1, "enabled");
            
        classAdd(quest2, "enabled")
        classRemove(quest2, "disabled")

        classRemove(nextbutton1, "disabled");
    })
});

nextbutton1.addEventListener("click", function(){
    fadeout(quest1)
    classRemove(quest1, "enabled");
            
    classAdd(quest2, "enabled")
    classRemove(quest2, "disabled")
})

previousbutton1.addEventListener("click", function(){
    fadeout(quest1);
    classRemove(quest1, "enabled");
        
    classAdd(enter, "enabled")
    classRemove(enter, "disabled")
})

// quest2
getComputedStyle(document.documentElement).getPropertyValue('--logincolor2');
getComputedStyle(document.documentElement).getPropertyValue('--logincolor3');
getComputedStyle(document.documentElement).getPropertyValue('--logincolor4');

cipherinput1.addEventListener('keypress', function (e) {
    if (e.key === "Enter"){ 
        classRemove(quest2wrapper1, "wrong")
        classRemove(quest2wrapper1, "correct")
    }
    if (e.key === 'Enter' && cipherinput1.value.toUpperCase() === "HAPPY18BIRTHDAY"){
        classAdd(quest2wrapper1, "correct")
        allCOMPLETED2()
    } 
    if (e.key === 'Enter' && cipherinput1.value.toUpperCase() !== "HAPPY18BIRTHDAY"){
        classAdd(quest2wrapper1, "wrong")
    }
});

cipherinput2.addEventListener('keypress', function (e) {
    if (e.key === "Enter"){ 
        classRemove(quest2wrapper2, "wrong")
        classRemove(quest2wrapper2, "correct")
    }
    if (e.key === 'Enter' && cipherinput2.value === "11803815"){
        classAdd(quest2wrapper2, "correct")
        allCOMPLETED2()
    } 
    if (e.key === 'Enter' && cipherinput2.value !== "11803815"){
        classAdd(quest2wrapper2, "wrong")
    }
});

cipherinput3.addEventListener('keypress', function (e) {
    if (e.key === "Enter"){ 
        classRemove(quest2wrapper3, "wrong")
        classRemove(quest2wrapper3, "correct")
    }
    if (e.key === 'Enter' && cipherinput3.value.toUpperCase() === "OCTOPUSSESRBIG"){
        classAdd(quest2wrapper3, "correct")
        allCOMPLETED2()
    } 
    if (e.key === 'Enter' && cipherinput3.value.toUpperCase() !== "OCTOPUSSESRBIG"){
        classAdd(quest2wrapper3, "wrong")
    }
});

function COMPLETED2(question){return question.classList.contains("correct")}

function allCOMPLETED2(){if (COMPLETED2(quest2wrapper1) == true && COMPLETED2(quest2wrapper2) == true && COMPLETED2(quest2wrapper3) ==true){
    setTimeout(() => {blink(closedlock2)},0);
    setTimeout(() => {fadeout(closedlock2)}, 920);
    setTimeout(() => {openlock2.forEach(function(button){classRemove(button, "disabled")}) }, 920);
}}

openlock2.forEach(function(button) {
    button.addEventListener("click", function(){
        fadeout(quest2)
        classRemove(quest2, "enabled");
        
        classAdd(exit, "enabled")
        classRemove(exit, "disabled")

        classRemove(nextbutton2, "disabled");
    })
});

nextbutton2.addEventListener("click", function(){
    fadeout(quest2)
    classRemove(quest2, "enabled");
        
    classAdd(exit, "enabled")
    classRemove(exit, "disabled")
})

previousbutton2.addEventListener("click", function(){
    fadeout(quest2);
    classRemove(quest2, "enabled");
        
    classAdd(quest1, "enabled")
    classRemove(quest1, "disabled")
})

// video 2
playbutton2.addEventListener("click", function(){
    if (vid2.currentTime > 0 && !vid2.paused && !vid2.ended && vid2.readyState > 2 === true) {
        vid2.pause();
        classAdd(pause2, "disabled")
        classRemove(play2, "disabled") 
    } else{
        vid2.play()
        classAdd(play2, "disabled")
        classRemove(pause2, "disabled") 
    };
})

resetbutton2.addEventListener("click", function(){
    vid2.currentTime = 0;
})

vid2.addEventListener("ended", function(){
    setTimeout(() => {blink(closedlock3)},0);
    setTimeout(() => {fadeout(closedlock3)}, 920);
    setTimeout(() => {openlock3.forEach(function(button){classRemove(button, "disabled")}) }, 920);
})

getComputedStyle(document.documentElement).getPropertyValue('--violett-accent');
getComputedStyle(document.documentElement).getPropertyValue('--violett-accent2');

openlock3.forEach(function(button) {
    button.addEventListener("click", function(){
        fadeout(exit)   
        classRemove(exit, "enabled")
    
        classAdd(reward, "enabled");
        classRemove(reward, "disabled");
        document.documentElement.style.setProperty('--violett-accent', "hsl(53, 100%, 72%)")
        document.documentElement.style.setProperty('--violett-accent2', "rgba(255, 234, 112, 0.302)")

        vid2.pause();
        classRemove(nextbutton3, "disabled");
        classAdd(pause2, "disabled")
        classRemove(play2, "disabled") 
    })
});

nextbutton3.addEventListener("click", function(){
    fadeout(exit)   
    classRemove(exit, "enabled")
    
    classAdd(reward, "enabled");
    classRemove(reward, "disabled");
    document.documentElement.style.setProperty('--violett-accent', "hsl(53, 100%, 72%)")
    document.documentElement.style.setProperty('--violett-accent2', "rgba(255, 234, 112, 0.302)")

    vid2.pause();
    classAdd(pause2, "disabled")
    classRemove(play2, "disabled") 
})

previousbutton3.addEventListener("click", function(){
    fadeout(exit);
    classRemove(exit, "enabled");
        
    classAdd(quest2, "enabled")
    classRemove(quest2, "disabled")

    vid2.pause();
    classAdd(pause2, "disabled")
    classRemove(play2, "disabled") 
})