basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        led.plot(i, 0)
        control.waitMicros(100000)
        led.unplot(i, 0)
    }
    for (let j = 4; j >= 0; j--) 
    {
        led.plot(j, 0);
        control.waitMicros(100000);
        led.unplot(j, 0);
    }
})
