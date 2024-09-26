import dataSourceProd from './data-source.prod';
import dataSourceLocal from './data-source.local';

export default process.env.NODE_ENV === 'production'
  ? dataSourceProd
  : dataSourceLocal;
