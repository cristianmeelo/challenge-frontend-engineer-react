import packageJson from '../../../package.json';

const { version } = packageJson;

const url: { [key: string]: string } = {
  development: 'https://challenge-frontend-engineer-react-api.vercel.app/',
  production: 'https://challenge-frontend-engineer-react-api.vercel.app/',
  test: 'https://',
};

const NODE_ENV = process.env.NODE_ENV;

export { url, version, NODE_ENV };
