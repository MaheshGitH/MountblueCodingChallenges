def insertion_sort(l):
    for i in range(1, len(l)):
        j = i-1 # 6
        key = l[i] # 2 
        while (j >= 0) and (l[j] > key):
           l[j+1] = l[j]
           j -= 1
        l[j+1] = key
    print(l)

insertion_sort([7, 4, 3, 5, 6, 2])