let x = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let index = 0; index < 10; index++) {
        basic.showNumber(x)
        basic.pause(1000)
        x += 1
    }
})
