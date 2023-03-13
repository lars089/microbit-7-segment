serial.redirect(
SerialPin.P0,
SerialPin.P16,
BaudRate.BaudRate9600
)
basic.pause(100)
serial.writeNumber(1234)
