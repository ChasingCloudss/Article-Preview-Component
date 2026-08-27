const sharePanel = document.querySelector(".share-panel")
const footerSection = document.querySelector(".footer-section")
const articleFooter = document.querySelector(".article-footer")
const openBtn = document.querySelector(".share-open-btn")
const closeBtn = document.querySelector(".share-close-btn")

openBtn.addEventListener("click", function (e){
    if (window.matchMedia("(max-width: 580px)").matches) {
        sharePanel.classList.remove("hidden")
        articleFooter.classList.add("hidden")
    }
})

articleFooter.addEventListener("mouseenter", function(){
    if (window.matchMedia("(min-width: 580px)").matches) {
        closeBtn.classList.add("hidden")
        openBtn.parentElement.appendChild(sharePanel)
        sharePanel.classList.remove("hidden")
    }
})

articleFooter.addEventListener("mouseleave", function(){
    if (window.matchMedia("(min-width: 580px)").matches) {
        closeBtn.classList.remove("hidden")
        footerSection.appendChild(sharePanel)
        sharePanel.classList.add("hidden")
    }
})

closeBtn.addEventListener("click", function(e){
    if (window.matchMedia("(max-width: 580px)").matches){
        sharePanel.classList.add("hidden")
        articleFooter.classList.remove("hidden")
    }
})