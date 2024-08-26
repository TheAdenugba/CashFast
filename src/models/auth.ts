import mongoose, { Schema, Document } from "mongoose";

interface ICashFast extends Document {
  email?: string;
  createdAt: Date;
}

const CashFastSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "User must have an email"],
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

CashFastSchema.index({
  email: "text",
});

const CashFast = mongoose.model<ICashFast>("CashFast", CashFastSchema);

export default CashFast;
