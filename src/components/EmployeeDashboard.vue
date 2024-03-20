<template>
    <div class="container">
      <h2>Employee Dashboard</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Team Leader</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.role }}</td>
            <td>{{ employee.teamLeader }}</td>
            <td>{{ employee.process }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import rolesData from '@/assets/creds.json';
  
  export default {
    data() {
      return {
        employees: [] // Array to store employee data
      };
    },
    mounted() {
      this.loadEmployeeData();
    },
    methods: {
      loadEmployeeData() {
        this.employees = rolesData.users.map((user, index) => ({
          id: index + 1,
          name: user.name,
          role: user.role,
          teamLeader: user.teamLeader,
          process: user.process
        }));
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  