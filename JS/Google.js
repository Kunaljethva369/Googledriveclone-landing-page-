// for searchbar bg color change and search content
function searchBar(){
    let searchbar = document.getElementById("searchBar");
    searchbar.classList.toggle("open");
    let pdf = document.getElementById("pdf");
    pdf.classList.toggle("contentOpener");
}

// for searchbar cross input
function searchcross(){
    let searchcross = document.getElementById("searchcross");
    searchcross.style.display = "flex";
    let pdf = document.getElementById("pdf");
    pdf.classList.remove("contentOpener");
    let input = document.getElementById("input");
    if(input.value == ""){
        searchcross.style.display = "none";
        pdf.classList.add("contentOpener");
    }
    let searchbar = document.getElementById("searchBar");
    searchbar.style.backgroundColor = "whitesomke";
}

// for searchbar cross button 
let searchcrossbtn = document.getElementById("searchcross");
searchcrossbtn.addEventListener("click",()=>{
    let input = document.getElementById("input");
    input.value = "";
    let pdf = document.getElementById("pdf");
    pdf.classList.add("contentOpener");
    let searchcross = document.getElementById("searchcross");
    searchcross.style.display = "none";
})

// for down click event in search bar
function down(){
    let down = document.getElementById("down");
    down.classList.toggle("downOpener"); 
}

// for cross inside the down in the search bar 
function downcross(){
    let down = document.getElementById("down");
    down.classList.toggle("downOpener");
}

// for type in down
function any(){
    let type = document.getElementById("type1");
    let any = document.getElementById("any");
    type.addEventListener("click",(e)=>{
        any.textContent = document.getElementById(e.target.id).textContent;
    });
    type.classList.toggle("type1contentOpener");
};


// for owner in down
function owner(){
    let anyonecontent = document.getElementById("anyonecontent");
    let anyone = document.getElementById("anyone");
    let anyone1 = document.getElementById("anyonecontent");
    anyone1.addEventListener("click",(e)=>{
        anyone.textContent = document.getElementById(e.target.id).textContent;
    });
    anyonecontent.classList.toggle("anyonecontentOpener");
}

// for date modified in down
function date(){
    let datecontent = document.getElementById("datecontent");
    let date = document.getElementById("date");
    datecontent.classList.toggle("datecontentOpener");
    datecontent.addEventListener("click",(e)=>{
        date.textContent = document.getElementById(e.target.id).textContent;
    });   
}

// for followup content in down
function followup(){    
    let follow = document.getElementById("followcontent");
    let dash = document.getElementById("dash");
    follow.classList.toggle("followcontentOpener");
    follow.addEventListener("click",(e)=>{
        dash.textContent = document.getElementById(e.target.id).textContent;
    });
}

// right slider closer
function closerSlider(){
    let greater = document.getElementById("greater");
    let info = document.getElementById("infocontent");
    let less = document.getElementById("less");
    if(greater.style.display = "flex"){
        less.style.display = "flex";
        greater.style.display = "none";
        info.classList.toggle("infocontentwidth");
    }
    else{
        greater.style.display = "flex";
    }
    let image = document.getElementById("images");
    image.classList.add("imageCloser");
    image.classList.remove("imageOpener");
    let middle = document.getElementById("middle");
    middle.classList.add("middlecontentOpener");
    let leftmiddle = document.getElementById("leftmiddle");
    leftmiddle.classList.add("leftmiddleOpener");
    let left = document.getElementById("leftslider");
    left.classList.add("leftsliderOpener");
}

// right slider opener
function openerSlider(){
    let greater = document.getElementById("greater");
    let info = document.getElementById("infocontent");
    let less = document.getElementById("less");
    if(greater.style.display = "none"){
        less.style.display = "none";
        greater.style.display = "flex";
        info.classList.toggle("infocontentwidth");
    }
    else{
        less.style.display = "flex";
    }
    let image = document.getElementById("images");
    image.classList.add("imageOpener");
    image.classList.remove("imageCloser");
    let middle = document.getElementById("middle");
    middle.classList.remove("middlecontentOpener");
    let leftmiddle = document.getElementById("leftmiddle");
    leftmiddle.classList.remove("leftmiddleOpener");
    let left = document.getElementById("leftslider");
    left.classList.remove("leftsliderOpener");
}

// for tab navigation in left sider
const tab = document.querySelectorAll(".tab");
tab[0].checked = true;
tab.forEach((e)=>{
    e.addEventListener("click",(event)=>{
        tab.forEach((e)=>{
            e.checked = false;
            e.parentElement.classList.remove("active");
        })
        event.target.checked = true;
        e.parentElement.classList.add("active");
    });
});


// for middle header title change
let middle = document.getElementById("middlecontent");

let mydrive = document.getElementById("mydrive");
mydrive.addEventListener("click",()=>{
    middle.innerHTML = 'My Drive <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"> <path d="M7 10l5 5 5-5z"></path> <path d="M0 0h24v24H0z" fill="none"></path> </svg>';
});
let shared = document.getElementById("shared");
shared.addEventListener("click",()=>{
    middle.textContent = shared.textContent;
});

let recent = document.getElementById("recent");
recent.addEventListener("click",()=>{
    middle.textContent = recent.textContent;
});

let starred = document.getElementById("starred");
starred.addEventListener("click",()=>{
    middle.textContent = starred.textContent;
});

let bin = document.getElementById("bin");
bin.addEventListener("click",()=>{
    middle.textContent = bin.textContent;
});

let storage = document.getElementById("storage");
storage.addEventListener("click",()=>{
    middle.textContent = storage.textContent;
})

// for small screen left content get bar
function bars(){
    let left = document.getElementById("left");
    left.classList.toggle("leftsmallOpener");
};

// for info in middle header
let info = document.getElementById("info");
info.addEventListener("click",()=>{
    let infocontent = document.getElementById("infocontent");
    infocontent.classList.toggle("infocontentOpener");
    let left = document.getElementById("leftmiddle");
    left.classList.toggle("middlecontentOpener");
});

// for infocross in middle header
function infocross(){
    let infocontent = document.getElementById("infocontent");
    infocontent.classList.toggle("infocontentOpener");
    let left = document.getElementById("leftmiddle");
    left.classList.toggle("middlecontentOpener");
}