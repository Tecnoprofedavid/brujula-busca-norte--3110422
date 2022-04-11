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
        music.playMelody("C D E - C D E - ", 120)
    } else {
        if (input.compassHeading() < 180) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . # .
                . . . . #
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . # . . .
                # . . . .
                `)
            music.playTone(494, music.beat(BeatFraction.Whole))
        }
    }
})
