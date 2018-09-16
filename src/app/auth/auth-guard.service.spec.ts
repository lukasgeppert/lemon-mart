import { TestBed } from '@angular/core/testing'
import { AuthGuard } from './auth-guard.service'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'
import { UiService } from '../common/ui.service'

describe('AuthGuard', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: [commonTestingProviders.concat([AuthGuard, UiService])],
    }))

  it('should be created', () => {
    const service: AuthGuard = TestBed.get(AuthGuard)
    expect(service).toBeTruthy()
  })
})
