function Hauptfunktion () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Danke das sie micro:bit benutzen.")
    basic.pause(1000)
    basic.showString("Wir leiten Sie weiter an: micro:bit.com/Programm.com/12321344246786432")
    basic.pause(5000)
    basic.showString("Sie haben kein Internet Ihre Mobilen Daten sind aufgebraucht")
    soundExpression.twinkle.playUntilDone()
}
function _2 () {
    basic.pause(Update)
    basic.showString("Update Installiert ")
    Hauptfunktion()
}
function _5 () {
    basic.showString(Kein_Update)
    Hauptfunktion()
}
function _3 () {
    basic.pause(Version)
    basic.showString("Update Installiert ")
    Hauptfunktion()
}
function _4 () {
    basic.pause(Update)
    basic.showString("Update Installiert ")
    Hauptfunktion()
}
function _1 () {
    basic.pause(Update)
    basic.showString("Update Installiert ")
    Hauptfunktion()
}
let Kein_Update = ""
let Update = 0
let Version = 0
let Start = 0
let Verbindung = randint(0, 4)
let ErstellenVersion = randint(0, 4)
if (Verbindung == 0) {
    Start = 3000
} else if (Verbindung == 1) {
    Start = 5000
} else if (Verbindung == 2) {
    Start = 7000
} else if (Verbindung == 3) {
    Start = 10000
} else if (Verbindung == 4) {
    Start = 15000
}
if (ErstellenVersion == 0) {
    Version = 1
} else if (ErstellenVersion == 1) {
    Version = 1.1
} else if (ErstellenVersion == 2) {
    Version = 1.8
} else if (ErstellenVersion == 3) {
    Version = 1.9
} else if (ErstellenVersion == 4) {
    Version = 2
}
basic.pause(100)
basic.showString("Verbindung mit micro:bit System Server ...")
basic.pause(Start)
basic.clearScreen()
basic.showString("" + (Version))
basic.pause(2000)
if (Version == 1) {
    Update = 3000
} else if (Version == 1.1) {
    Update = 7000
} else if (Version == 1.8) {
    Update = 6000
} else if (Version == 1.9) {
    Update = 20000
} else {
    Kein_Update = "Kein Update erforderlich "
    Update = 0
}
if (Update == 3000) {
    _1()
} else if (Update == 7000) {
    _2()
} else if (Update == 6000) {
    _3()
} else if (Update == 20000) {
    _4()
} else {
    _5()
}
