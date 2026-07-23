import { fullstackPlatform } from './fullstack-platform';
import { warehousingOptimization } from './warehousing-optimization';

export const projects = [warehousingOptimization, fullstackPlatform].sort(
  (a, b) => a.order - b.order,
);

export { fullstackPlatform, warehousingOptimization };
