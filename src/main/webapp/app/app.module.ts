import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { IthalaLemfundoSharedModule, UserRouteAccessService } from './shared';
import { IthalaLemfundoAppRoutingModule} from './app-routing.module';
import { IthalaLemfundoHomeModule } from './home/home.module';
import { IthalaLemfundoAdminModule } from './admin/admin.module';
import { IthalaLemfundoAccountModule } from './account/account.module';
import { IthalaLemfundoEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        IthalaLemfundoAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        IthalaLemfundoSharedModule,
        IthalaLemfundoHomeModule,
        IthalaLemfundoAdminModule,
        IthalaLemfundoAccountModule,
        IthalaLemfundoEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class IthalaLemfundoAppModule {}
