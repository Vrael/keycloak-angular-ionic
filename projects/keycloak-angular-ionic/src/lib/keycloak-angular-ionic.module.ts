/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { KeycloakBearerInterceptor, KeycloakService } from '../public_api';

@NgModule({
  imports: [CoreModule],
  providers: [KeycloakService, KeycloakBearerInterceptor]
})
export class KeycloakAngularIonicModule {}
