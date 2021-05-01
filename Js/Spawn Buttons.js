class SpawnButton{
    constructor(){
        this.button1 = createButton("Treatment");
        this.button2 = createButton("Soilder");        
    }
    display(){
        this.button1.position(50, 20);
        this.button2.position(135, 20); 
        
        this.button1.mousePressed(() => {
            treatment.Status = "spawntreatment";
        })

        this.button2.mousePressed(() => {
            if(treatment.x !== 0, treatment.y !== -100){
                soilder.Status = "spawnSoilder";
            }
        })      
    }
    destroy(){
        this.button1 = "none";
        this.button2 = "none";
    }
}