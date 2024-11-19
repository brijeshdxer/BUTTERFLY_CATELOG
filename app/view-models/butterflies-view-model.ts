import { Observable, ObservableArray } from '@nativescript/core';
import { Frame } from '@nativescript/core';
import { Butterfly } from '../models/butterfly';
import { butterflies } from '../data/butterflies';

export class ButterfliesViewModel extends Observable {
    private _butterflies: ObservableArray<Butterfly>;
    private _searchText: string = '';

    constructor() {
        super();
        this._butterflies = new ObservableArray(butterflies);
    }

    get butterflies(): ObservableArray<Butterfly> {
        return this._butterflies;
    }

    get searchText(): string {
        return this._searchText;
    }

    set searchText(value: string) {
        if (this._searchText !== value) {
            this._searchText = value;
            this.notifyPropertyChange('searchText', value);
            this.filterButterflies();
        }
    }

    onItemTap(args) {
        const butterfly = this._butterflies.getItem(args.index);
        Frame.topmost().navigate({
            moduleName: 'pages/butterfly-detail-page',
            context: butterfly
        });
    }

    private filterButterflies() {
        if (!this._searchText) {
            this._butterflies = new ObservableArray(butterflies);
        } else {
            const filtered = butterflies.filter(butterfly => 
                butterfly.commonName.toLowerCase().includes(this._searchText.toLowerCase()) ||
                butterfly.scientificName.toLowerCase().includes(this._searchText.toLowerCase())
            );
            this._butterflies = new ObservableArray(filtered);
        }
        this.notifyPropertyChange('butterflies', this._butterflies);
    }
}