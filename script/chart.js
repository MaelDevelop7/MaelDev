const ctx = document.getElementById('skillsChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Firebase', 'Tailwind'],
      datasets: [{
        label: 'Skill level',
        data: [9, 8, 9, 8, 9, 7, 8],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: { color: '#4b5563' },
          grid: { color: '#374151' },
          pointLabels: { color: '#d1d5db', font: { size: 14 } },
          ticks: { color: '#9ca3af', stepSize: 1, beginAtZero: true, max: 10 }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#f3f4f6' }
        }
      }
    }
  });