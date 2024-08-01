import {server} from './server/Server';
import 'dotenv/config';
import { Knex } from './server/database/knex';

const startServer = () => {
server.listen(process.env.PORT || 3000, () => {
    console.log(`app rodando na porta ${process.env.PORT || 3000} `);
});
};
if(process.env.IS_LOCALHOST !== 'true'){
Knex.migrate.latest().then(() => {
startServer();
})
.catch(console.log)
} else {
    startServer();
}