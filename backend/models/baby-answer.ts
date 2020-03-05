import {Table, Column, Model, DataType, AllowNull, ForeignKey, PrimaryKey} from 'sequelize-typescript';
import User from './user';
import BabyImage from './baby-image';

@Table({
  timestamps: false,
})
class BabyAnswer extends Model<BabyAnswer> {

  @PrimaryKey
  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId: string;

  @PrimaryKey
  @ForeignKey(() => BabyImage)
  @Column(DataType.STRING)
  hash: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  answer: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  submitted: boolean;

}

export default BabyAnswer;
