import * as apisauce from 'apisauce'
import _ from 'lodash'

class API {
  client = {}

  constructor(apiUrl) {
    this.client = apisauce.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  generateErrorMessage(res) {
    const data = res.data
    if (!data) {
      return 'Error can t reach the API'
    }
    if (_.isString(data.error)) {
      return data.error
    }
    const errors = data.errors
    if (_.isString(errors)) {
      return errors
    }
    if (Array.isArray(errors)) {
      return errors.join('\n- ')
    }
    if (_.isObject(errors)) {
      return _.reduce(errors, (result, obj, key) => {
        const val = obj.join(', ')
        return `${result}\n- ${key} : ${val}`
      }, '')
    }
    return 'Unknown error :/'
  }

  async query(method, path, params, opts) {
    const res = await this.client[method](path, params, opts)
    if (res.problem) {
      throw new Error(this.generateErrorMessage(res))
    }
    return res
  }

  async get(path, params = {}, opts = {}) {
    return this.query('get', path, params, opts)
  }

  async post(path, params = {}, opts = {}) {
    return this.query('post', path, params, opts)
  }

  async put(path, params = {}, opts = {}) {
    return this.query('put', path, params, opts)
  }

  async delete(path, params = {}, opts = {}) {
    return this.query('delete', path, params, opts)
  }
}

export default new API('http://localhost:3001/api')
