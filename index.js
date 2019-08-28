const winnerNumbersDiv = document.querySelector('.winner-numbers')
const button = document.querySelector('button')

class Ball {
  constructor(container, num) {
    this.num = num
    this.div = container
    this.container = {
      width: container.offsetWidth,
      height: container.offsetHeight
    }

    this.ball = null

    this.createBall()
  }
  createBall() {
    this.ball = document.createElement('div')

    this.ball.classList.add('ball')
    this.ball.style.width = this.width + 'px'
    this.ball.style.height = this.height + 'px'
    this.ball.innerText = this.num

    return this
  }

  appendBall() {
    this.div.appendChild(this.ball)

    return this
  }

  move() {

  }
}

class Lotto {
  constructor() {
    this.container = document.querySelector('.game-box')
    this.balls = []
    this.lossed = 0

    for (let i = 1; i <= 42; i++) {
      const ball = new Ball(this.container, i)
      ball.createBall().appendBall()
      this.balls.push(ball)
    }
  }

  loss() {
    if (!this.balls.length || this.lossed >= 5) return

    const random = Math.floor(Math.random() * this.balls.length)
    const winnerBall = this.balls[random]
    winnerNumbersDiv.innerHTML += '<div>' + (winnerBall.num) + '</div>'
    winnerBall.ball.classList.add('winner-ball')
    winnerBall.ball.style.backgroundColor = 'red'
    winnerBall.ball.style.color = 'white'
    setTimeout(() => {
      winnerBall.ball.classList.remove('winner-ball')
    }, 500)

    this.lossed++

    this.balls = this.balls.filter((ball, index) => random !== index)

    if (this.lossed >= 5)
      document.querySelector('.container').removeChild(button)
  }
}

const lotto = new Lotto()

button.addEventListener('click', () => lotto.loss())


