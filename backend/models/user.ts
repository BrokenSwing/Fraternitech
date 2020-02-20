import {Table, Column, Model, DataType, PrimaryKey} from 'sequelize-typescript';

@Table({
  timestamps: false,
})
class User extends Model<User> {

  @PrimaryKey
  @Column(DataType.TEXT)
  userId: string;

  @Column(DataType.TEXT)
  firstname: string;

  @Column(DataType.TEXT)
  lastname: string;

  @Column(DataType.TEXT)
  userToken: string;

  @Column(DataType.DATE)
  tokenExpiration: Date;

  @Column(DataType.BOOLEAN)
  isAdmin: boolean;

}

export default User;
