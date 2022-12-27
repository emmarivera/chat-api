const Users = require('./users.models')
const RecoveryPassword = require('./recoveryPasswords.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPassword)
    RecoveryPassword.belongsTo(Users)

    //? users - messages
    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    //? users - conversations
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    //? usuarios y participaciones tabla pivote entre users - conversations
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    //? conversations - messages
    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

    //? conversations - participants
    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
}

module.exports = initModels