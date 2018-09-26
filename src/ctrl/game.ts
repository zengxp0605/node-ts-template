import { game } from "../interface/game";

export default class Game implements game {
    public str = 'game start init.';

    public constructor() {
        this.init();
    }

    public init(): boolean {

        console.log(this.str);

        return true;
    }

    test() {
        console.log('game test');
    }
}