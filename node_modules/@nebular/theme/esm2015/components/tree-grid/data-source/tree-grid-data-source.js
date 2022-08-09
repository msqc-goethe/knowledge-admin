/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbDataSource } from '../../cdk/table/data-source';
import { NbTreeGridDataService } from './tree-grid-data.service';
import { NbTreeGridFilterService } from './tree-grid-filter.service';
import { NbTreeGridSortService } from './tree-grid-sort.service';
import { NB_DEFAULT_ROW_LEVEL } from './tree-grid.model';
import { NbTreeGridService } from './tree-grid.service';
export class NbTreeGridDataSource extends NbDataSource {
    constructor(sortService, filterService, treeGridService, treeGridDataService) {
        super();
        this.sortService = sortService;
        this.filterService = filterService;
        this.treeGridService = treeGridService;
        this.treeGridDataService = treeGridDataService;
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this.renderData = new BehaviorSubject([]);
        this.filterRequest = new BehaviorSubject('');
        this.sortRequest = new BehaviorSubject(null);
    }
    setData(data, customGetters) {
        let presentationData = [];
        if (data) {
            presentationData = this.treeGridDataService.toPresentationNodes(data, customGetters);
        }
        this.data = new BehaviorSubject(presentationData);
        this.updateChangeSubscription();
    }
    connect(collectionViewer) {
        return this.renderData;
    }
    disconnect(collectionViewer) {
    }
    expand(row) {
        this.treeGridService.expand(this.data.value, row);
        this.data.next(this.data.value);
    }
    collapse(row) {
        this.treeGridService.collapse(this.data.value, row);
        this.data.next(this.data.value);
    }
    toggle(row, options) {
        this.treeGridService.toggle(this.data.value, row, options);
        this.data.next(this.data.value);
    }
    toggleByIndex(dataIndex, options) {
        const node = this.renderData.value && this.renderData.value[dataIndex];
        if (node) {
            this.toggle(node.data, options);
        }
    }
    getLevel(rowIndex) {
        const row = this.renderData.value[rowIndex];
        return row ? row.level : NB_DEFAULT_ROW_LEVEL;
    }
    sort(sortRequest) {
        this.sortRequest.next(sortRequest);
    }
    filter(searchQuery) {
        this.filterRequest.next(searchQuery);
    }
    updateChangeSubscription() {
        const dataStream = this.data;
        const filteredData = combineLatest([dataStream, this.filterRequest])
            .pipe(map(([data]) => this.treeGridDataService.copy(data)), map(data => this.filterData(data)));
        const sortedData = combineLatest([filteredData, this.sortRequest])
            .pipe(map(([data]) => this.sortData(data)));
        sortedData
            .pipe(map((data) => this.treeGridDataService.flattenExpanded(data)))
            .subscribe((data) => this.renderData.next(data));
    }
    filterData(data) {
        return this.filterService.filter(this.filterRequest.value, data);
    }
    sortData(data) {
        return this.sortService.sort(this.sortRequest.value, data);
    }
}
export class NbTreeGridDataSourceBuilder {
    constructor(filterService, sortService, treeGridService, treeGridDataService) {
        this.filterService = filterService;
        this.sortService = sortService;
        this.treeGridService = treeGridService;
        this.treeGridDataService = treeGridDataService;
    }
    create(data, customGetters) {
        const dataSource = new NbTreeGridDataSource(this.sortService, this.filterService, this.treeGridService, this.treeGridDataService);
        dataSource.setData(data, customGetters);
        return dataSource;
    }
}
NbTreeGridDataSourceBuilder.decorators = [
    { type: Injectable }
];
NbTreeGridDataSourceBuilder.ctorParameters = () => [
    { type: NbTreeGridFilterService },
    { type: NbTreeGridSortService },
    { type: NbTreeGridService },
    { type: NbTreeGridDataService }
];
//# sourceMappingURL=tree-grid-data-source.js.map