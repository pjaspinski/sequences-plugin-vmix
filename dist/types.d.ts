import { Action } from 'sequences-types';
export interface vMixInput {
    key: string;
    number: string;
    title: string;
}
export interface vMixAction extends Action {
    addInputField: boolean;
}
