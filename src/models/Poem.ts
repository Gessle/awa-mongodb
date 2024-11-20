import mongoose, { Document, Schema } from 'mongoose'

interface IPoem extends Document {
    poem: string
    vip: boolean
    date: Date
}

let poemSchema: Schema = new Schema({
    poem: {type: String, required: true},
    vip: {type: Boolean, required: true},
    date: {type: Date, required: true}
})

const Poem: mongoose.Model<IPoem> = mongoose.model<IPoem>("Poem", poemSchema)

export {Poem, IPoem}