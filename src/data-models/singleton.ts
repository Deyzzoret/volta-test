
import State from './state';

class StateManager {
    private static instance: StateManager ;

     stateList : State [];

    private constructor() { this.stateList = []; }

    public static getInstance(): StateManager {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }

        return StateManager.instance;
    }

    public getListState(): State[] {
        return this.stateList;
    }

    public addElement(dateS: string,  stateB: string,  levelH: string){
        this.stateList.push(new State(dateS,stateB,levelH));
    }


}


export default StateManager;