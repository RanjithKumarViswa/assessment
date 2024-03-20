<template>
  <transition name="modal-fade">
    <div class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Employee</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addEmployee">
              <div class="form-group">
                <label for="empName">Name:</label>
                <input type="text" class="form-control" id="empName" v-model="newEmployee.name" required>
              </div>
              <div class="form-group">
                <label for="empUsername">Username:</label>
                <input type="text" class="form-control" id="empUsername" v-model="newEmployee.username" required>
              </div>
              <div class="form-group">
                <label for="empPassword">Password:</label>
                <input type="password" class="form-control" id="empPassword" v-model="newEmployee.password" required>
              </div>
              <div class="form-group">
                <label for="empRole">Role:</label>
                <select class="form-control" id="empRole" v-model="newEmployee.role" required>
                  <option value="admin">Admin</option>
                  <option value="team_leader">Team Leader</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div class="form-group">
                <label for="empId">Employee ID:</label>
                <input type="number" class="form-control" id="empId" v-model="newEmployee.empId" required>
              </div>
              <div class="form-group">
                <label for="empProcess">Process:</label>
                <input type="text" class="form-control" id="empProcess" v-model="newEmployee.process" required>
              </div>
              <div class="form-group">
                <label for="empDOJ">Date of Joining:</label>
                <input type="date" class="form-control" id="empDOJ" v-model="newEmployee.DOJ" required>
              </div>
              <button type="submit" class="btn btn-primary">Add Employee</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      newEmployee: {
        name: '',
        username: '',
        password: '',
        role: '',
        empId: null,
        leadId: null,
        process: '',
        DOJ: ''
      }
    };
  },
  methods: {
    addEmployee() {
      this.$emit('add-employee', this.newEmployee);
      this.newEmployee = {};
      this.$emit('close');
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.5s;
}
.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}
</style>
