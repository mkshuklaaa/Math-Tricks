// Clocks: Calculate angle between hour and minute hand
function calculateClockAngle() {
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    if (isNaN(hours) || isNaN(minutes)) return;
    let hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    let minuteAngle = minutes * 6;
    let angle = Math.abs(hourAngle - minuteAngle);
    angle = Math.min(angle, 360 - angle);
    document.getElementById("clock-result").innerText = `Angle: ${angle}°`;
}

// Calendars: Find the day of the week
function findDayOfWeek() {
    let date = new Date(document.getElementById("date-input").value);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("calendar-result").innerText = `Day: ${days[date.getDay()]}`;
}

// Unit Digit Calculation
function findUnitDigit() {
    let num = parseInt(document.getElementById("unit-number").value);
    if (isNaN(num)) return;
    document.getElementById("unit-result").innerText = `Unit Digit: ${num % 10}`;
}

// Remainder Theorem
function calculateRemainder() {
    let dividend = parseInt(document.getElementById("dividend").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    if (isNaN(dividend) || isNaN(divisor) || divisor === 0) return;
    document.getElementById("remainder-result").innerText = `Remainder: ${dividend % divisor}`;
}

// LCM and HCF Calculation
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function calculateLCMHCF() {
    let numbers = document.getElementById("numbers").value.split(",").map(Number);
    if (numbers.includes(NaN)) return;
    let hcf = numbers.reduce(gcd);
    let lcm = numbers.reduce((a, b) => (a * b) / gcd(a, b));
    document.getElementById("lcm-hcf-result").innerText = `HCF: ${hcf}, LCM: ${lcm}`;
}

// Divisibility Rules Check
function checkDivisibility() {
    let num = parseInt(document.getElementById("divisibility-number").value);
    if (isNaN(num)) return;
    let result = num % 2 === 0 ? "Divisible by 2" : "Not divisible by 2";
    document.getElementById("divisibility-result").innerText = result;
}

// Squares, Cubes, Roots Calculation
function calculateSquaresAndRoots() {
    let num = parseInt(document.getElementById("square-number").value);
    if (isNaN(num)) return;
    document.getElementById("squares-result").innerText = `Square: ${num ** 2}, Cube: ${num ** 3}, √: ${Math.sqrt(num).toFixed(2)}, ∛: ${Math.cbrt(num).toFixed(2)}`;
}

// Percentage Calculation
function calculatePercentage() {
    let value = parseFloat(document.getElementById("percentage-value").value);
    let rate = parseFloat(document.getElementById("percentage-rate").value);
    if (isNaN(value) || isNaN(rate)) return;
    document.getElementById("percentage-result").innerText = `Result: ${(value * rate / 100).toFixed(2)}`;
}

// Profit & Loss Calculation
function calculateProfitLoss() {
    let cost = parseFloat(document.getElementById("cost-price").value);
    let sell = parseFloat(document.getElementById("selling-price").value);
    if (isNaN(cost) || isNaN(sell)) return;
    let result = sell > cost ? `Profit: ${sell - cost}` : `Loss: ${cost - sell}`;
    document.getElementById("profit-loss-result").innerText = result;
}
