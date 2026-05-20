from math import ceil

# (0 + 1) * 5 = 5

def getMinimumCost(k, c):
    flowers = len(c)
    addition = 0
    add = k
    c.sort(reverse=True)
    cost = 0
    for i in range(flowers):
        if(i == k):
            addition += 1
            k += add
        value = (addition + 1) * c[i]  
        cost += value
    return cost


        

print(getMinimumCost(3, [1, 3, 5, 7, 9]))
