basic.forever(function on_forever() {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.Sad)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    
})
