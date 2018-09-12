import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { sign } from 'fake-jwt-sign' // For fakeAuthProvider only
import { BehaviorSubject, Observable, of, throwError as observableThrowError } from 'rxjs'
import { Role } from './role.enum'

export interface IAuthService {
  authStatus: BehaviorSubject<IAuthStatus>
}

export interface IAuthStatus {
  isAuthenticated: boolean
  userRole: Role
  userId: string
}

interface IServerAuthResponse {
  accessToken: string
}

export const defaultAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: null,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStatus = new BehaviorSubject<IAuthStatus>(
    // this.getItem('authStatus') ||
    defaultAuthStatus
  )
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>

  // private readonly exampleAuthProvider: (
  //   email: string,
  //   password: string
  // ): Observable<IServerAuthResponse> {
  // return this.httpClient.post<IServerAuthResponse>(`${environment.baseUrl}/v1/login`, {
  //   email: email,
  //   password: password,
  //   })
  // }

  private fakeAuthProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse> {
    if (!email.toLowerCase().endsWith('@test.com')) {
      return observableThrowError('Failed to login! Email needs to end with @test.com')
    }

    const authStatus = {
      isAuthenticated: true,
      userId: 'e4d1bc2ab25c',
      userRole: email.toLowerCase().includes('cashier')
        ? Role.Cashier
        : email.toLowerCase().includes('clerk')
          ? Role.Clerk
          : email.toLowerCase().includes('manager')
            ? Role.Manager
            : Role.None,
    } as IAuthStatus

    const authResponse = {
      accessToken: sign(authStatus, 'secret', {
        expiresIn: '1h',
        algorithm: 'none',
      }),
    } as IServerAuthResponse

    return of(authResponse)
  }

  constructor(private httpClient: HttpClient) {
    // Fake login function to simulate roles
    this.authProvider = this.fakeAuthProvider
    // Example of a real login call to server-side
    // this.authProvider = this.exampleAuthProvider
  }

  isAuthenticated() {
    return true
  }
}
