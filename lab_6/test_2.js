let plus = (a, b) => a + b
let isEqual = (res, ans) => (res == ans) ? console.log('True') : console.log('False')
tests = [
    {'example': [0, 1], answer: 1},
    {'example': [5, 74], answer: 228},
]
for (test of tests) {
    isEqual(test.answer, plus(test.example[0], test.example[1]))
}