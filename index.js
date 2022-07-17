// for transition
// const transitionButtonTag = document.querySelector(".transitionButtons");
// const transitionDivTag = document.querySelector(".transition");

// transitionButtonTag.addEventListener("click", () => {
// transitionDivTag.classList.add("startTransition");
// });

// for transform
// const transformButtonTag = document.querySelector(".transformButtons");
// const transformDivTag = document.querySelector(".transform");

// transformButtonTag.addEventListener("click", () => {
// transformDivTag.classList.add("startTransform");
// });



const hanburgerMenuContainerTag  = document.querySelector(".hanburgerMenuContainer");
const hanburgerLine1Tag = document.querySelector(".line1");
const hanburgerLine2Tag = document.querySelector(".line2");
const hanburgerLine3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");
const liTag = document.getElementsByTagName("li");


hanburgerMenuContainerTag.addEventListener("click", () => {
        if(hanburgerMenuContainerTag.classList.contains("isOpened")) {
                hanburgerLine2Tag.classList.remove("hideLine2");
                hanburgerLine1Tag.classList.remove("rotatePlus45deg");
                hanburgerLine3Tag.classList.remove("rotateMinus45deg");
                hanburgerMenuContainerTag.classList.remove("isOpened");
                overlayMenuTag.classList.remove("showOverlayMenu");
                for(let i =0; i < liTag.length; i++) {
                        liTag[i].classList.remove("moveLiTagUp");
                }



        }else {
                hanburgerLine2Tag.classList.add("hideLine2");
                hanburgerLine1Tag.classList.add("rotatePlus45deg");
                hanburgerLine3Tag.classList.add("rotateMinus45deg");
                hanburgerMenuContainerTag.classList.add("isOpened");
                overlayMenuTag.classList.add("showOverlayMenu");
                for(let i =0; i < liTag.length; i++) {
                        liTag[i].classList.add("moveLiTagUp");
                }
        }

});


