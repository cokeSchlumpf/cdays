import doodyChat, { types as doodyChatTypes } from '../../components/DoodyChat/redux/actions'
import chat, { types as chatTypes } from '../../components/Chat/redux/actions'

export const types = {
    doodyChat: doodyChatTypes,
    chat: chatTypes
}

export default {
    doodyChat,
    chat
}