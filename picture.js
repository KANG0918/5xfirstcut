// // 程式碼寫這裡
const section =document.querySelector(".slide-section")
const slides = document.querySelectorAll(".slideImg")
const track = document.querySelector(".slide-track")
const navigator = document.querySelector(".slide-buttons-container")
const indicators = document.querySelectorAll(".slide-buttons")
let currentIndex = 0


function setupSlides(){
    const w = section.offsetWidth; //照片寬度
    
    slides.forEach((slide,i)=>{
        slide.style.left = `${i * w}px`
    })//將照片們橫向擺放
    
}

 

//移動寬度的function
function moveSlides(index){
    const w = section.offsetWidth
    track.style.transform = `translateX(-${index*w}px)`

}


navigator.addEventListener("mouseover",(e)=>{
    
    if (e.target.matches("button")){ //若按到button
        
        const dot = e.target
        const dotIndex = Number(dot.dataset.index);  //HTML裡的 data-index
        moveSlides(dotIndex)
    }
})
setupSlides() //初始化


