import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';

export class IncrementaAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementaAction implements Action {
    readonly type = DECREMENTAR;
}
