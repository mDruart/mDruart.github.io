const nav = document.getElementsByClassName("nav");
const pages = document.getElementsByClassName("page");

let last_index = 0;
for(let i = 0; i < nav.length; i++) {
    let nav_act = nav[i]; 
    nav_act.onclick = () => {
        if(i === last_index) return
        nav_act.className += " active"
        nav[last_index].className = "nav"
        last_index = i
        for (let j = 0; j < pages.length; j++) {
            const page = pages[j]
            page.style = `top : -${i * 100 + 5}%`
        
        }
    }
}

