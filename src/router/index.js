// router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter function and createWebHistory
import LoginPage from '@/components/LoginPage.vue'; // Import your login component
import EmployeeDashboard from '@/components/EmployeeDashboard.vue';
import TeamEmployeeList from '@/components/TeamEmployeeList.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/employee-dashboard',
        name: 'EmployeeDashboard',
        component: EmployeeDashboard,
        meta: { requiresAuth: true } // Add meta field to specify authentication requirement
      },
      {
        path: '/team-leader-dashboard',
        name: 'TeamEmployeeList',
        component: TeamEmployeeList,
        meta: { requiresAuth: true } // Add meta field to specify authentication requirement
      },
      {
        path: '/admin-dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true } // Add meta field to specify authentication requirement
      },
    // Add more routes as needed
];
  
const router = createRouter({
    history: createWebHistory(),
    routes
});
  
export default router;
