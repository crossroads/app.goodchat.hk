import { version } from '../../package.json'

function getEnvironment() {
  return (process.env.NODE_ENV as string) || 'development'
}

function getVersion() {
  return process.env.REACT_APP_VERSION || `${version}-${getEnvironment()}`;
}

export const ENV      = getEnvironment();
export const VERSION  = getVersion();