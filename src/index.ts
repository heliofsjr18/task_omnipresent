import Server from './server';

const api = new Server('dev');

api.app.listen(3000, () => {
    console.log(`listening on port ${3000}`);
})