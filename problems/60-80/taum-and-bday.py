def taumBday(b, w, bc, wc, z):
    caseOne = b * bc + w * wc
    caseTwo = b * bc + w * (bc + z)
    caseThree = w * wc + b * (wc + z)

    return min(caseOne, caseTwo, caseThree)

print(taumBday(3, 5, 3, 4, 1))
