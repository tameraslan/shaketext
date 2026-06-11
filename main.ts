input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0x000000)
    basic.showString("TICKET", 50)
    basic.showString("KASSA", 100)
    basic.showString("DREH!", 200)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
