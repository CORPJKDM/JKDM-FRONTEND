import { getCotizaciones, getCotizacionDetail } from '../../application/services/api';

export default class CotizacionRepository {
  async getAll() {
    return await getCotizaciones();
  }

  async getById(id) {
    return await getCotizacionDetail(id);
  }
}
