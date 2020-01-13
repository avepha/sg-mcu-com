const presets = [
  {
    reqId: 'req-01',
    header: 'debug',
    data: {
      topic: 'debug_save',
      method: 'query',
      data: {
        debug: true
      }
    }
  },
  {
    reqId: 'req-02',
    header: 'info',
    data: {
      topic: 'info',
      method: 'query'
    }
  },
]


export default presets
