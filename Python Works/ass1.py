subject1 = float(input ("Enter the mark of First subject   :"))
subject2 = float(input ("Enter the mark of Second subject  :"))
subject3 = float(input ("Enter the mark of Third subject   :"))
subject4 = float(input ("Enter the mark of Fourth subject  :"))
subject5 = float(input ("Enter the mark of Fifth subject   :"))

numitems = int(input("\nEnter the total number of items    :"))

total = subject1 + subject2 + subject3 + subject4 + subject5
ave = total / 5.0
percentage = (total / numitems) * 100

print ("\n\nThe Total Grade is               :", total)
print ("\nThe Average marks is               :", ave)
print ("\nThe Percentage is                  :", percentage, "%")

if (percentage >= 66):
    print("Division                           : First")
elif (percentage >= 45):
    print("Division                           : Second")
elif (percentage >= 33):
    print("Division                           : Third")
elif (percentage < 33):
    print("Division                           : Failed")
