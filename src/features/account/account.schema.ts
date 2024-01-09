import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
})

export class Account extends Document {

  @Prop()
  email: string;

  @Prop()
  status: string;

  @Prop()
  isActive: boolean;

  @Prop()
  deletedAt: Date;

  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'JobPosting',
  // })
  // jobPostingId: JobPosting;

  // @Prop({ type: [{ type: Types.ObjectId,
  //    ref: 'User' }] })
  // users: User[];  


}
export const AccountSchema = SchemaFactory.createForClass(Account);