import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementaAction, DecrementaAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    contador: number;

    constructor(private store: Store<AppState>) {
        this.store.select('contador').subscribe((state) => this.contador = state);
    }

    incrementar() {
        const accion = new IncrementaAction();
        this.store.dispatch(accion);
    }

    decrementar() {
        const accion = new DecrementaAction();
        this.store.dispatch(accion);
    }
}
