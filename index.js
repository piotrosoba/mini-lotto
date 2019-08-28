const winnerNumbersDiv = document.querySelector('.winner-numbers')
const button = document.querySelector('button')

class Ball {
  constructor(container, num) {
    this.num = num
    this.div = container
    this.ball = null

    this.createBall()
  }
  createBall() {
    this.ball = document.createElement('div')

    this.ball.classList.add('ball')
    this.ball.innerText = this.num

    return this
  }
  appendBall() {
    this.div.appendChild(this.ball)
    return this
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
    const winner = this.balls[random]
    winner.ball.style.opacity = 0

    const ball = document.createElement('div')
    ball.classList.add('winner-ball')
    winnerNumbersDiv.appendChild(ball)

    setTimeout(() => {
      ball.innerText = winner.num
      ball.classList.add('ball')
    }, 500)

    this.lossed++

    this.balls = this.balls.filter((ball, index) => random !== index)

    if (this.lossed >= 5)
      button.style.opacity = 0
  }
}

const lotto = new Lotto()

button.addEventListener('click', () => lotto.loss())
