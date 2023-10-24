var temp = 0;
function f1(){
    var p = document.getElementById('test');
    var test = document.getElementsByClassName('yellow');
    console.log(test[0]);
    if (temp==0){
        p.innerHTML='سلام دنیا';
        temp=1;
    }
    else{
        p.innerHTML='Hello world.';
        temp=0;
    }
}