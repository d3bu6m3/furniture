/** 
 * lightbox.js 
 * Date: 10/11/22
 * Author: Devbug
 */
const lightbox = document.querySelectorAll(".lightbox__image");
const lightboxNext = document.querySelector(".lightbox__next");
const lightboxPrev = document.querySelector(".lightbox__prev");
const lightboxCL = document.querySelector(".lightbox__close");
const lightboxOP = document.querySelectorAll(".gallery__link");

let lightboxIndex = 1;

/** Initiate */
lightboxShow(lightboxIndex);


/**  Events */
lightboxNext.addEventListener('click', function(){
    lightboxMove(1);});

lightboxPrev.addEventListener('click', function(){
    lightboxMove(-1);});

lightboxCL.addEventListener('click', function(){
    lightboxHide();});

lightboxOP.forEach(function(element, index) {
    element.addEventListener('click', function(){
    lightboxOpen();
    lightboxCurrent(index + 1);});});


/**  Functions */
function lightboxHide() {
    document.querySelector(".lightbox").style.display = "none";}

function lightboxOpen() {
    document.querySelector(".lightbox").style.display = "block";}

function lightboxMove(n) {
    lightboxShow(lightboxIndex += n);}

function lightboxCurrent(n) {
    lightboxShow(lightboxIndex = n);}

function lightboxShow(n) {
    var i;
    let lightboxImage = document.getElementsByClassName("lightbox__image");
    if (n > lightboxImage.length) {
        lightboxIndex = 1;}
    
    if (n < 1) {
        lightboxIndex = lightboxImage.length;}
    
    for (i = 0; i < lightboxImage.length; i++) {
        lightboxImage[i].style.display = "none";}

    lightboxImage[lightboxIndex-1].style.display ="block";}