class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack( target ) {
        if( target instanceof Unit ) {
            target.res-=10;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    
    }
    buff( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res+=this.magnitude;
            }
            else{
                target.power+=this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
let red=new Unit("Red Belt Ninja",3,3,4);
let black=new Unit("Black Belt Ninja",4,5,4);
let hard=new Effect("Hard algorithem",2,"increase target's resilience by 3","resilience",3);
let unhandled=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
let Pair=new Effect("Pair Programming",3,"increase target's power by 2","power",2);