import {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Uder',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.']
  },
  tag: {
    type: String,
    required: ['Tag is required']
  }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;