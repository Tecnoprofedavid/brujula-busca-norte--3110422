input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
})
basic.forever(function () {
    basic.pause(1000)
    if (input.compassHeading() < 3 || input.compassHeading() > 357) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (input.compassHeading() < 180) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . .
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                . . . . #
                . . . # .
                . . # . .
                `)
        }
    }
})
