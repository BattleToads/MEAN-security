namespace myapp.Services {
  export class UserService {
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }

  }

  angular.module('myapp').service('userService', UserService);
}
