// import fs from 'fs'

const isProduction = process.env.NODE_ENV === 'production'

console.log('check:' + process.env.NODE_ENV)

interface BaseConfig {
    app: {
        port: string
        baseUrl: string
    }
}

let baseConfig: BaseConfig = {
    app: {
        port: process.env.port || '8080',
        baseUrl: isProduction ? '': "/"
    }
}

export default baseConfig
