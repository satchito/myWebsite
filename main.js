TweenMax.from(document.getElementById("ms_logo_main"), 1, {y:-100, opacity:0, ease:Power2.easeInOut});

TweenMax.from(".ms_shoutout", .5, {opacity:0, delay:.75, ease: Circ.easeIn});

TweenMax.from(document.getElementById("ms_main_gallery"), 1, {opacity:0, delay:1, ease: Circ.easeIn});

TweenMax.from(document.getElementById("ms_name_text"), .25, {fontSize:0, delay:2, ease: Circ.easeIn});

TweenMax.from(document.getElementById("ms_button_bar"), .2, {opacity:0, delay:2,});
