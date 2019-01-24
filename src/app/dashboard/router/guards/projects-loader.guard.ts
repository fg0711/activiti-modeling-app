 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShowProjectsAction } from '../../store/actions/projects';
import { AmaState } from 'ama-sdk';

@Injectable()
export class ProjectsLoaderGuard implements CanActivate {

    constructor(private store: Store<AmaState>) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        this.store.dispatch(new ShowProjectsAction());
        return of(true);
    }
}