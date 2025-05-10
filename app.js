const p1s = document.querySelector('#p1s');
const p2s = document.querySelector('#p2s');
const p1b = document.querySelector('#p1b');
const p2b = document.querySelector('#p2b');
const re = document.querySelector('#reset');
const slist = document.querySelector("#slist");
let p1scr = 0;
let p2scr = 0;
let isGameOver = false;
let winScr = 3;
p1b.addEventListener('click',() => {
    if(! isGameOver){
        p1scr++;
        if(p1scr === winScr){
            isGameOver = true;
            p1s.classList.add('has-text-success');
            p2s.classList.add('has-text-danger');
            p1b.disabled = true;
            p2b.disabled = true;
        }
        p1s.innerText = p1scr;
    }
})
slist.addEventListener('change',function() {
   winScr = parseInt(this.value);
    reset();
})
p2b.addEventListener('click',() => {
    if(! isGameOver){
        p2scr++;
        if(p2scr === winScr){
            isGameOver = true;
            p2s.classList.add('has-text-success');
            p1s.classList.add('has-text-danger');
            p1b.disabled = true;
            p2b.disabled = true;
        }
        p2s.innerText = p2scr;
    }
})
re.addEventListener('click', reset);

function reset (){
    isGameOver = false;
    p1scr=0;
    p2scr=0;
    p1s.innerText = p1scr;
    p2s.innerText = p2scr;
    p1s.classList.remove('has-text-success', 'has-text-danger');
    p2s.classList.remove('has-text-success', 'has-text-danger');
    p1b.disabled = false;
    p2b.disabled = false;
}