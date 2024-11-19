import { NavigatedData, Page } from '@nativescript/core';
import { ButterflyDetailViewModel } from '../view-models/butterfly-detail-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const butterfly = args.context;
    page.bindingContext = new ButterflyDetailViewModel(butterfly);
}