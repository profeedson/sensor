let distancia = 0
let duracao = 0
basic.showString("RADAR")
basic.forever(function () {
    // Enviar pulso no TRIG
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    // Medir tempo do ECHO
    duracao = pins.pulseIn(DigitalPin.P2, PulseValue.High)
    // Converter para centímetros
    distancia = duracao / 58
    basic.showNumber(distancia)
    // Se objeto estiver a menos de 20 cm
    if (distancia < 20 && distancia > 0) {
        // abre
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        // fecha
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(500)
})
