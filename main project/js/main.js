function calsPerDay() {
    function find(id) { return document.getElementById(id) }
    var age = find("age").value
    var height = find("height").value
    var weight = find("weight").value
    var result = 0
    if (find("male").checked)
        result = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    else if (find("female").checked)
        result = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)
    find("totalCals").innerHTML = Math.round(result)
}
calsPerDay()

// function idealWeight() {
//     function find(id) { return document.getElementById(id) }
//     // var heightt = find("heightt").value
//     var heightt = document.getElementById('heightt').value
//     var weightt = 0
//     if (find("malee").checked)
//         weight = (heightt - 100) * 1.15
//     else if (find("femalee").checked)
//         weightt = (heightt - 110) * 1.15
//     find("yourIdealWeight").innerHTML = Math.round(weightt)
// }

// idealWeight()