query = document.getElementById("query");
clearquerybtn = document.getElementById("clear");

counter = 0;    //for easter egg

function search() {
    link = "https://www.google.com/search?q=" + query.value;
    window.location.href = link;
}

function lucky() {
    window.location.href = doodles.google;
}

function showCross() {
    clearquerybtn.style.visibility = "visible";
}

function clearQuery() {
    query.value = "";
}

function get2(){ counter += 2; }
function lose1(){ counter -= 1; checkEaster()}
function showCount(){
    alert(counter);
}

function checkEaster() {
    if(counter == 7)
        window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=je8Efh6D6Rp_v5W0";
}