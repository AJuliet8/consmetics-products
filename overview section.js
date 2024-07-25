// scripts.js

// Sample data for charts (replace with actual data)
const salesChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [100, 150, 200, 180, 250, 300],
    }]
  };
  
  const productPerformanceChartData = {
    labels: ['Lipstick', 'Mascara', 'Foundation', 'Eyeshadow'],
    datasets: [{
      label: 'Product Performance',
      backgroundColor: ['#ffcccb', '#ffffcc', '#ccffcc', '#cceeff'],
      borderColor: ['#ff6384', '#ffce56', '#4bc0c0', '#36a2eb'],
      borderWidth: 1,
      data: [80, 60, 75, 90],
    }]
  };
  
  // Initialize Charts
  const salesCtx = document.getElementById('salesChart').getContext('2d');
  const productPerformanceCtx = document.getElementById('productPerformanceChart').getContext('2d');
  
  new Chart(salesCtx, {
    type: 'line',
    data: salesChartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  
  new Chart(productPerformanceCtx, {
    type: 'bar',
    data: productPerformanceChartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  