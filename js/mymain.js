jQuery(function () {
    jQuery("#whatsapp").floatingWhatsApp({ phone: "593962681396", size: "60px" });
  }),
    jQuery(window).scroll(function () {
      jQuery(window).width(),
        jQuery(this).scrollTop() > 150
          ? jQuery("#whatsapp")
              .stop()
              .css({ opacity: 1, visibility: "visible" })
              .animate({ visibility: "visible" }, { duration: 1e3 })
          : 0 == jQuery(this).scrollTop() &&
            jQuery("#whatsapp")
              .stop()
              .css({ opacity: 0, visibility: "hidden" })
              .animate({ visibility: "hidden" }, { duration: 1500 });
    });
  