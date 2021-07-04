

// for many

let outer = $(".outer-circle")

let inner = $(".inner-circle")


// for one

// outer = $("#outer1")

// inner = $("#inner1")


let enlargeLimit = outer.width() - 2;

let innerWidth = inner.width()

let innerHeight = inner.height()

let framerate = 30;

let timeframe = 1000/framerate;


centerInnerCircle()

initialize()


function centerInnerCircle(){

	let outerHeight = outer.height()

	let innerHeight = inner.height()

	// calculate TOP property
	let topPropValue = (outerHeight - innerHeight)/2

	// center vertically
	inner.css({
		'top': topPropValue + 'px'
	})

}


function enlargenInnerCircle(){
	// increment width
	innerWidth += 2;
	innerHeight += 2;

	// update css props
	inner.css({
		'width': innerWidth + 'px',
		'height': innerHeight + 'px'
	});

	// center inner circle
	centerInnerCircle();
}


function fitInnerCircle(){
	inner.css({
		'top' : '0px',
		'left': '0px'
	})
}


function replaceBackground(){
	let innerbg = inner.css('background-color');
	let outerbg = outer.css('background-color');

	// swap backgrounds
	outer.css({
		'background': innerbg
	});
	console.log('outer has inner bg')

	inner.css({
		'background': outerbg
	});

	// hide and reduce inner
	inner.hide();

	// reset inner dimensions to 0
	inner.css({
		'width' : '0px',
		'height': '0px'
	});

	// unhide inner
	inner.show();
	
	innerWidth = inner.width();
	innerHeight = inner.height();

	// call initialize again
	initialize();

	// debug
	console.log('started again')
}


function initialize(){

	enlargeInterval = setInterval(function(){
	
		if (innerHeight < enlargeLimit && innerWidth < enlargeLimit) {
	
			enlargenInnerCircle()
	
		} else {
	
			fitInnerCircle()
	
			replaceBackground()
	
			clearInterval(enlargeInterval)
	
		}

	}, timeframe)

}

