
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  async getFullList () {
    const response = await axios.get(`${this.BASE_URL}/characters`);
    return response.data;
  }

  async getOneRegister(characterId) {
  
    const response =  await axios.get(`${this.BASE_URL}/characters/${characterId}`)
    return response.data;
  }

  async createOneRegister(characterInfo) {
    const response =  await axios.post(`${this.BASE_URL}/characters/`, characterInfo)
    return response.data
  }

  async updateOneRegister(characterId ,characterInfo) {   
    const response =  await axios.put(`${this.BASE_URL}/characters/${characterId}`, characterInfo)
    return response.data

  }

  async deleteOneRegister(characterId) {
    const response =  await axios.delete(`${this.BASE_URL}/characters/${characterId}`)
  }
}
