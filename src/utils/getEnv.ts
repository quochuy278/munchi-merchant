export function getEnvironment(path: string) {
  let envPath;
  if (process.env.NODE_ENV === "development") {
    envPath = `${process.env.REACT_APP_API__URL_DEV}/${path}`;
  } else {
    envPath = `${process.env.REACT_APP_API__URL_PROD}/${path}`;
  }
  console.log(envPath);
  return envPath;
}
