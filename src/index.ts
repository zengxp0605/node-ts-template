import { cliMain, checkParam } from './some-lib';

import Game from './ctrl/game';

// 兼容原来的写法
const tools = require('./ori-code/tools');

// import { t } from '../libs/test';

class Index {
    private params: {};
    private socketId: string;

    constructor(params: {}, socketId: string) {
        this.params = params;
        this.socketId = socketId;
    }

    async test() {
        console.log('Index::test', this.params, this.socketId);

        cliMain();

        let param = {
            key: 'a',
            val: 222,
        } as testData;

        let rs = checkParam(param);
        console.log(rs);

        new Game();

        await tools.delay();
    }
}

export = Index;