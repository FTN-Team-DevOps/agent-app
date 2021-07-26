import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublicationService {
  constructor(
    @Inject('Publication')
    private readonly publicationClient: ClientProxy,
  ) {}

  async test() {
    // const { data } = await this.httpService
    //   .get(this.configService.getPublicatonsRoute())
    //   .toPromise();

    const ok = await this.publicationClient
      .send('publications-get', {})
      .toPromise();
    return ok;
  }
}
