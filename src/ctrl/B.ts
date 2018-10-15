

import { A } from './A';

export class B {

    foo() {
        console.log('模块间依赖输出结果: ', new A().name);
    }
};