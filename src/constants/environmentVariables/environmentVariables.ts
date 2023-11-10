import packageJson from '../../../package.json';

const { version } = packageJson;

const url: { [key: string]: string } = {
  development: 'https://my-json-server.typicode.com/tractian/fake-api',
  production: 'https://',
  test: 'https://',
};

const NODE_ENV = process.env.NODE_ENV;

export { url, version, NODE_ENV };
