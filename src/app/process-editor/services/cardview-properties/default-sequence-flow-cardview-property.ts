 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
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

import { ElementHelper } from '../bpmn-js/element.helper';
import { BpmnProperty, DefaultSequenceFlowItemModel } from 'ama-sdk';
import { FactoryProps } from './cardview-properties.factory';

const property = BpmnProperty.defaultSequenceFlow;

export function createDefaultSequenceFlowProperty({ element }: FactoryProps) {
    return new DefaultSequenceFlowItemModel({
        label: 'PROCESS_EDITOR.ELEMENT_PROPERTIES.DEFAULT_SEQUENCE_FLOW',
        value: ElementHelper.getProperty(element, property),
        key: property,
        default: '',
        editable: true,
        data: { id: element.id }
    });
}