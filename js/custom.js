jQuery(document).ready(function(){
    jQuery('.footer-link h5').click(function(){
        jQuery(this).parent().toggleClass('open');
    });
    jQuery('.nav-toggle').click(function(){
        jQuery('body').toggleClass('open');
    });
});