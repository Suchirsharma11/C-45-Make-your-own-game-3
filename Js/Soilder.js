class Soilder{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.Status = "";

        this.tDiertection = "none";
        this.dierection = "none";

        this.image = loadImage("Image/Soilder.png");

        this.living = "alive";
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 50, 100);
    }
    spawnSoilder(){
        if(soilder.Status === "spawnSoilder"){
            soilder.x = -Width/4 + Width/2;
            soilder.y = Height/2;
            soilder.Status = "spawnedSoilder";
        }
    }
    MoveSoilderUp(){
        Move(soilder, 0, -10);
        this.image = loadImage("Image/Soilder4.png");
    }
    MoveSoilderDown(){
        Move(soilder, 0, 10);
        this.image = loadImage("Image/Soilder3.png");
    }
    MoveSoilderLeft(){
        Move(soilder, -10, 0);
        this.image = loadImage("Image/Soilder1.png");
    }
    MoveSoilderRight(){
        Move(soilder, 10, 0);
        this.image = loadImage("Image/Soilder2.png");
    }
    death(){
        if(soilderPowerBar.power <= 1){
            this.living = "died";
        }
    }
}
