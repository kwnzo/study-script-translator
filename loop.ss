start
new i number
new j number
new x number
new line string
set i 0
set j 0
set x 0
set line ""

loop y (10 > i)
    set i i + 1

    set x i
    set j 0
    loop z (10 > j) 
        set line line + "1 "
        set x x + j
        set j j + 1
    end z

    log string line
    set line ""
end y

delete i
delete j
delete x
delete line

finish
