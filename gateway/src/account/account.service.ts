import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AccountType } from './model/account-type';

@Injectable()
export class AccountService {
  constructor(@Inject('ACCOUNT') private _client: ClientProxy) {}

  findAll(): Observable<Array<AccountType>> {
    const pattern: any = { cmd: 'allAccounts' };
    return this._client.send<AccountType[]>(pattern, {});
  }

  findOne(email: string): Observable<AccountType> {
    const pattern: any = { cmd: 'oneAccount' };
    return this._client.send<AccountType>(pattern, { email });
  }

  login(email: string, pwd: string): Observable<AccountType> {
    const pattern: any = { cmd: 'login' };
    const payload: any = { email: email, pwd: pwd };
    return this._client.send<AccountType>(pattern, payload);
  }
}
