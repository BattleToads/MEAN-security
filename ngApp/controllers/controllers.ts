namespace myapp.Controllers {

    export class LoginController {

    }

    export class RegisterController {
      public user

      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService,
      ) {

      }
    }

}
