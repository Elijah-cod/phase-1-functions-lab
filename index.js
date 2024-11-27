// Code your solution in this file!
function distanceFromHqInBlocks (value) {
    return value > 42 ? value - 42 : 42 - value
}

function distanceFromHqInFeet (num) {
    return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet (x , y) {
    return y > x ? (y - x) * 264 : (x - y) * 264
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet (start, destination)
    if (distance < 400){
        return 0
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    }else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}