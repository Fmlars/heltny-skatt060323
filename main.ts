radio.onReceivedNumber(function (receivedNumber) {
    radio.sendString("Hei")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(GRPNR)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(randint(1, 250))
})
let GRPNR = 0
let TELLER = 0
GRPNR = 100
radio.setGroup(GRPNR)
radio.setTransmitPower(6)
basic.forever(function () {
    TELLER += 1
    basic.pause(10000)
})
