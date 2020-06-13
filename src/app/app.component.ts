import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromContador from './contador/contador.actions';
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
        const accion = new fromContador.IncrementaAction();
        this.store.dispatch(accion);
    }

    decrementar() {
        const accion = new fromContador.DecrementaAction();
        this.store.dispatch(accion);
    }
}
