const uuid = require('uuid')

const Users = require('../models/users.models')
const Conversations = require('../models/conversations.models')
const Messages= require('../models/messages.models')

const findAllMessageByConversationId = async (userId, conversationId) => {
    const data = await Messages.findAll({
        where:{
            conversationId
        }
    })
    return data
}

const findMessageById = async (id, conversationId) => {
    const data = await Messages.findOne({
        where: {
            id,
            conversationId
        }
    })
    return data
}


const createMessage = async(obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

const destroyMessage = async(id) => {
    const data = await Messages.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    findAllMessageByConversationId,
    findMessageById,
    createMessage,
    destroyMessage
}