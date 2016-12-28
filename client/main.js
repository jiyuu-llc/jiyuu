import {createApp} from 'mantra-core';
import initContext from './configs/context';
import 'bootstrap';

// modules
import coreModule from './modules/core';
import notificationsModule from './modules/notifications';
import messengerModule from './modules/messenger';
import jiyuuModule from './modules/jiyuu';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(notificationsModule);
app.loadModule(messengerModule);
app.loadModule(jiyuuModule);
app.init();
