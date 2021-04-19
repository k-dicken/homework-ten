import * as MODEL from "../model/model.js";

function init(){

    $("nav a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(btnID)

        

        // changes nav and hero
        if (btnID == "home") {

            $(".nav")
                .removeClass("black")
                .addClass("white");

            $(".logo").html(`<img src="images/logo/logo-white.svg" alt="white travel-fly logo">`);

            $(".hero")
                .removeClass("image")
                .addClass("image");

            $(".hero-removable").html(`<div class="hero-content">
            <p class="title">travel-fly</p>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
            Fugiat aliquid minus nemo sed est.</p>
                <a class="button" href="#">READ MORE</a>
            </div>`);

        } else if(btnID != "home") {

            $(".nav")
                .removeClass("white")
                .addClass("black");

            $(".hero")
                .removeClass("image");

            $(".logo").html(`<img src="images/logo/logo-black.svg" alt="black travel-fly logo">`);

            $(".hero-removable").html(``);
        }

        // switch (btnID) {
        //     case "home" :
        //         // do something
        //         break;
        //     case "tours" :
        //         // do something
        //         break;
        //     default:
        //         // do something
        //         break;
        // }
        // console.log(btnID);

        // if (btnID == "tours") {
        //     $("button").click(function() {
        //         // console.log(this.id);
        //         console.log("AAAAAAAAAAAAA");
        //     })
        // } 

        // $("button a").click(function(){
        //     alert("button cliked");
        // })
        
        MODEL.getPageContent(contentID, addListeners);
        // console.log("clikc");w
    })
}

function addListeners() {
    $("#app a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        console.log(this.id);

        if (btnID == "home") {

            $(".nav")
                .removeClass("black")
                .addClass("white");

            $(".logo").html(`<img src="images/logo/logo-white.svg" alt="white travel-fly logo">`);

            $(".hero")
                .removeClass("image")
                .addClass("image");

            $(".hero-removable").html(`<div class="hero-content">
            <p class="title">travel-fly</p>
            <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
            Fugiat aliquid minus nemo sed est.</p>
                <a class="button" href="#">READ MORE</a>
            </div>`);

        } else if(btnID != "home") {

            $(".nav")
                .removeClass("white")
                .addClass("black");

            $(".hero")
                .removeClass("image");

            $(".logo").html(`<img src="images/logo/logo-black.svg" alt="black travel-fly logo">`);

            $(".hero-removable").html(``);
        }


        MODEL.getPageContent(contentID, addListeners);
    })
    
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent", addListeners);
})