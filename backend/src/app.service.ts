import { Injectable } from '@nestjs/common';
import { BaseLogger } from './common/abstract/logger.abstract';

@Injectable()
export class AppService {
  constructor(private readonly logger: BaseLogger) {

  }

  getHello(): string {
    return 'Hello World!';
  }
}
