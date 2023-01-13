let x = 0
let inkr = 1
basic.forever(function () {
	
})
basic.forever(function () {
    led.plot(x, 0)
    basic.pause(100)
    led.unplot(x, 0)
    x += inkr
    if (x == 4 || x == 0) {
        inkr = inkr * -1
    }
})
