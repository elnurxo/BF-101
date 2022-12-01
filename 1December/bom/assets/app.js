// 1. return the current screen width in pixels 
//inside of the h1 tag in html.
// let title = document.querySelector("h1");


// window.addEventListener("resize",()=>{
//     title.innerHTML = window.screen.width;
// })


// // 2. search the difference between width and availWidth, and write your own answer
// //below that h1 tag that you created in the previous task. (inside of a span tag)
// let availW = document.querySelector("#avail-width");
// availW.innerHTML = `current availWidth is ${window.screen.availWidth}, difference between width and avail width is that avaiWidth returns user interface width when screen.width return the whole width of the screen of the device.`

// 3. display the url of the website using bom objects.
// console.log(window.location.href);
// 4. what is location hostname and protocol in bom?

//5. there's a button in your html when u click it location assigns to different website (use location)
// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
    //window location assign
    // window.location.assign("http://google.com/");
    //window href
    // window.location.href = "http://google.com/";
    //window open
    // window.open("http://google.com/","_blank")
    //window close
    // window.close();

    // window.history.back() //go and forward;

    //7. there's a refresh button when u click it window has to refresh.
    // window.location.reload();
// });

// 9. write a function to open a new window and close a window and use Window object. 
//(there's 2 buttons // for opening and closing the window)
let open = document.querySelector("#open");
let close = document.querySelector("#close");

var Window;
open.addEventListener("click",()=>{
    Window = window.open("https://getbootstrap.com/","_blank","menubar=1,resizable=1,width=350,height=250,top=400,left=700");
});
close.addEventListener("click",()=>{
    Window.close();
});


//10. there's an input and change url button in your html and when u fill the input and click change url
//button it goes to that url.

