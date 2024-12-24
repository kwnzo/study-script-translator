start

new i number
new j number
new k number
new multiply number
new line string
set i 1
set j 1
set k 1
set multiply 0
set line ""

loop y (10 > i)
    set j 1
    loop z (10 > j)
        set k 0
        loop mult (i > k)
            set multiply multiply + j
            set k k + 1
        end mult

        if (10 > multiply)
            set line line + " " + binary(multiply) + " "
        else
            set line line + binary(multiply) + " "
        close

        set multiply 0
        set j j + 1
    end z

    log string line
    set line ""
    set i i + 1
end y

delete i
delete j
delete k
delete line

finish
