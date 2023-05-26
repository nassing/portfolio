function setCookie(name,value) 
{
    let date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";;
}

function getCookie(name) 
{
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) 
    {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function closeCookies()
{

    let div = document.getElementById("cookies");
    div.style.webkitAnimation = "cookiesoutanimation 300ms ease-out forwards";
    div.style.animation = "cookiesoutanimation 300ms ease-out forwards";
    wait(700);
    //div.remove();
}

function wait(ms) 
{
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < ms);
}

function rotateItem(id)
{
    let div = document.getElementById(id);

    div.children[0].classList.remove("unrotated");
    div.children[1].classList.remove("rotated");
    div.children[1].classList.remove("back");
    div.children[0].classList.add("rotated");
    div.children[1].classList.add("unrotated");
}

function rotateItemBack(id)
{
    let div = document.getElementById(id);

    div.children[0].classList.remove("rotated");
    div.children[1].classList.remove("unrotated");
    div.children[0].classList.add("unrotated");
    div.children[1].classList.add("rotated");
}

function showBackDivs() {
    const backDivs = document.querySelectorAll(".back");
  
    setTimeout(() => {
      backDivs.forEach((div) => {
        div.style.visibility = "visible";
      });
    }, 1000);
  }

function toggleProjects()
{

    let div = document.getElementById("projects-wrapper");
    div.style.visibility = div.style.visibility == "hidden" ? "visible" : "hidden";
}

if(getCookie("first_time") != null)
{
    let div = document.getElementById("cookies");
    div.remove();
}

setCookie("first_time", "true");