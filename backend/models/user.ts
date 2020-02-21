import {Table, Column, Model, DataType, PrimaryKey, Default, AllowNull} from 'sequelize-typescript';

@Table({
  timestamps: false,
})
class User extends Model<User> {

  @PrimaryKey
  @Column(DataType.TEXT)
  userId: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  firstname: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  lastname: string;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  isAdmin: boolean;

}

export default User;
