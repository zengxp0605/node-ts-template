
import { B } from './B';

export class A {
    public name = 'A';

    foo() {
        new B().foo();
    }
}