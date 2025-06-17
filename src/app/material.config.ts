import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export const materialProviders = importProvidersFrom(
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
);