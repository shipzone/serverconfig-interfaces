import { expect, tap } from '@pushrocks/tapbundle';
import * as serverconfigInterfaces from '../ts/index'

tap.test('first test', async () => {
  console.log(serverconfigInterfaces.standardExport)
});

tap.start();
