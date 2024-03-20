<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-6">
        <div class="card text-center p-4">
          <div class="card-header bg-primary text-white">
            <h3 class="m-0">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label space-between">Username</label>
                <input type="text" class="form-control space-between shadow mb-3 rounded" id="username" v-model="username" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label space-between">Password</label>
                <input type="password" class="form-control space-between shadow mb-3 rounded" id="password" v-model="password" required>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userRoles from '@/assets/creds.json';
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const authenticatedUser = this.authenticateUser(this.username, this.password);
      if (authenticatedUser) {
        sessionStorage.setItem('loggedInUser', JSON.stringify(authenticatedUser));
        this.redirectUser(authenticatedUser.role);
      } else {
        window.alert('Invalid username or password. Please try again.');
      }
    },
    authenticateUser(username, password) {
      return userRoles.users.find(user => user.username === username && user.password === password);
    },
    redirectUser(role) {
      switch (role) {
        case 'admin':
          // Redirect to admin dashboard
          this.$router.push('/admin-dashboard');
          break;
        case 'team_leader':
          // Redirect to team leader dashboard
          this.$router.push('/team-leader-dashboard');
          break;
        default:
          // Redirect to employee dashboard (default)
          this.$router.push('/employee-dashboard');
          break;
      }
    }
  }
};
</script>

<style scoped>
.card {
  max-width: 400px;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.space-between {
  margin: 5px;
}
/* Apply shadow effect to input fields */
.form-control.shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Apply corner radius to input fields */
.rounded {
  border-radius: 5px;
}

/* Add margin between fields */
.mb-3 {
  margin-bottom: 15px;
}
</style>
