export class ConnectionConfig {
    static ip = '192.168.43.119';
    static port = '8080';
    static getBaseUrl() {
        return 'http://' + this.ip + ':' + this.port;
    }
}
