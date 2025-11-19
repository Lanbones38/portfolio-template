async function loadUser() {
    const loader = document.getElementById("loader");
    loader.style.display = "block"; // show loader

    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        document.getElementById("avatar").src = user.picture.large;
        document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById("email").textContent = user.email;
        document.getElementById("location").textContent = `${user.location.city}, ${user.location.country}`;
    } catch (err) {
        alert("Failed to fetch user. Try again!");
    } finally {
        loader.style.display = "none"; // hide loader
    }
}

// Load first user automatically
loadUser();