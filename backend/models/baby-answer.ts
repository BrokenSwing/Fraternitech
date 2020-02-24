import {Table, Column, Model, DataType, AllowNull, ForeignKey, PrimaryKey} from 'sequelize-typescript';
import User from './user';
import BabyImage from './baby-image';

@Table({
  timestamps: false,
})
class BabyAnswer extends Model<BabyAnswer> {

  @PrimaryKey
  @ForeignKey(() => User)
  @Column(DataType.TEXT)
  userId: string;

  @PrimaryKey
  @ForeignKey(() => BabyImage)
  @Column(DataType.TEXT)
  hash: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

}

export default BabyAnswer;
