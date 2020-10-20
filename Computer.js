class Computer {

    name
    price
    div
    divPrice
    eventListener
  
    constructor(name, price) {
      this.name = name
      this.price = price
      this.div = boxComputer.appendChild(document.createElement('div'))
      this.divPrice = this.div.appendChild(document.createElement('small'))
      this.eventListener = this.div.addEventListener("click",function computerClicked(){
          return true
      })
    }
  
    constructComputersDiv(){
  
      this.div.innerHTML = this.name
      this.div.classList.add('item','mt-3','d-flex','justify-content-center')
  
      this.divPrice.innerHTML = "price "+this.price
      this.divPrice.classList.add('itemPrice','ml-1')
    }
  
    isAffordable(money){
      if(money >= this.price){
        this.div.classList.add('affordable')
      }
      else{
        if(this.div.classList.contains('affordable'))
        this.div.classList.remove('affordable')
      }
    }

    buy(money){

        
        return money
    }

    isClicked(){

    }
  }