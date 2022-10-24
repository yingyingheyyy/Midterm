class Block extends Shape {
    constructor (pos,speed,color) {
        super(pos,speed,color)
    }
    move({
        super.move()
    })

    display(){
        fill(this.color)
        rectMode(CENTER)
        rec(this.pos.x,this.pos.y,100,100)
    }
}