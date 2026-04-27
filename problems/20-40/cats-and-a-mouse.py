"""
x = 2
y = 5 
z = 4
xAndZ = abs(z - x) -> 2 
yAndZ = abs(z - y) -> 1

if(xAndZ == yAndZ):
  return "Mouse C"
elif(xAndZ < yAndZ):
  return "Cat A"
elif(yAndZ < xAndZ):
  return "Cat B"
"""
def catAndMouse(x, y, z):
    xAndZ = abs(z - x)
    yAndZ = abs(z - y)
    if(xAndZ == yAndZ):
        return "Mouse C"
    elif(xAndZ < yAndZ):
        return "Cat A"
    elif(yAndZ < xAndZ):
        return "Cat B"

print(catAndMouse(1, 3, 2))