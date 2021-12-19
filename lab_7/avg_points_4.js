points = [100, 99, 43, 24]

points.average = () => points.reduce((a, b) => a+b)/points.length

console.log(points.average())