import { Controller } from '@nestjs/common';
import { UserStore } from './users.store';

@Controller('/albums')
export class AlbumsController {
  constructor(private store: UserStore){}
  }
