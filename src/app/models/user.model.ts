export class User   {

  userId: number;
  userName: string;
  password: string;
  email: string;
  activeStatus: number;
  profilePic: string;
 

  constructor(userId: number, userName: string, password: string, email: string, activeStatus: number, profilePic: string)  {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.activeStatus = activeStatus;
    this.profilePic = profilePic;
  
  }

}
