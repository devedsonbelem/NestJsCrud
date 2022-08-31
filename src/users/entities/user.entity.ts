import { Entity, ObjectID, ObjectIdColumn, Column}  from 'typeorm';

@Entity()
export class UserEntity {

  @ObjectIdColumn() 
  id: ObjectID; 
   
 
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  dateNasc: Date;

  @Column()
  lasCreated: Date;
 
   @Column()
   role : string;

  }
