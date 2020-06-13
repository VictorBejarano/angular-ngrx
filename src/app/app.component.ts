import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementaAction, DecrementaAction } from './contador/contador.actions';

interface AppState {
    contador: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    contador: number;

    constructor(private store: Store<AppState>) {
        // this.contador = 10;
        this.store.select('contador').subscribe((state) => this.contador = state);
    }

    incrementar() {
        // this.contador += 1;
        const accion = new IncrementaAction();
        this.store.dispatch(accion);
    }

    decrementar() {
        // this.contador -= 1;
        const accion = new DecrementaAction();
        this.store.dispatch(accion);
    }
}
