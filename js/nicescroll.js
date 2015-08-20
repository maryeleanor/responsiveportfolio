 var nice = false;

    $(document).ready(function() {
    nice = $("html").niceScroll();
    });
  
    $("#thisdiv").niceScroll({
        cursorcolor: "#FFFFFF", // change cursor color in hex
        cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
        cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: 5, // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "4px", // border radius in pixel for cursor
        zindex: 9999, // change z-index for scrollbar div
        scrollspeed: 60, // scrolling speed
        mousescrollstep: 40, // scrolling speed with mouse wheel (pixel)
        touchbehavior: false, // enable cursor-drag scrolling like touch devices in desktop computer
        hwacceleration: true, // use hardware accelerated scroll when supported
        boxzoom: false, // enable zoom for box content
        dblclickzoom: true, // (only when boxzoom=true) zoom activated when double click on box
        gesturezoom: true, // (only when boxzoom=true and with touch devices) zoom activated when pinch out/in on box
        grabcursorenabled: true, // (only when touchbehavior=true) display "grab" icon
        autohidemode: true, // how hide the scrollbar works, possible values: true, "cursor" (only cursor hidden), false (do not hide),
        background: "", // change css for rail background
        iframeautoresize: true, // autoresize iframe on load event
        cursorminheight: 20, // set the minimum cursor height (pixel)
        preservenativescrolling: true, // you can scroll native scrollable areas with mouse, bubbling mouse wheel event
        railoffset: false, // you can add offset top/left for rail position
        bouncescroll: false, // (only hw accell) enable scroll bouncing at the end of content as mobile-like 
        spacebarenabled: true, // enable page down scrolling when space bar has pressed
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 }, // set padding for rail bar
        disableoutline: true, // for chrome browser, disable outline (orange highlight) when selecting a div with nicescroll
        horizrailenabled: true, // nicescroll can manage horizontal scroll
        enabletranslate3d: true, // nicescroll can use css translate to scroll content
        enablemousewheel: true, // nicescroll can manage mouse wheel events
        enablekeyboard: true, // nicescroll can manage keyboard events
        smoothscroll: true, // scroll with ease movement
        sensitiverail: true, // click on rail make a scroll
        enablemouselockapi: true, // can use mouse caption lock API (same issue on object dragging)
        cursorfixedheight: false, // set fixed height for cursor in pixel
        hidecursordelay: 400, // set the delay in microseconds to fading out scrollbars
        directionlockdeadzone: 6, // dead zone in pixels for direction lock activation
        nativeparentscrolling: true, // detect bottom of content and let parent to scroll, as native scroll does
        enablescrollonselection: true, // enable auto-scrolling of content when selection text
        rtlmode: false, // horizontal div scrolling starts at left side
        cursordragontouch: false, // drag cursor in touch / touchbehavior mode also
        oneaxismousemode: "auto", // it permits horizontal scrolling with mousewheel on horizontal only content, if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
        scriptpath: "" // define custom path for boxmode icons ("" => same script path)
    });
  
  
    function toCell(px,py,ok) {
    $("#tab1").find('tr').eq(py).find('td').eq(px).addClass((ok)?'testok':'testko');
    };
  
    $(window).load(function() {
    $("#div1").html($("#div1").html()+' '+nice.version);
	$("#div2").html($("#div2").html()+' '+navigator.userAgent);

	toCell(1,1,nice.detected.ismozilla);
	
	toCell(2,1,(nice.detected.iswebkit));
	
	toCell(3,1,nice.detected.isie);
	toCell(3,2,nice.detected.isie10);
	toCell(3,3,nice.detected.isie9);
	toCell(3,4,nice.detected.isie8);
	toCell(3,5,nice.detected.isie7);
	toCell(3,6,nice.detected.isieold);

	toCell(4,1,nice.detected.isopera);
    toCell(4,2,nice.detected.isopera12);
    toCell(4,3,nice.detected.isoperamini);
	
	toCell(5,1,nice.detected.isios);
	toCell(5,2,nice.detected.isios4);

    toCell(6,1,nice.detected.ischrome);
	toCell(6,2,nice.detected.ischrome22);
    toCell(6,3,nice.detected.ischrome26);
	
	toCell(0,8,nice.detected.cantouch);
	toCell(3,8,nice.detected.hasmstouch);

	toCell(1,10,nice.detected.hastransform);
	toCell(1,11,nice.detected.hastranslate3d);
	toCell(2,10,nice.detected.hastransition);
	toCell(2,11,!!nice.detected.transitionend);
	toCell(3,10,nice.hasanimationframe);
	toCell(3,11,nice.hascancelanimationframe);
    toCell(4,10,nice.detected.hasMutationObserver);

	toCell(1,12,nice.detected.hasmousecapture);
	toCell(2,12,((nice.detected.cursorgrabvalue!='')&&(nice.detected.cursorgrabvalue.substr(0,3)!='url')));
	toCell(3,12,nice.detected.haspointerlock);

	toCell(1,14,!nice.detected.cantouch);  
	toCell(2,14,!nice.detected.cantouch);  
	toCell(3,14,nice.detected.cantouch||nice.istouchcapable||nice.hasmstouch);
    toCell(4,14,nice.detected.isie9mobile);  
	
    });