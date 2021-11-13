class State {

    dateS:string;
    stateB:string;
    levelH:string;
    
    constructor( dateS: string,  stateB: string,  levelH: string) {
        this.dateS=dateS;
        this.stateB=stateB;
        this.levelH=levelH;
    }
    public getDateS():string{
        return this.dateS;
    }

    public getStateB():string{
        return this.stateB;
    }

    public getLevelH():string{
        return this.levelH;
    }
  }

  export default State;