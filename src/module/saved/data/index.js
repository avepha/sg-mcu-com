const presets = [
  {
    header: 'debug_save',
    data: {
      reqId: 'req-01',
      topic: 'debug_save',
      method: 'mutation',
      data: {
        debug: true
      }
    }
  },
  {
    header: 'info',
    data: {
      reqId: 'req-02',
      topic: 'info',
      method: 'query'
    }
  },
  {
    header: 'clear memory',
    data: {
      reqId: 'req-1',
      topic: 'clear_nvmemory',
      method: 'mutation',
    }
  },
]


export default presets
