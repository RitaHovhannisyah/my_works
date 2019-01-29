var dzax=document.getElementById("dzax");
var aj=document.getElementById("aj");
var imigis=document.getElementById("imgis");

var mek=document.getElementById("mek");
var erku=document.getElementById("erku");
var irek=document.getElementById("irek");
var chors=document.getElementById("chors");
var hing=document.getElementById("hing");
var vec=document.getElementById("vec");

mek.addEventListener("click" ,function () {
    plusminus=0;
    imigis.src=arry[plusminus];
});
erku.addEventListener("click" ,function () {
    plusminus=1;
    imigis.src=arry[plusminus];
});
irek.addEventListener("click" ,function () {
    plusminus=2;
    imigis.src=arry[plusminus];
});
chors.addEventListener("click" ,function () {
    plusminus=3;
    imigis.src=arry[plusminus];
});
hing.addEventListener("click" ,function () {
    plusminus=4;
    imigis.src=arry[plusminus];
});
vec.addEventListener("click" ,function () {
    plusminus=5;
    imigis.src=arry[plusminus];
});



dzax.addEventListener("click" ,dzax1);
aj.addEventListener("click" ,aj1);


var arry=[];
arry.push("https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg");
arry.push("https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg");
arry.push("https://www.w3schools.com/howto/img_forest.jpg");
arry.push("https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746__340.jpg");
arry.push("https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg");
arry.push("https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_4.gif");
var plusminus=0;
imigis.src=arry[plusminus];




function dzax1() {
    plusminus--;
    imigis.src=arry[plusminus];
    if (plusminus===-1){
        plusminus=arry.length-1;
        imigis.src=arry[plusminus];
    }
}

function aj1() {
    plusminus++;
    imigis.src=arry[plusminus];
    if (plusminus===arry.length){
        plusminus=0;
        imigis.src=arry[plusminus];
    }
}