
def getMoneySpent(keyboards, drives, b):
    result = 0
    for keyboard in keyboards:
      for drive in drives:
        cost = keyboard + drive
        if cost <= b:
          result = max(cost, result)
    if result == 0:
       return -1    
    else:
       return result
           
        

print(getMoneySpent([3,1], [5, 2, 8], 10))