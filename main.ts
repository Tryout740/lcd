input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Diana love Tata si Mama si Dani ")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf(0)
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(1023)
LCD1IN8.LCD_Display()
// // LCD1IN8.DirectDisString(
// // 0,
// // 0,
// // "Deseneaza un patrat albastru, un cerc rosu si o linie verde",
// // 65535
// // )
// // LCD1IN8.DirectDrawRectangle(
// // 46,
// // 59,
// // 100,
// // 100,
// // 65000,
// // DRAW_FILL.DRAW_FULL,
// // DOT_PIXEL.DOT_PIXEL_1
// // )
// // LCD1IN8.DirectDrawCircle(
// // 83,
// // 64,
// // 25,
// // 2047,
// // DRAW_FILL.DRAW_FULL,
// // DOT_PIXEL.DOT_PIXEL_4
// // )
// // LCD1IN8.DirectDrawLine(
// // 0,
// // 40,
// // 68,
// // 76,
// // 63519,
// // DOT_PIXEL.DOT_PIXEL_1,
// // LINE_STYLE.LINE_DOTTED
// // )
// // LCD1IN8.DirectDrawRectangle(
// // 56,
// // 66,
// // 141,
// // 37,
// // 25368,
// // DRAW_FILL.DRAW_EMPTY,
// // DOT_PIXEL.DOT_PIXEL_1
// // )
// // LCD1IN8.LCD_Clear()
// // LCD1IN8.LCD_ClearBuf(0)
// // LCD1IN8.LCD_Display()
// // LCD1IN8.LCD_SetBL(1023)
// // LCD1IN8.DirectDisString(
// // 45,
// // 39,
// // "Deseneaza un cerc mare rosu, un patrat galben si o fata zambitoare albastra",
// // 4228
// // )
// // LCD1IN8.DirectDrawCircle(
// // 50,
// // 51,
// // 15,
// // 2047,
// // DRAW_FILL.DRAW_FULL,
// // DOT_PIXEL.DOT_PIXEL_1
// // )
// // LCD1IN8.DirectDrawRectangle(
// // 50,
// // 51,
// // 0,
// // 0,
// // 0,
// // DRAW_FILL.DRAW_EMPTY,
// // DOT_PIXEL.DOT_PIXEL_1
// // )
// LCD1IN8.LCD_ClearBuf(0)
// LCD1IN8.LCD_Clear()
// LCD1IN8.LCD_SetBL(1023)
// LCD1IN8.LCD_Display()
basic.forever(function () {
    LCD1IN8.DirectDrawRectangle(
    2,
    2,
    22,
    22,
    17969,
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DirectDrawRectangle(
    30,
    2,
    90,
    32,
    17969,
    DRAW_FILL.DRAW_EMPTY,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DirectDrawCircle(
    60,
    16,
    15,
    17969,
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
})
