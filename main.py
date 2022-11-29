def on_forever():
    for i in range(5):
        led.plot(i, 0)
        control.wait_micros(100000)
        led.unplot(i, 0)
    j = 4
    while j >= 0:
        led.plot(j, 0)
        control.wait_micros(100000)
        led.unplot(j, 0)
        j -= 1
basic.forever(on_forever)
