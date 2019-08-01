import { of } from 'rxjs';

import { logger } from './utils';

logger();
of('hi from observable').subscribe(console.log);
