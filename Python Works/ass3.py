print("Enter total bill: ")

number = float (input())

if number >= 20000:
    discount = number * 0.15
elif number >= 15000:
    discount = number * 0.10
elif number >= 10000:
    discount = number * 0.05
else:
    discount = 0

net = number - discount

print ("\nThe Discount is:   \t", discount,)
print ("\nThe Net Payable amount is: \t", net)