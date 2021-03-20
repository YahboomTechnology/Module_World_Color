basic.forever(function () {
	led.enable(false)
    basic.showNumber(Module_World_US.Ultrasonic(DigitalPin.P12, DigitalPin.P7))
})
