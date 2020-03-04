import {Table, Column, Model, DataType, PrimaryKey, AllowNull} from 'sequelize-typescript';

@Table({
  timestamps: false,
})
class BabyImage extends Model<BabyImage> {

  @PrimaryKey
  @Column(DataType.STRING)
  hash: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  day: Date;

  @AllowNull(false)
  @Column(DataType.NUMBER)
  dayNumber: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  ext: string;

}

export default BabyImage;
