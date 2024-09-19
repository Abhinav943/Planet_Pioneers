document.addEventListener('DOMContentLoaded', () => {
  
    const dataForm = document.getElementById('dataForm');
    // const registrationSection = document.getElementById('registration');
    const dataEntrySection = document.getElementById('data-entry');
    const visualizationSection = document.getElementById('visualization');
    const recommendationsSection = document.getElementById('recommendations');
    const recommendationsList = document.getElementById('recommendationsList');
  
    
    

    // Handle data form submission
    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        dataEntrySection.classList.add('hidden'); // Hide data entry form
        visualizationSection.classList.remove('hidden'); // Show visualization section
        recommendationsSection.classList.remove('hidden'); // Show recommendations section
        
        // Mock data for visualization
        createChart(); // Create a chart with mock data
        generateRecommendations(); // Generate recommendations for carbon neutrality
    });

    // Function to create a mock chart
    function createChart() {
        const ctx = document.getElementById('dataChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Excavation', 'Transportation', 'Equipment', 'Afforestation'],
                datasets: [{
                    label: 'Carbon Estimations (in tons)',
                    data: [12, 19, 3, 5], // Mock data
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
                    borderColor: 'rgba(75, 192, 192, 1)', // Dark green
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true // Ensure Y-axis starts at 0
                    }
                }
            }
        });
    }

    // Function to generate recommendations
    function generateRecommendations() {
        const recommendations = [
            'Consider investing in carbon credits to offset emissions.',
            'Explore installing methane capture systems to reduce greenhouse gas emissions.',
            'Transition to renewable energy sources such as solar or wind to minimize carbon footprint.',
            'Adopt electric or hybrid machinery to reduce fuel consumption.',
            'Implement afforestation programs to further offset carbon emissions.'
        ];

        // Populate the recommendations list dynamically
        recommendationsList.innerHTML = recommendations.map(rec => `<p>${rec}</p>`).join('');
    }
});
