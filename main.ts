radio.onReceivedNumber(function (receivedNumber) {
    radio.sendString("Hei")
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(randint(1, 250))
})
let TELLER = 0
radio.setGroup(100)
radio.setTransmitPower(6)
basic.forever(function () {
    TELLER += 1
    basic.pause(10000)
})
