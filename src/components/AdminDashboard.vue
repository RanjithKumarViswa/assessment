<template>
    <div class="container">
      <h2>Team-wise Employee List</h2>
      <button class="btn btn-primary mb-3" @click="showModal = true">Add Employee</button>
      <ModalDialog v-if="showModal" @close="showModal = false" @add-employee="addEmployee" />
      <table class="table">
        <thead>
          <tr>
            <th>Process</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Team Leader</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in teamEmployees" :key="employee.empId">
            <td>{{ employee.process }}</td>
            <td>{{ employee.empId }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ getTeamLeaderName(employee.leadId) }}</td>
            <td>{{ employee.DOJ }}</td>
            <td>{{ employee.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import rolesData from '@/assets/creds.json';
  import ModalDialog from './ModalDialog.vue';
  
  export default {
    data() {
      return {
        teamEmployees: [],
        showModal: false
      };
    },
    components: {
      ModalDialog
    },
    mounted() {
      this.loadTeamEmployees();
    },
    methods: {
      loadTeamEmployees() {
        this.teamEmployees = rolesData.users;
      },
      getTeamLeaderName(leadId) {
        const teamLeader = rolesData.users.find(user => user.empId === leadId && user.role === 'team_leader');
        return teamLeader ? teamLeader.name : 'N/A';
      },
      addEmployee(newEmployee) {
        this.teamEmployees.push(newEmployee);
        console.log('New Employee Added:', newEmployee);
      }
    }
  };
  </script>
  
  <style>
  </style>
  