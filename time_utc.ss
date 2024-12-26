start

new timestamp number
new year number
new month number
new day number
new hours number
new minutes number
new remaining_milliseconds number
new formatted_month string
new formatted_day string
new formatted_hours string
new formatted_minutes string

set timestamp TIME
set remaining_milliseconds timestamp

? calculate year
set year 1970
loop year_calc (remaining_milliseconds > 31536000000)
  set remaining_milliseconds remaining_milliseconds - 31536000000
  set year year + 1
end year_calc

? calculate month
set month 1
loop month_calc (remaining_milliseconds > 2592000000)
  set remaining_milliseconds remaining_milliseconds - 2592000000
  set month month + 1
end month_calc

? calculate day
set day 1
loop day_calc (remaining_milliseconds > 86400000)
  set remaining_milliseconds remaining_milliseconds - 86400000
  set day day + 1
end day_calc

? calculate hours
set hours 0
loop hours_calc (remaining_milliseconds > 3600000)
  set remaining_milliseconds remaining_milliseconds - 3600000
  set hours hours + 1
end hours_calc

? calculate minutes
set minutes 0
loop minutes_calc (remaining_milliseconds > 60000)
  set remaining_milliseconds remaining_milliseconds - 60000
  set minutes minutes + 1
end minutes_calc

? format month
if (10 > month) 
  set formatted_month "0" + binary(month)
else
  set formatted_month binary(month)
close

? format day
if (10 > day) 
  set formatted_day "0" + binary(day)
else
  set formatted_day binary(day)
close

? format hours
if (10 > hours)
  set formatted_hours "0" + binary(hours)
else
  set formatted_hours binary(hours)
close

? format minutes
if (10 > minutes)
  set formatted_minutes "0" + binary(minutes)
else
  set formatted_minutes binary(minutes)
close

? output result
log string year >> "-" >> formatted_month >> "-" >> formatted_day >> " " >> formatted_hours >> ":" >> formatted_minutes

delete timestamp
delete year
delete month
delete day
delete hours
delete minutes
delete remaining_milliseconds
delete formatted_month
delete formatted_day
delete formatted_hours
delete formatted_minutes

finish

? output:
? 2025-01-09 11:37
? > program finished
?        compilation time: 8ms.
?        forgotten garbage size: 2 bites
