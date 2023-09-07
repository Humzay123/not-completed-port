function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){

    //create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");

    //parent and child get there respective class
    parent.classList.add("parent");
    child.classList.add("child");

    // span parent gets child and child gets elem detail
    child.innerHTML= elem.innerHTML;
    parent.appendChild(child);


    //elem replace its vlaue with parent span
    elem.innerHTML="";
    elem.appendChild(parent); 
})
}

function loadAnimation(){
    var tl = gsap.timeline();

tl
.from(" .child span",{

    x: 100,
    stagger: .2,
    duration:1,
    delay:1,
   
    delay:1,
    ease:Power3.easeInOut



})
.to(".parent .child",{

    y: "-100%",
    duration:1,
    ease:Circ.easeInOut


})
.to("#loader",{

    height: 0,
    duration:1,
    ease:Circ.easeInOut


})
.to("#green",{

    height:  "100%" ,
    duration:1,
    top:0,
    duration:1,
    delay:-.9,
    ease:Circ.easeInOut
})
.to("#green",{

    height:  "0%" ,
    duration:1,
    top:0,
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
})

}

function animateSvg(){

    document.querySelectorAll("#Visual>g").forEach(function(e){

   var character = e.childNodes[1].childNodes[1];

        character.style.strokeDasharray= character.getTotalLength()+'px';
        character.style.strokeDashoffset= character.getTotalLength()+'px';



    })
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{

        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
        delay:2,

    })



}




revealToSpan(); 
loadAnimation();
animateSvg();



