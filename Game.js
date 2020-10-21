class Game{

    gameDataArrayComputers
    gameDataArrayBuildings
    gameArrayComputers
    gameArrayBuildings
    gameMoney
    gameBoxMoney
    gameBtnReturn
    gameDataBoxBuilding
    gameDataBoxComputer
    gameBoxBuilding
    gameBoxComputer
    gameBoxGame
    gameItems
    ctx
    canvas


    constructor() {
        this.gameMoney = 150
        this.gameBoxMoney = document.getElementById("boxMoney")
        this.gameArrayComputers = []
        this.gameArrayBuildings = []
        this.gameDataArrayComputers = []
        this.gameDataArrayBuildings = []
        this.gameBtnReturn = document.getElementById("btnReturn")
        this.gameDataBoxBuilding = document.getElementById("boxBuilding")
        this.gameDataBoxComputer = document.getElementById("boxComputer")
        this.gameDataBoxGame = document.getElementById("boxGame").children[0]
        this.gameDataBoxComputer
        this.gameItems = []
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
    }

    //set data
        
    dataCreateDiv(data){
        //computers
        for (const computer in data.computer) {
            if (data.computer.hasOwnProperty(computer)) {
                const c = data.computer[computer];
                var comput = new Computer(c.name, c.price, this.gameDataBoxComputer.appendChild(document.createElement('div')))
                this.gameDataArrayComputers.push(comput)
                this.gameItems.push(comput)
            }
        }

        //buildings
        for (const building in data.building) {
            if (data.building.hasOwnProperty(building)) {
                const b = data.building[building];
                var build = new Building(b.name, b.maxComputer, b.price, this.gameDataBoxBuilding.appendChild(document.createElement('div')),b.width,b.height,b.link)
                this.gameDataArrayBuildings.push(build)
                this.gameItems.push(build)
            }
        }
    }


    //creating the skeletton of the game
    gameCreate(){
        this.dataCreateDiv(data)


        this.gamePrintData()
    }

    gamePlay(){
        this.gameBtnReturn.addEventListener("click",function ReturnClick(){
            game.gameMoney++
            game.gameBoxMoney.innerHTML = "money : "+game.gameMoney
            game.gameBoxMoney.classList.add("alert","alert-warning")
        })

    setInterval(() => {
        this.gameItems.forEach(item => {
            item.isAffordable()
        });


        game.gameBoxMoney.innerHTML = "money : "+game.gameMoney

          
    }, 33);
        
    }

    gamePrintData(){
        this.gameDataArrayComputers.forEach(computer => {
            computer.createDiv()
          });

        this.gameDataArrayBuildings.forEach(building => {
            building.createDiv()
        });
    }

    //draw with HTML
    /*drawItems(){
        this.gameArrayBuildings.forEach(building => {
            var divBuilding = this.gameDataBoxGame.appendChild(document.createElement('div'))
            divBuilding.innerHTML = building.name
            divBuilding.classList.add('item-d')
            if(this.gameArrayBuildings.computerArray){
                this.gameArrayBuildings.computerArray.forEach(computer => {
                    var divComputer = divBuilding.appendChild(document.createElement('div'))
                    divComputer.innerHTML = computer.name
                })
            }
            
        });
    }*/

    draw() {
        
        var i = 0
        console.log(this.gameArrayBuildings)
        this.gameArrayBuildings.forEach(building => {
            var img = document.createElement('img')
            img.src = building.link

            var sw = img.width
            var sh = img.height

            var sx = 0
            var sy = 0
            var spaceBetween = sw+sw/5


            this.ctx.drawImage(img, sx, sy, sw, sh, i*0 + spaceBetween*i, 25, sw, sh);
            this.ctx.fillRect(0,0,12,12);
            i++
        })


      }
}