import app, { types as appTypes } from './app/actions';
import chat, { types as chatTypes } from './chat/actions';
import components, { types as componentsTypes } from './components/actions';
import services, { types as servicesTypes } from './services/actions';

export const types = {
  app: appTypes,
  chat: chatTypes,
  components: componentsTypes,
  services: servicesTypes
}

export default {
  app,
  chat,
  components,
  services
}