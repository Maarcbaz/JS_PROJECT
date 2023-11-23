let count = 0;

document.getElementById('incBtn').onclick = function () {
    count += 1;
    document.getElementById('number').innerHTML = count
}

document.getElementById('decBtn').onclick = function () {
    count -= 1;
    document.getElementById('number').innerHTML = count
}

document.getElementById('resBtn').onclick = function () {
    count = 0;
    document.getElementById('number').innerHTML = count
}