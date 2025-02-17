class Obstacle {
    constructor(ctx, x, y) {
      this.ctx = ctx
  
      this.x = x
      this.y = y
  
      this.width = 180
      this.height = 20
  
      this.vy = 3
    }
  
    draw() {
      this.ctx.save()
      this.ctx.fillStyle = 'orange'
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.restore()
    }
  
    move() {
      this.y += this.vy
    }
  }