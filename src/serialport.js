import SerialPort from 'serialport'
//import MockBinding from '@serialport/binding-mock'
//SerialPort.Binding = MockBinding
//MockBinding.createPort('/dev/ROBOT', { echo: true, record: true })

export let serialPort = undefined

export const createSerialPort = async ({port, baudRate = 115200}) => {
  return new Promise((resolve, reject) => {
    const temp = new SerialPort(port, {
      baudRate,
      autoOpen: true,
    })

    temp.on('error', (e) => {
      reject(e)
    })

    temp.on('open', () => {
      serialPort = temp
      resolve(serialPort)
    })
  })
}
