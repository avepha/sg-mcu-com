const presets = [
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
  {
    header: 'configuration',
    data: {
      'topic': 'configuration',
      'method': 'query',
      'reqId': 'req-1'
    }
  },
  {
    header: 'log_level_save',
    data: {
      'topic': 'log_level_save',
      'method': 'mutation',
      'reqId': 'req-1',
      'data': {
        'level': 'fatal'
      }
    }
  },
  {
    header: 'date',
    data: {
      'topic': 'date',
      'method': 'query',
      'reqId': 'req-1',
      'data': {
        'local': true
      }
    }
  },
  {
    header: 'date_save',
    data: {
      'topic': 'date_save',
      'method': 'mutation',
      'reqId': 'req-1',
      'data': {
        'date': '2019-08-12T17:00:17.613Z'
      }
    },
  },
  {
    header: 'timezone',
    data: {
      'topic': 'timezone',
      'method': 'query'
    },
  },
  {
    header: 'timezone_save',
    data: {
      'topic': 'timezone_save',
      'method': 'mutation',
      'data': {
        'offset': '-02:00'
      }
    },
  },
  {
    header: 'station',
    data: {
      'topic': 'station',
      'method': 'query',
      'reqId': 'req-1',
      'data': {
        'address': 1
      }
    }
  },
  {
    header: 'stations',
    data: {
      'topic': 'stations',
      'method': 'query',
      'reqId': 'req-1'
    },
  },
  {
    header: 'sensor',
    data: {
      'topic': 'sensor',
      'method': 'query',
      'reqId': 'req-1',
      'data': {
        'id': 1
      }
    },
  },
  {
    header: 'sensors',
    data: {
      'topic': 'sensors',
      'method': 'query',
      'reqId': 'req-1'
    },
  },
  {
    header: 'gpio_state',
    data: {
      'topic': 'gpio_state',
      'method': 'query',
      'reqId': 'req-1'
    },
  },
  {
    header: 'gpio_task',
    data: {
      'topic': 'gpio_task',
      'method': 'query',
      'reqId': 'req-1'
    },
  },
  {
    header: 'channel',
    data: {
      'topic': 'channel',
      'method': 'query',
      'data': {
        'index': 1
      },
      'reqId': 'req-1'
    },
  },
]


export default presets
