const GITHUB_USERNAME = "ormanemirhan"; // Enter your username here

(async function initProfile() {
    const card = document.querySelector('.profile-card');
    const loading = document.getElementById('loading');
            
try {
    loading.style.display = 'block';
    card.style.opacity = '0.5';

    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await response.json();

    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || GITHUB_USERNAME;
    document.getElementById('username').textContent = `@${data.login}`;
    document.getElementById('bio').textContent = data.bio || 'Github Bio';
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('profileLink').href = data.html_url;

    } catch (error) {
        console.error('Hata:', error);
        document.getElementById('bio').textContent = 'Profile information could not be loaded!';
    } finally {
        loading.style.display = 'none';
        card.style.opacity = '1';
    }
})();
