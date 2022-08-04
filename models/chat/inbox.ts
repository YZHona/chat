import {
  getModelForClass,
  prop,
  DocumentType,
  Ref,
  index,
} from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import type { Types } from 'mongoose';
import { User } from '../user/user';
import { Message } from './message';

/**
 * 收件箱管理
 */
@index({ userId: 1 })
export class Inbox extends TimeStamps implements Base {
  _id: Types.ObjectId;
  id: string;

  @prop({
    ref: () => Message,
  })
  messageId: Ref<Message>;

  /**
   * 消息片段，用于消息的预览/发送通知
   */
  @prop()
  messageSnippet: string;

  /**
   * 接收方的id
   */
  @prop({
    ref: () => User,
  })
  userId: Ref<User>;
}

export type InboxDocument = DocumentType<Inbox>;

const model = getModelForClass(Inbox);

export type InboxModel = typeof model;

export default model;
