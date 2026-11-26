let visitorCount = 12;
let totalRevenue = 5000;

function openTab(tabId) {
    let sections = document.getElementsByClassName("tab-section");

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add("hidden-tab");
    }

    document.getElementById(tabId).classList.remove("hidden-tab");
}

function increaseVisitor() {
    visitorCount++;

    document.getElementById("visitorCount").innerText = visitorCount;
    document.getElementById("visitorMessage").innerText = "Visitor count updated.";
}

function addDonation(event) {
    event.preventDefault();

    let amount = Number(document.getElementById("donationAmount").value);

    if (amount > 0) {
        totalRevenue += amount;

        document.getElementById("totalRevenue").innerText = totalRevenue;
        document.getElementById("donationForm").reset();
    }
}