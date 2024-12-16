start

new a number
new b number

set a 50
set b 50

if (a > b)
    log string "1st"
    log string "a > b"
else
    log string "2nd"
    if (b > a)
        log string "3rd"
        log string "a < b"
    else
        log string "4th"
        log string "a = b"
    log string "5th"
close

delete a
delete b
