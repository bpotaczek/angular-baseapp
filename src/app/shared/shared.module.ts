import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faTrash,
    faBars,
    faTimes,
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faBars);
library.add(faTimes);
library.add(faPencilAlt);

import { KbxlSharedModule } from '@kbxl-lib/shared';
import { ToSelectItemPipe } from './pipes';

import { PanelModule } from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { GrowlModule } from 'primeng/growl';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CarouselModule } from 'primeng/carousel';
import { ListboxModule } from 'primeng/listbox';

import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

const primeModules = [
    PanelModule,
    InputMaskModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    SelectButtonModule,
    DialogModule,
    AutoCompleteModule,
    CardModule,
    InputSwitchModule,
    ToggleButtonModule,
    TabViewModule,
    DropdownModule,
    MessagesModule,
    CalendarModule,
    SidebarModule,
    MultiSelectModule,
    InputTextareaModule,
    PaginatorModule,
    GrowlModule,
    TabMenuModule,
    ConfirmDialogModule,
    CarouselModule,
    ListboxModule
];

@NgModule({
    declarations: [
        ToSelectItemPipe,
    ],
    imports: [
        KbxlSharedModule,
        CommonModule,
        FormsModule,
        ...primeModules,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
    providers: [
        MessageService,
        ConfirmationService
    ],
    exports: [
        ToSelectItemPipe,
        KbxlSharedModule,
        CommonModule,
        FormsModule,
        ...primeModules,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
