import mongoose from 'mongoose'
const {
    randomBytes,
    pbkdf2Sync
} = await import('node:crypto');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is Required'],
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email',],
        },
        hash: {
            type: String,
            required: true,
            trim: true,
        },
        salt: {
            type: String,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.pre('save', function () {
    this.salt = randomBytes(256).toString('hex')
    this.hash = pbkdf2Sync(this.hash, this.salt,
        1000, 64, `sha512`).toString(`hex`);
})

userSchema.methods.matchPassword = function (password, err) {

    if (password === null) {
        next(err)
    }
    const inputtedPassword = pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
    return this.hash === inputtedPassword
}


export const User = mongoose.model('User', userSchema)