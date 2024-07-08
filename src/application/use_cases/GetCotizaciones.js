import CotizacionRepository from '../../domain/repositories/CotizacionRepository';

export const getCotizaciones = async () => {
  const repository = new CotizacionRepository();
  return await repository.getAll();
};
