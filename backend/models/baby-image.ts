import {Table, Column, Model, DataType, PrimaryKey, AllowNull} from 'sequelize-typescript';

@Table({
  timestamps: false,
})
class BabyImage extends Model<BabyImage> {

  @PrimaryKey
  @Column(DataType.TEXT)
  hash: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  name: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  day: Date;

  @AllowNull(false)
  @Column(DataType.NUMBER)
  dayNumber: number;

}

export default BabyImage;
