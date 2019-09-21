export interface IAppConfig {
    port: string
}
export const appConfig = {
    port: process.env.port || '8080'
}
