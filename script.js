function generateFibonacci() {
    let input = document.getElementById('numberInput').value;
    let number = parseInt(input);

    if (isNaN(number)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let fibonacciSeries = getFibonacciSeries(number);

    document.getElementById('result').innerText = fibonacciSeries.join(', ');
}

function getFibonacciSeries(n) {
    if (n <= 0) {
        return [];
    }

    let series = [0];
    if (n === 1) {
        return series;
    }

    series.push(1);
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}
