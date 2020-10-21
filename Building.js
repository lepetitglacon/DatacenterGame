class Building extends Item{

    computerArray
    maxComputer
    div
    divPrice
    width
    height
    link

    constructor(name, maxComputer, price, div, width,height,link) {
        super(name,price,div)
        this.maxComputer = maxComputer
        this.computerArray = [this.maxComputer]
        this.div = div.appendChild(document.createElement('div'))
        this.divPrice = this.div.appendChild(document.createElement('small'))
        this.width = width
        this.height = height
        this.link = link
    }

    addComputer(computer){
        if(this.computerArray.lenght >= this.maxComputer){
            alert("vous ne pouvez ajouter plus d'ordinateur")
        }
        else{
            this.computerArray.push(computer)
        }
    }

}