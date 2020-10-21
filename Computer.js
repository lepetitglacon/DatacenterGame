class Computer extends Item{

    div
    divPrice
  
    constructor(name, price, div) {
      super(name,price,div)
      this.div = div.appendChild(document.createElement('div'))
      this.divPrice = this.div.appendChild(document.createElement('small'))
      
    }
  }