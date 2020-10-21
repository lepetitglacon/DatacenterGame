class Item {
    name
    price
    div
    eventListener

    constructor(name,price,div) {
        this.name = name
        this.price = price
        this.div = div
        this.onClick = function () {
            if(this.isAffordable()){
                this.buy()
            }
            
        }
        this.eventListener = this.div.addEventListener("click",this.onClick.bind(this))
    }

    createDiv(){
        this.div.innerHTML = this.name
        this.div.classList.add('item','mt-3','d-flex','justify-content-center')
    }

    isAffordable(){
        if(game.gameMoney >= this.price){
          this.div.classList.add('affordable')
          return true
        }
        else{
          if(this.div.classList.contains('affordable'))
          this.div.classList.remove('affordable')
          return false
        }
      }

      

      buy(){
        game.gameMoney = game.gameMoney - this.price
        if (this instanceof Computer) {
            game.gameArrayComputers.push(this)

        } else {
            game.gameArrayBuildings.push(this)
        }
        game.gameItems.push(this)
        game.draw()
        
      }

    
}