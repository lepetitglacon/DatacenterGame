class Game{

    gameDataArrayComputers
    gameDataArrayBuildings
    gameArrayComputers
    gameArrayBuildings
    gameMoney
    gameBoxMoney
    gameBtnReturn

    constructor() {
        this.gameMoney = 0
        this.gameBoxMoney = document.getElementById("boxMoney")
        this.gameArrayComputers = []
        this.gameArrayBuildings = []
        this.gameDataArrayComputers = []
        this.gameDataArrayBuildings = []
        this.gameBtnReturn = document.getElementById("btnReturn")
    }

    gameCreate(){
        this.constructComputers(data)
        //this.gameDataArrayBuildings = constructBuildings(data)


        this.gamePrintData()
    }

    gamePlay(){
        this.gameBtnReturn.addEventListener("click",function ReturnClick(){
            game.gameMoney++
            game.gameBoxMoney.innerHTML = "money : "+game.gameMoney
            game.gameBoxMoney.classList.add("alert","alert-warning")
        })

    setInterval(() => {
        this.gameDataArrayComputers.forEach(computer => {
            if(computer.isAffordable(this.gameMoney) & computer.eventListener){
                computer.buy()
            }
            
        });
    }, 33);
        
    }

    gamePrintData(){
        this.gameDataArrayComputers.forEach(computer => {
            computer.constructComputersDiv()
          });
    }

    constructComputers(data){
        for (const computer in data.computer) {
            if (data.computer.hasOwnProperty(computer)) {
                const c = data.computer[computer];
                var comput = new Computer(c.name, c.price)
                this.gameDataArrayComputers.push(comput)
            }
        }
    }
}