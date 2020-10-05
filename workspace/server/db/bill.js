import mongoose from 'mongoose';
const { Schema } = mongoose;

const billSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  billMonth: { $month },
  dateDue: { type: Date },
  hidden: Boolean,
  comments: [{ body: String, date: Date }],
  meta: {
    createdAt: {type: Date, default: Date.now}
  }
});