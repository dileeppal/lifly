jQuery(document).ready(function(){
    jQuery(document).on('click', '.footer-link h5',function(){
        jQuery(this).parent().toggleClass('open');
    });
    jQuery('.nav-toggle').click(function(){
        jQuery('body').toggleClass('open');
    });
    jQuery(document).on('click', '.add' ,function () {
		if (jQuery(this).prev().val() < 30) {
    	jQuery(this).prev().val(+jQuery(this).prev().val() + 1);
		}
    });
    jQuery(document).on('click', '.sub' ,function () {
        if (jQuery(this).next().val() > 1) {
            if (jQuery(this).next().val() > 1) jQuery(this).next().val(+jQuery(this).next().val() - 1);
        } else {
            jQuery(this).parents().closest('.add-to-cart-row').removeClass('added-to-cart');     
        }
    });
    jQuery(document).on('click', '.add-to-cart', function(){
        jQuery(this).parents().closest('.add-to-cart-row').addClass('added-to-cart');
    });
    jQuery(document).on('click', '.add-to-wishlist', function(){
        jQuery(this).toggleClass('added');
    });

    setTimeout(() => {
        jQuery('.related-items').owlCarousel({
            loop:true,
            margin: 18,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        
        
    }, 1000);

    jQuery('.how-it-work-carousel').owlCarousel({
        loop:false,
        margin: 18,
        nav:false,
        mouseDrag: false,
        responsive:{
            0:{
                stagePadding: 40,
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

function siteNavigate (hideElement, showElement){
    if(hideElement){
        document.getElementById(hideElement).style.display = "none";
    }
    if(showElement){
        document.getElementById(showElement).style.display = "block";
    }
}

