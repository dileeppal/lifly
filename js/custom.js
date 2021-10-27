jQuery(document).ready(function(){
    jQuery('.footer-link h5').click(function(){
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
            jQuery(this).parents().closest('.product-card').removeClass('added-to-cart');     
        }
    });
    jQuery(document).on('click', '.add-to-cart', function(){
        jQuery(this).parents().closest('.product-card').addClass('added-to-cart');
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
        })
    }, 1000);
    
});

