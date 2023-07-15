function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, delay)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      currentNumber++
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(15, 100, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('student-count').innerText = formattedNumber
  })
  animateNumber(75, 50, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('total-count').innerText = formattedNumber
  })
  animateNumber(35, 70, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('main-count').innerText = formattedNumber
  })
  animateNumber(26, 70, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('chief-count').innerText = formattedNumber
  })
  animateNumber(16, 100, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('years-count').innerText = formattedNumber
  })
})

