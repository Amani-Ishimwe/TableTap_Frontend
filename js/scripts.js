$(document).ready(function () {
  // Initialize Menu DataTable
  $('#menuTable').DataTable({
    pageLength: 10,
    responsive: true
  });

  // Initialize Orders DataTable
  $('#ordersTable').DataTable({
    pageLength: 10,
    responsive: true
  });
});