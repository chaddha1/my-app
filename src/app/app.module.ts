import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './basic-server-management-demo/servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CreateServerAndBlueprintComponent } from './create-server-and-blueprint/create-server-and-blueprint.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './basic-server-management-demo/server/server.component';
import { DebuggingComponent } from './basic-server-management-demo/debugging/debugging.component';
import { FirstComponent } from './directives-demo/first/first.component';
import { BasicHighlightDirective } from './directives-demo/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives-demo/better-highlight.directive';
import { UnlessDirective } from './directives-demo/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DebuggingComponent,
    DataBindingComponent,
    CreateServerAndBlueprintComponent,
    ServerElementComponent,
    FirstComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
