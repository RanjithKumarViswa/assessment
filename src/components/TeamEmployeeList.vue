<!-- TeamLeaderDashboard.vue -->
<template>
    <div class="container">
      <h2>My Team's Employee List</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in teamEmployees" :key="employee.empId">
            <td>{{ employee.empId }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.DOJ }}</td>
            <td>{{ employee.role }}</td>
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
        teamEmployees: []
      };
    },
    mounted() {
      this.loadTeamEmployees();
    },
    methods: {
        loadTeamEmployees() {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (loggedInUser && loggedInUser.role === 'team_leader') {
            this.teamEmployees = rolesData.users.filter(user => user.leadId === loggedInUser.empId);
            console.log(this.teamEmployees)
        } else {
            console.error('Team leader not found or user is not authenticated as a team leader');
        }
        }
    }
  };
  </script>
  
  <style scoped>
  </style>
  