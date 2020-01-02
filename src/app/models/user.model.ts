export class User   {

  userId: number;
  userName: string;
  password: string;
  email: string;
  activeStatus: number;

  constructor(userId: number, userName: string, password: string, email: string, activeStatus: number)  {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.activeStatus = activeStatus;
  }

}
