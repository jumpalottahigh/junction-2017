import { TestBed, inject } from '@angular/core/testing';

import { SmartStoreService } from './smart-store.service';

describe('SmartStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartStoreService]
    });
  });

  it('should be created', inject([SmartStoreService], (service: SmartStoreService) => {
    expect(service).toBeTruthy();
  }));
});
