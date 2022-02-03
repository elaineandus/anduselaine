grade = int(input("Input Grade: "))

if grade>=98 and grade<=100:
    print("Your grade is 1.00")
elif grade>=95 and grade<=97:
    print("Your grade is 1.25")
elif grade>=92 and grade<=94:
    print("Your grade is 1.50")
elif grade>=89 and grade<=91:
    print("Your grade is 1.75")
elif grade>=85 and grade<=88:
    print("Your grade is 2.00")
elif grade>=82 and grade<=84:
    print("Your grade is 2.25")
elif grade>=80 and grade<=81:
    print("Your grade is 2.50")
elif grade>=77 and grade<= 79:
    print("Your grade is 2.75")
elif grade>=75 and grade<=76:
    print("Your grade is 3.00")
else:
    print("Out of range")