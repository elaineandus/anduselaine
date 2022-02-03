# Python Program to Print Even Numbers up to N

maximum = int(input(" Please Enter any Number: "))

for number in range(1, maximum+1):
    if(number % 2 == 0):
        print("{0}".format(number))


        