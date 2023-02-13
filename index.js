const nav = document.getElementsByClassName("nav");
const pages = document.getElementsByClassName("page");

let last_index = 0;
for(let i = 0; i < nav.length; i++) {
    let nav_act = nav[i]; 
    nav_act.onclick = () => {
        if(i === last_index) return
        changePage(i)
    }
}

const changePage = (index) => {
    let nav_act = nav[index];
    nav_act.className += " active"
    nav[last_index].className = "nav"
    last_index = index
    for (let j = 0; j < pages.length; j++) {
        const page = pages[j]
        page.style = `top : -${index * 100 + 5}%`
    
    }
}

window.onwheel = (e) => {
    if(e.wheelDeltaY > 0) {
        if(last_index > 0) {
            changePage(last_index - 1)
        }
    }else if(e.wheelDeltaY < 0){
        if(last_index < pages.length - 1) {
            changePage(last_index + 1)
        }
    }
}
