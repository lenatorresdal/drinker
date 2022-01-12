var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'git@github.com:lenatorresdal/drinks.git', // Update to point to your repository  
        user: {
            name: 'Lena Tørresdal', // update to use your name
            email: '' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)