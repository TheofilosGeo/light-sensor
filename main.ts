let item = 0
basic.forever(function () {
    item = input.lightLevel()
    if (180 < item) {
        basic.showIcon(IconNames.Happy)
    } else if (40 < item) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(100)
})
