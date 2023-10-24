var r = Math.random()*3;
r = Math.ceil(r);
console.log(r);
if (r==1){
    document.getElementById('gold').style.left=15+'vw';
}
else if (r==2){
    document.getElementById('gold').style.left=45+'vw';
}
else if(r==3){
    document.getElementById('gold').style.left=75+'vw';
}
function move(n){
    if (n == 1){
        var item = document.getElementById('one');
    }
    else if(n==2){
        var item = document.getElementById('two');
    }
    else if(n==3){
        var item = document.getElementById('three');
    }
    item.style.top=30+'vw';
    console.log();
    if (r==n){
        setTimeout(function() {
            alert("Nice");
            location.reload();
        }, 1000);
    }
    else{
        setTimeout(function() {
            alert("Try again.");
            location.reload();
        }, 1000);
    }
}