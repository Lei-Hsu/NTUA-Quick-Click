//將hardBtn送出"hardMode"指令給content.js
let hardBtn = document.querySelector('#hardBtn');
hardBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{todo:"hardMode"})
    })
})

//將midBtn送出"midMode"指令給content.js
let midBtn = document.querySelector('#midBtn');
midBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{todo:"midMode"})
    })
})

//將lazyBtn送出"lazyMode"指令給content.js
let lazyBtn = document.querySelector('#lazyBtn');
lazyBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{todo:"lazyMode"})
    })
})