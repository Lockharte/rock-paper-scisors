let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(1, 3)
    if (x == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (x == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (x == 3) {
        basic.showLeds(`
            . # . . .
            # . # . #
            . # # # .
            # . # . #
            . # . . .
            `)
    }
})
basic.forever(function () {
	
})
