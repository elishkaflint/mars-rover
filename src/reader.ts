import { Input } from './input';

export interface Reader {
    readInput: () => Input;
}