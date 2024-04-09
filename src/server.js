import App from './app';

const port = process.env.APP_PORT;

App.listen(port, () => {
  console.log();
  console.log(`Server Listen in http://localhost:${port}`);
});
