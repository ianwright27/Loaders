// trying classes

class CircleObject{

	// pass inner and outer jquery div selections by ID
	constructor(inner, outer){
		// for one
		this.outer = inner
		this.inner = outer

		this.enlargeLimit = this.outer.width() - 2;
		this.innerWidth = this.inner.width()
		this.innerHeight = this.inner.height()
		this.framerate = 30;
		this.timeframe = 1000/this.framerate;
		this.enlargeInterval = null // initially
	}

	run(){
		this.centerInnerCircle()
		this.initialize()	
	}

	centerInnerCircle(){
		// let outerWidth = outer.width()
		// let innerWidth = inner.width()

		let outerHeight = this.outer.height()
		let innerHeight = this.inner.height()

		// // calculate LEFT property
		// let leftPropValue = (outerWidth - innerWidth)/2

		// calculate TOP property
		let topPropValue = (outerHeight - innerHeight)/2

		// center vertically
		this.inner.css({
			'top': topPropValue + 'px'
		})

		// // center horizontally
		// inner.css({
		// 	'left': leftPropValue + 'px'
		// })

		// console.log(leftPropValue)
	}	

	enlargenInnerCircle(){
		// increment width
		this.innerWidth += 2
		this.innerHeight += 2

		// update css props
		this.inner.css({
			'width': innerWidth + 'px',
			'height': innerHeight + 'px'
		});

		// center inner circle
		this.centerInnerCircle()
	}
	
	fitInnerCircle(){
		this.inner.css({
			'top' : '0px',
			'left': '0px'
		})
	}

	replaceBackground(){
		let innerbg = this.inner.css('background-color')
		let outerbg = this.outer.css('background-color')

		// swap backgrounds
		this.outer.css({
			'background': innerbg
		});
		console.log('outer has inner bg')

		this.inner.css({
			'background': outerbg
		});

		// hide and reduce inner
		this.inner.hide();

		// reset inner dimensions to 0
		this.inner.css({
			'width' : '0px',
			'height': '0px'
		});

		// unhide inner
		this.inner.show();
		
		this.innerWidth = this.inner.width();
		this.innerHeight = this.inner.height();

		// call initialize again
		this.initialize();

		// debug
		console.log('started again')
	
	}
	
	action(){
		
		if (this.innerHeight < this.enlargeLimit && this.innerWidth < this.enlargeLimit) {
	
			this.enlargenInnerCircle()
	
		} else {
	
			this.fitInnerCircle()
	
			this.replaceBackground()
	
			clearInterval(this.enlargeInterval)
	
		}

	}

	initialize(){

		this.enlargeInterval = setInterval(this.action.bind(this), this.timeframe)

	}

}


//  main code
let circleOne = new CircleObject($("#inner1"), $("#outer1"))
let circleTwo = new CircleObject($("#inner2"), $("#outer2"))
let circleThree = new CircleObject($("#inner3"), $("#outer3"))

// runWithIntervals(500)

// function runWithIntervals(intervalValue){
// 	setTimeout(function(){
// 		circleOne.run()
// 	}, (intervalValue - intervalValue))

// 	setTimeout(function(){
// 		circleTwo.run()
// 	}, ((intervalValue - intervalValue) + intervalValue))

// 	setTimeout(function(){
// 		circleThree.run()
// 	}, (((intervalValue - intervalValue) + intervalValue) + intervalValue))
// }

circleOne.run();





	






