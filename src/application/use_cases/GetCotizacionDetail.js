import CotizacionRepository from '../../domain/repositories/CotizacionRepository';

export const getCotizacionDetail = async (id) => {
  const repository = new CotizacionRepository();
  return await repository.getById(id);
};
