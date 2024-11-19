import { NavigatedData, Page } from '@nativescript/core';
import { ButterfliesViewModel } from '../view-models/butterflies-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ButterfliesViewModel();
}